import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFamilyBoardComponent } from './main-family-board.component';

describe('MainFamilyBoardComponent', () => {
  let component: MainFamilyBoardComponent;
  let fixture: ComponentFixture<MainFamilyBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFamilyBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFamilyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
