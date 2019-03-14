import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  data:any[] = [
    {
      color:"primary",
      selected:false
    },
    {
      color:"secondary",
      selected:true
    },
    {
      color:"danger",
      selected:true
    },
    {
      color:"success",
      selected:false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
