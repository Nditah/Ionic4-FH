import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment) segmento:IonSegment;
  categorias:any = [
    {
      valor:"business",
      esp:"Negocios"
    },
    {
      valor:"entertainment",
      esp:"Entretenimiento"
    },
    {
      valor:"general",
      esp:"general"
    },
    {
      valor:"health",
      esp:"Salud"
    },
    {
      valor:"science",
      esp:"Ciencia"
    },
    {
      valor:"sports",
      esp:"Deportes"
    },
    {
      valor:"technology",
      esp:"Tecnologia"
    }
  ]; 
  noticias:Article[] = [];

  constructor(private noticiasService:NoticiasService){
  }

  ngOnInit(){
    let categoria = this.categorias[0].valor;
    this.segmento.value = categoria;
    this.noticiasService.getTopHeadlinesCategoria(categoria).subscribe(data=>{
      this.noticias.push(...data.articles);
    });
  }

  mostrarCategoria(categoria:string){
    this.noticias = [];
    this.noticiasService.getTopHeadlinesCategoria(categoria).subscribe(data=>{
      this.noticias.push(...data.articles);
    });
  }

}
