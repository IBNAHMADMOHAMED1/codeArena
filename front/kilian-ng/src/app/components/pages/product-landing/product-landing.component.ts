import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-product-landing',
    templateUrl: './product-landing.component.html',
    styleUrls: ['./product-landing.component.scss']
})
export class ProductLandingComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Kilian - Angular 14 Product Landing Page');
    }

    ngOnInit() {
    }

}