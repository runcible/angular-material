import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZefSidenavComponent } from './zef-sidenav.component';

describe('ZefSidenavComponent', () => {
  let component: ZefSidenavComponent;
  let fixture: ComponentFixture<ZefSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZefSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZefSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
