import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePageScrollComponent } from './one-page-scroll.component';

describe('OnePageScrollComponent', () => {
  let component: OnePageScrollComponent;
  let fixture: ComponentFixture<OnePageScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnePageScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePageScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
