import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-app-landing',
    templateUrl: './app-landing.component.html',
    styleUrls: ['./app-landing.component.scss']
})
export class AppLandingComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Kilian - Angular 14 App Landing Page');
    }

    ngOnInit() {
    }

}