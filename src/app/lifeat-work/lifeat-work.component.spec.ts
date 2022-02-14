import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeatWorkComponent } from './lifeat-work.component';

describe('LifeatWorkComponent', () => {
  let component: LifeatWorkComponent;
  let fixture: ComponentFixture<LifeatWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeatWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeatWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
