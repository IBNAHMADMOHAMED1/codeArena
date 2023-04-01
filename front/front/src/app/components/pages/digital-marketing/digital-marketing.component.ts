import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-digital-marketing',
    templateUrl: './digital-marketing.component.html',
    styleUrls: ['./digital-marketing.component.scss']
})
export class DigitalMarketingComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Kilian - Angular 14 Digital Marketing Landing Page');
    }

    ngOnInit() {
    }

}