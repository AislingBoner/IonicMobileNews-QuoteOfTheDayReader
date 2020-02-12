import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

name: string;

country: string = "Ireland";
title: number = 4 ;
description: number = 3 ;


  constructor(public navCtrl: NavController, public navParams: NavParams, private storage : Storage) {
  }



  ionViewWillEnter(){

    this.storage.get("country")
    .then((data) =>{
      this.country = data;
    })
    .catch((err) => {
      alert("Error Accesing Storage!");
    });
    }

    

    ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

    

    saveSettings(){

      if (this.name == null){
      alert("Please Enter a Name to Save")
      
    } else {
      this.storage.set("name", this.name);
      this.storage.set("country", this.country);
      this.storage.set("title", this.title);
      this.storage.set("description", this.description);

      this.navCtrl.pop();
      console.log("Save function.");
    }
		  
	    }




}
  



