import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoCardComponent } from './prestamo-card.component';

describe('PrestamoCardComponent', () => {
  let component: PrestamoCardComponent;
  let fixture: ComponentFixture<PrestamoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrestamoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrestamoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
