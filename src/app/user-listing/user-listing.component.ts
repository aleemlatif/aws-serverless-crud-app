import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserDomainService } from '../services/user-domain.service';


@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  constructor(private userService: UserDomainService, private router: Router) { }

  public users;
  public deleteEvent = false;
  public addEvent = false;
  public deleteMessage = 'Record deleted successfully!';
  public addMessage = 'Record added successfully!';

  ngOnInit() {
    this.addEvent = this.userService.addEvent;
    this.deleteEvent = this.userService.deleteEvent;

    // Only Show one error at a time
    if (this.addEvent)  {
      this.deleteEvent = false;
    } else if (this.deleteEvent) {
      this.addEvent = false;
    }

    this.loadUsers();
  }

  private loadUsers() {
    this.userService.getUsers().subscribe(
      data => { this.users = data; },
      err => console.error(err),
      () => console.log('users loaded.')
    );
  }

  deleteUser(userEmail: string) {
    this.userService.deleteUser(userEmail).subscribe(() => {
      this.addEvent = false;
      this.userService.deleteEvent = true;
      this.deleteEvent = this.userService.deleteEvent;
      this.loadUsers();
    });
  }

}
