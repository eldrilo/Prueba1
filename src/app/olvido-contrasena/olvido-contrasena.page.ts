import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-olvido-contrasena',
  templateUrl: './olvido-contrasena.page.html',
  styleUrls: ['./olvido-contrasena.page.scss'],
})
export class OlvidoContrasenaPage {

  constructor(private alertController: AlertController) { }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Si los datoscoinciden recibiras tu correo',

      buttons: ['OK'],
    });

    await alert.present();
  }

}
