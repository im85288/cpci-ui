import { Component, OnInit } from '@angular/core';
import {
  FrameworkConfigService
} from '../fw/services/framework-config.service';
import { InitTourService } from './services';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { config } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private frameworkConfigService: FrameworkConfigService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private tourService: InitTourService
  ) {
    iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
  }

  ngOnInit() {
    this.frameworkConfigService.configure(config);
    this.tourService.initialise();
  }
}

