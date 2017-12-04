import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZefGroupsComponent } from './zef-groups.component';

describe('ZefGroupsComponent', () => {
  let component: ZefGroupsComponent;
  let fixture: ComponentFixture<ZefGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZefGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZefGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
