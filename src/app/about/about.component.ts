import {Component} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  appVersion: any;
  description: string;

  constructor() {
    this.appVersion = environment.VERSION;
    this.description = this.getDescription();
  }

  getDescription(): string {
    return `<b>CLASSIFICATION ADMIN</b> is an administrative tool that covers various areas including CPCI, USPTO, CPC NO, Admin Transfer, Producer/Consumer and Working List amongst others. Access to various systems are incorporated, including CPCI and DocDB`;
  }

}
