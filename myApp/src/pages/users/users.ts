import { Component } from '@angular/core';

import { NavController } from "ionic-angular";

import { UserPage } from "../users/user/user";
//import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(private navCtrl: NavController) {}

onLoadUser(name: string) {
  this.navCtrl.push(UserPage, {userName: name});
}

}
