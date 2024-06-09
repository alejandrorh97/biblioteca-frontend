import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPrestamosIndexComponent } from './mis-prestamos-index.component';

describe('MisPrestamosIndexComponent', () => {
  let component: MisPrestamosIndexComponent;
  let fixture: ComponentFixture<MisPrestamosIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MisPrestamosIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MisPrestamosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
