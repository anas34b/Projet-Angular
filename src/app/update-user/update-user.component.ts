import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from '../user.model';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  user!: User;
  constructor(
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {user: User}) { }

    ngOnInit(): void {
      this.user = this.data.user;
    }
  onSaveClick(): void {
    this.dialogRef.close(this.user);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
