import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlacksComponent } from './blacks.component';

describe('BlacksComponent', () => {
  let component: BlacksComponent;
  let fixture: ComponentFixture<BlacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
