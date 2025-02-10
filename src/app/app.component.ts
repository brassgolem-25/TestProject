import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNG } from 'primeng/config';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports:[RouterOutlet]
})
export class AppComponent implements OnInit {

    constructor(private primeng: PrimeNG) {}

    ngOnInit() {
        this.primeng.ripple.set(true);
    }
}