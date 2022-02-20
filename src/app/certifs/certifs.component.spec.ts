import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifsComponent } from './certifs.component';

describe('CertifsComponent', () => {
  let component: CertifsComponent;
  let fixture: ComponentFixture<CertifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
