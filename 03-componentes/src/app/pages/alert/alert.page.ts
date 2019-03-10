import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  titulo:string = "Alert";

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancelar',
          handler: (blah) => {
            console.log('boton Cancelar');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('boton Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      inputs: [
        {
          name: 'Nombre',
          type: 'text',
          placeholder: 'Ingrese su nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('boton Cancelar');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('boton Ok',data);
            this.titulo = data.Nombre;
          }
        }
      ]
    });

    await alert.present();
  }


}
