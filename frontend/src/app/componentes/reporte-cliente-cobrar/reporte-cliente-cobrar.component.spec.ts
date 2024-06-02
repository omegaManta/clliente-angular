import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteClienteCobrarComponent } from './reporte-cliente-cobrar.component';

describe('ReporteClienteCobrarComponent', () => {
  let component: ReporteClienteCobrarComponent;
  let fixture: ComponentFixture<ReporteClienteCobrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteClienteCobrarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReporteClienteCobrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
