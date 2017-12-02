import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZefToolbarUserButtonComponent } from './zef-toolbar-user-button.component';

describe('ZefToolbarUserButtonComponent', () => {
  let component: ZefToolbarUserButtonComponent;
  let fixture: ComponentFixture<ZefToolbarUserButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZefToolbarUserButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZefToolbarUserButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
