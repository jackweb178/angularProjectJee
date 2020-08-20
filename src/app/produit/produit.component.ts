import { ProduitService } from './../produit.service';
import { Component, OnInit } from '@angular/core';
import { ProduitData } from '../modeles/ProduitData';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  produit: ProduitData
  constructor(private produitService: ProduitService) {
    this.produit= new ProduitData(null,'','',null,null)
   }

  ngOnInit(): void {
    this.getProduit()
  }

  getProduit() {
    this.produitService.getProduit()
    .subscribe(rest=>{
      console.log(rest);
      this.produit=rest;
      //this.loginService.saveToken(rest);
    },
    err => console.log(err)
    )
  }
}
