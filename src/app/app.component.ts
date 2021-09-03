import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'The Dating app';
    users: any;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.httpClient.get("https://localhost:44347/api/users")
        .subscribe(response => {
            this.users = response;
            console.log(JSON.stringify(this.users));
        }, error => {
            console.log(error);
        });
    }
}
