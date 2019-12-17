import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinOrCreateFamilyComponent } from './join-or-create-family.component';

describe('JoinOrCreateFamilyComponent', () => {
  let component: JoinOrCreateFamilyComponent;
  let fixture: ComponentFixture<JoinOrCreateFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinOrCreateFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinOrCreateFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
