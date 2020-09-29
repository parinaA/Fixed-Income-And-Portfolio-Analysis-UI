import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratetradeComponent } from './generatetrade.component';

describe('GeneratetradeComponent', () => {
  let component: GeneratetradeComponent;
  let fixture: ComponentFixture<GeneratetradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratetradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratetradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
