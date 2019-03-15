import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) InfiniteScroll:IonInfiniteScroll;
  data:any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log("cargando sgts");
    setTimeout(()=>{
      if(this.data.length>50){
        event.target.complete();
        this.InfiniteScroll.disabled = true;
        return;
      }
      let nuevo_array = Array(20);
      this.data.push(...nuevo_array);
      event.target.complete();
    },1500);
  }

}
