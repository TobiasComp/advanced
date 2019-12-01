import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormGroupsComponent } from './reactive-form-groups.component';

describe('ReactiveFormGroupsComponent', () => {
  let component: ReactiveFormGroupsComponent;
  let fixture: ComponentFixture<ReactiveFormGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
