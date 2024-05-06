  import { Component, OnInit, ViewChild } from '@angular/core';
  import { User } from '../user.model';
  import { MatPaginator } from '@angular/material/paginator';
  import { MatTableDataSource } from '@angular/material/table';
  import { MatDialog } from '@angular/material/dialog';
  import { UpdateUserComponent } from '../update-user/update-user.component';
  import userData from 'src/assets/userData.json';
  import { Router } from '@angular/router';
  import { UserService } from '../user.service';
import { AddUserComponent } from '../add-user/add-user.component';


  @Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
  })
  export class UserListComponent implements OnInit {
    dataSource!: MatTableDataSource<User>;
    displayedColumns: string[] = ['id', 'name', 'email', 'occupation', 'bio', 'actions'];

    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

    constructor(private userService: UserService, private router: Router, private dialog: MatDialog) {
      //this.dataSource = new MatTableDataSource<User>(userData);
    }

    ngOnInit(): void {
      this.userService.getUsers().subscribe(users => {
        this.dataSource = new MatTableDataSource<User>(users);
        this.dataSource.paginator = this.paginator;
      });
      this.dataSource.paginator = this.paginator;
      this.loadUsers();
    }

    
    applyFilter(event: Event): void {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    openDetails(id: number): void {
      this.router.navigate(['/user', id]);
    }

    openUpdateModal(user: User): void {
      const dialogRef = this.dialog.open(UpdateUserComponent, {
        width: "auto" ,
        data: {user}
      });
      
      dialogRef.afterClosed().subscribe(updatedUser => {
        if (updatedUser) {
          this.userService.updateUser(updatedUser).subscribe(() => {
            this.loadUsers();
          });
        }
      });
    }

    deleteUser(id: number): void {
      this.userService.deleteUser(id).subscribe(() => {
        this.loadUsers();
      });
    }
    

    refreshTable() {
      this.dataSource.paginator = this.paginator;
    }

    loadUsers(): void {
      this.userService.getUsers().subscribe(users => {
        this.dataSource = new MatTableDataSource<User>(users);
        if (this.paginator) {
          this.dataSource.paginator = this.paginator;
        }
      });
    }

    openAddUserModal(): void {
      const dialogRef = this.dialog.open(AddUserComponent, {
        width: "auto"
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.loadUsers();
        }
      });
    }

  }
