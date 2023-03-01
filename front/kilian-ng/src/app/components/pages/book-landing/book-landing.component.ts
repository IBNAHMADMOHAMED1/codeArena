import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-book-landing',
    templateUrl: './book-landing.component.html',
    styleUrls: ['./book-landing.component.scss']
})
export class BookLandingComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Kilian - Angular 14 Book Landing Page');
    }

    ngOnInit() {
    }

}
