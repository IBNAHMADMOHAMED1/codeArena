import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-startup-agency',
	templateUrl: './startup-agency.component.html',
	styleUrls: ['./startup-agency.component.scss']
})
export class StartupAgencyComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Kilian - Angular 14 Startup Agency Landing Page');
    }

    ngOnInit() {
    }

}