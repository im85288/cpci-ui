import { Injectable } from '@angular/core';

export interface IconFiles {
  imageFile: string;
  alt: string;
  link: string;
}

export interface StausBarActions {
  name: string;
  link: string;
  tooltip: string;
}

export interface FrameworkConfigSettings {
  showLanguageSelector?: boolean;
  showUserControls?: boolean;
  showStatusBar?: boolean;
  showStatusBarBreakpoint?: number;
  socialIcons?: Array<IconFiles>;
  statusBarActions?: Array<StausBarActions>;
}

@Injectable()
export class FrameworkConfigService {
  showLanguageSelector = true;
  showUserControls = true;
  showStatusBar = true;
  showStatusBarBreakpoint = 0;
  socialIcons = new Array<IconFiles>();
  statusBarActions = new Array<StausBarActions>();

  configure(settings: FrameworkConfigSettings): void {
    Object.assign(this, settings);
  }
}
