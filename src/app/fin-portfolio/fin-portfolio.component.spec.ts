import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinPortfolioComponent } from './fin-portfolio.component';

describe('FinPortfolioComponent', () => {
  let component: FinPortfolioComponent;
  let fixture: ComponentFixture<FinPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
