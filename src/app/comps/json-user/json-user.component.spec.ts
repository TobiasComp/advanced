import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUserComponent } from './json-user.component';

describe('JsonUserComponent', () => {
  let component: JsonUserComponent;
  let fixture: ComponentFixture<JsonUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
