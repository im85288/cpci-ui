import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './modules/material-module/material-module.module';
import { CovalentModule } from './modules/covalent-module/covalent-module.module';
import { PanelComponent } from './panels/panel/panel.component';
import { SignInComponent } from './users/sign-in/sign-in.component';
import { PopupMenuComponent } from './menus/popup-menu/popup-menu.component';
import { MenuItemComponent } from './menus/menu-item/menu-item.component';
import { MenuComponent } from './menus/menu/menu.component';
import { ScreenBelowLarge } from './directives/screen-below-large.directive';
import { ScreenLarge } from './directives/screen-large.directive';
import { StopPropagationDirective } from './directives/stop-propagation.directive';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { ContentComponent } from './content/content.component';
import { FrameworkBodyComponent } from './framework-body/framework-body.component';
import { FrameworkConfigService } from './services/framework-config.service';
import { ScreenService } from './services/screen.service';
import { MenuService } from './services/menu.service';
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './dynamic-forms/dynamic-field/dynamic-field.component';
import { DisableControlDirective } from './directives/disable-control.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CovalentModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLarge,
    ScreenBelowLarge,
    StopPropagationDirective,
    DisableControlDirective,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    PanelComponent,
    DynamicFormComponent,
    DynamicFieldComponent
  ],
  providers: [FrameworkConfigService, ScreenService, MenuService],
  exports: [
    FrameworkBodyComponent,
    DynamicFormComponent,
    PanelComponent,
    ScreenLarge,
    ScreenBelowLarge,
    StopPropagationDirective,
    DisableControlDirective,
    SignInComponent,
    StatusBarComponent
  ]
})
export class FrameworkModule {}
