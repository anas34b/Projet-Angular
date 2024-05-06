import { Component } from '@angular/core';
import { User } from '../user.model';
import { UserService } from '../user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  newUser: User = new User();

  constructor(private userService: UserService, public dialogRef: MatDialogRef<AddUserComponent>) {}

  onSubmit(): void {
    this.userService.addUser(this.newUser).subscribe({
      next: (user) => {
        console.log('Utilisateur ajouté', user);
        this.dialogRef.close(true);
      },
      error: (error) => {
        console.error('Erreur lors de lajout de lutilisateur', error);
      }
    });
  }
}
