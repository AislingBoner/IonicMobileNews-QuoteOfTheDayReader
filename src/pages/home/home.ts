  import { Component } from '@angular/core';
  import { IonicPage, NavParams, NavController } from 'ionic-angular';
  import { Storage } from '@ionic/storage';

  import { SettingsPage } from '../../pages/settings/settings';
  import { NewsPage } from '../../pages/news/news';
  import { QuoteProvider } from '../../providers/quote/quote';


  @IonicPage()
  @Component({
    selector: 'page-home',
    templateUrl: 'home.html'
  })

  export class HomePage {
    
    name : string = "Aisling";
    quote : any [];

  

  constructor(public navCtrl: NavController, public navParams: NavParams, private qp: QuoteProvider, private storage: Storage) {
}

  ionViewWillEnter(){
    this.storage.get("name")
    .then((data) =>{
    this.name = data;

    })
    .catch((err) => {
      alert("Error Accesing Storage!");
    });
    console.log('Name Should have Saved');
    }

  ionViewDidLoad() {

    this.qp.getQuote().subscribe(data => {
    this.quote = data.contents.quotes;
      
    });


  }


  openNewsPage(){
    this.navCtrl.push(NewsPage);
    console.log('NewsPageShouldLoad');

    }


  openSettingsPage(){
    this.navCtrl.push(SettingsPage);
    console.log('SettingsPageShouldLoad');
   
  }


}
