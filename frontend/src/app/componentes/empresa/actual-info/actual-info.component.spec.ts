import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualInfoComponent } from './actual-info.component';

describe('ActualInfoComponent', () => {
  let component: ActualInfoComponent;
  let fixture: ComponentFixture<ActualInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
