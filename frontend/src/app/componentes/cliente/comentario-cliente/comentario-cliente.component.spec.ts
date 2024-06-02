import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioClienteComponent } from './comentario-cliente.component';

describe('ComentarioClienteComponent', () => {
  let component: ComentarioClienteComponent;
  let fixture: ComponentFixture<ComentarioClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentarioClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentarioClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
