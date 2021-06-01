import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFileComponent } from './model-file.component';

describe('ModelFileComponent', () => {
  let component: ModelFileComponent;
  let fixture: ComponentFixture<ModelFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
