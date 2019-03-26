import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Slackntell6Component } from './slackntell6.component';

describe('Slackntell6Component', () => {
  let component: Slackntell6Component;
  let fixture: ComponentFixture<Slackntell6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Slackntell6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Slackntell6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
