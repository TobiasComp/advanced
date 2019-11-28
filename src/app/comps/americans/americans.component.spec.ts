import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmericansComponent } from './americans.component';

describe('AmericansComponent', () => {
  let component: AmericansComponent;
  let fixture: ComponentFixture<AmericansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmericansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmericansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
