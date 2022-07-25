import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosItemComponent } from './cursos-item.component';

describe('CursosItemComponent', () => {
  let component: CursosItemComponent;
  let fixture: ComponentFixture<CursosItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
