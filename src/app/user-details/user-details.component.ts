import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user.model';
import userData from 'src/assets/userData.json';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: User | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = +this.route.snapshot.paramMap.get('id')!;
    this.user = userData.find(u => u.id === userId);
  }
}
