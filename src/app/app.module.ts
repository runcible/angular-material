
import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './material/app.material.module';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { SampleComponent, DialogContentComponent } from './feature/sample/sample.component';
import { DatatableComponent } from './feature/datatable/datatable.component';
import { ZefToolbarUserButtonComponent } from './feature/zef-toolbar-user-button/zef-toolbar-user-button.component';
import { ZefSidenavComponent } from './feature/zef-sidenav/zef-sidenav.component';
import { ZefSidenavItemComponent } from './feature/zef-sidenav-item/zef-sidenav-item.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    SampleComponent,
    DialogContentComponent,
    DatatableComponent,
    ZefToolbarUserButtonComponent,
    ZefSidenavComponent,
    ZefSidenavItemComponent
  ],
  entryComponents: [DialogContentComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
