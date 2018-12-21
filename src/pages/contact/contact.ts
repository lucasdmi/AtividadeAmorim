import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public pessoa = {
    matricula:'',
    nome:'',
    imagem:''

  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pessoa.nome = "Lucas";
    this.pessoa.matricula = "201521200033";
    this.pessoa.imagem = "../assets/imgs/abc.jpg";
  }

}
