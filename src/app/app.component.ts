import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    user: any;
    users: any[] = [];

    constructor(
        private userService: UserService
    ) {
        this.user = new Object();
    }

    ngOnInit() {
        console.log('on init');
        this.loadUsers();
    }

    loadUsers() {
        this.userService.getUsers().subscribe(
            users => {
                console.log('got users list');
                this.users = users;
            },
            error => {
                console.log('somethings wrong here');
            }
        );
    }

    insertUser() {
        console.log('on init');

        this.userService.insertUser(this.user).subscribe(
            users => {
                console.log('got users list');
                this.loadUsers();
            },
            error => {
                console.log('somethings wrong here');
            }
        );
    }
}
