import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { DoctorsList } from '../doctorslist/doctorslist';
import { ThePopover } from '../thepopover/thepopover';
import { GallarySlides } from '../gallaryslides/gallaryslides';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              public pvrCtrl: PopoverController,
              public toastCtrl: ToastController) {
    
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      // title: 'تنبيه بالبطارية',
      message:'البطارية منخفضة',
      buttons: ['إبعاد'],
      cssClass: 'alertClass'
    });
    alert.present();
  }

  showDoctorsPage(){
    this.navCtrl.push(DoctorsList);
  }

  showPvr(){
    let pvr = this.pvrCtrl.create(ThePopover);
    pvr.present();
  }

  openGallary(){
    this.navCtrl.push(GallarySlides);
  }

  showToast(){
    let toast = this.toastCtrl.create({
      cssClass: 'alertClass',
      message:'ما في عروض',
      duration: 5000
    });
    toast.present();
  }
}
