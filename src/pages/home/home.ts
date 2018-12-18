import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: string[]; 
  name: string;
  nome: string;
  cont: number;
  teste: string;
  

  constructor(public navCtrl: NavController) {
    this.teste = 'testando';
    this.name = '';
    
    

  }
 
  adicionar(name: string){
    this.nome = name;
    name = '';
    
  }

  
  
  
}
