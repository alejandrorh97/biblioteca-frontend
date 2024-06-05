import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexContenidoComponent } from './index-contenido.component';

describe('IndexContenidoComponent', () => {
  let component: IndexContenidoComponent;
  let fixture: ComponentFixture<IndexContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexContenidoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
