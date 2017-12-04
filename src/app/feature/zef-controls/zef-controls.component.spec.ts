import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZefControlsComponent } from './zef-controls.component';

describe('ControlsComponent', () => {
  let component: ZefControlsComponent;
  let fixture: ComponentFixture<ZefControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZefControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZefControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
