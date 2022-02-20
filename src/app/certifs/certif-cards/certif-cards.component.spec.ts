import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifCardsComponent } from './certif-cards.component';

describe('CertifCardsComponent', () => {
  let component: CertifCardsComponent;
  let fixture: ComponentFixture<CertifCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
