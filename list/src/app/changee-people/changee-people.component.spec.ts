import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeePeopleComponent } from './changee-people.component';

describe('ChangeePeopleComponent', () => {
  let component: ChangeePeopleComponent;
  let fixture: ComponentFixture<ChangeePeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeePeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
