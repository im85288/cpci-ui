import { Component, OnInit } from '@angular/core';
import { FrameworkConfigService } from '../services/framework-config.service';

@Component({
  selector: 'fw-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  constructor(public frameworkConfigService: FrameworkConfigService) {}

  ngOnInit() {}
}
