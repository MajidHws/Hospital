import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
@Component({
    templateUrl: 'tabs.html'
})

export class TabsPage{
    homeTab:any = HomePage;
    aboutTab:any = AboutPage;
    contactTab:any = ContactPage;
    constructor(){}
}