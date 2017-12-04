import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SampleComponent } from '../feature/sample/sample.component'
import { ZefControlsComponent } from '../feature/zef-controls/zef-controls.component';
import { ZefGroupsComponent } from '../feature/zef-groups/zef-groups.component';
import { ZefDevicesComponent } from '../feature/zef-devices/zef-devices.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'groups',
        component: ZefGroupsComponent
      },
      {
        path: 'devices',
        component: ZefDevicesComponent
      },
      {
        path: 'controls',
        component: ZefControlsComponent
      },
      {
        path: '',
        component: SampleComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
