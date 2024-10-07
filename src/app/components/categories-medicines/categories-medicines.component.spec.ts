import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesMedicinesComponent } from './categories-medicines.component';

describe('CategoriesMedicinesComponent', () => {
  let component: CategoriesMedicinesComponent;
  let fixture: ComponentFixture<CategoriesMedicinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesMedicinesComponent]
    });
    fixture = TestBed.createComponent(CategoriesMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
