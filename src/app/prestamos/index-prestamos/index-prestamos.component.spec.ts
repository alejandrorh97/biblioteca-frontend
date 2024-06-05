import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPrestamosComponent } from './index-prestamos.component';

describe('IndexPrestamosComponent', () => {
  let component: IndexPrestamosComponent;
  let fixture: ComponentFixture<IndexPrestamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexPrestamosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexPrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
