import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Kilian - Angular 14 Login Page');
    }

    ngOnInit() {
    }

}
