import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZefDevicesComponent } from './zef-devices.component';

describe('ZefDevicesComponent', () => {
  let component: ZefDevicesComponent;
  let fixture: ComponentFixture<ZefDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZefDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZefDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
