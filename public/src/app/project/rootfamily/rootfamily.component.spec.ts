import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootfamilyComponent } from './rootfamily.component';

describe('RootfamilyComponent', () => {
  let component: RootfamilyComponent;
  let fixture: ComponentFixture<RootfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
