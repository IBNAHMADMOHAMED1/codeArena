import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Kilian - Angular 14 Gallery Page');
    }

    ngOnInit() {
    }
}
