import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZefControlsDatatableComponent } from './zef-controls-datatable.component';

describe('DatatableComponent', () => {
  let component: ZefControlsDatatableComponent;
  let fixture: ComponentFixture<ZefControlsDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZefControlsDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZefControlsDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
