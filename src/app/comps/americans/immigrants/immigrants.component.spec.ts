import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmigrantsComponent } from './immigrants.component';

describe('ImmigrantsComponent', () => {
  let component: ImmigrantsComponent;
  let fixture: ComponentFixture<ImmigrantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmigrantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmigrantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
