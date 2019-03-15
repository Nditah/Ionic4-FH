import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Componente[] = [
    {
      icon: "american-football",
      name: "Action sheet",
      redirectTo: "/action-sheet"
    },
    {
      icon: "appstore",
      name: "Alert",
      redirectTo: "/alert"
    },
    {
      icon: "beaker",
      name: "Avatar",
      redirectTo: "/avatar"
    },
    {
      icon: "radio-button-on",
      name: "Botones y router",
      redirectTo: "/botones"
    },
    {
      icon: "card",
      name: "Cards",
      redirectTo: "/card"
    },
    {
      icon: "checkmark-circle-outline",
      name: "Checkbox",
      redirectTo: "/check"
    },
    {
      icon: "calendar",
      name: "DateTime",
      redirectTo: "/date-time"
    },
    {
      icon: "car",
      name: "Fabs",
      redirectTo: "/fab"
    },
    {
      icon: "grid",
      name: "Grid - rows",
      redirectTo: "/grid"
    },
    {
      icon: "infinite",
      name: "Infinite scroll",
      redirectTo: "/infinite-scroll"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  icon:string,
  name:string,
  redirectTo:string
}
