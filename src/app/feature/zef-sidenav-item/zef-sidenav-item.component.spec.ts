import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZefSidenavItemComponent } from './zef-sidenav-item.component';

describe('ZefSidenavItemComponent', () => {
  let component: ZefSidenavItemComponent;
  let fixture: ComponentFixture<ZefSidenavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZefSidenavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZefSidenavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
