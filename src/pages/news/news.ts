import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {NewsProvider} from '../../providers/news/news';


@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})

export class NewsPage {

country: string;
title: number;
description: number;

news: any [ ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private np: NewsProvider, private storage: Storage) {
  }

    
    ionViewWillEnter(){

    this.storage.get("country")
    .then((data) =>{
      this.country = data.toString();

      console.log(this.country);

      if (this.country == "Ireland"){
      this.np.getNewsIreland().subscribe(data =>{ 
        this.news = data.articles; });
       
      }else if(this.country == "Canada"){
      this.np.getNewsCanada().subscribe(data =>{ 
        this.news = data.articles; });
      
      }else if(this.country == "USA"){
      this.np.getNewsUSA().subscribe(data =>{
        this.news = data.articles; });
      
      }else{
      alert("Error Accesing Storage! ");
      }
      });


    this.storage.get("title")
    .then((data) =>{
      this.title = data.toString();
      console.log(this.title);
    });

     this.storage.get("description")
    .then((data) =>{
      this.description = data;
      console.log(this.description);

    });

    }
  
 
}

  