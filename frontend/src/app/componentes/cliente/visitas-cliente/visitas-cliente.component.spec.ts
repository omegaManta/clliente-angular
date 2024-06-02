import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitasClienteComponent } from './visitas-cliente.component';

describe('VisitasClienteComponent', () => {
  let component: VisitasClienteComponent;
  let fixture: ComponentFixture<VisitasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitasClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
