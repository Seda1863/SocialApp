import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrediBasvuruComponent } from './kredi-basvuru.component';

describe('KrediBasvuruComponent', () => {
  let component: KrediBasvuruComponent;
  let fixture: ComponentFixture<KrediBasvuruComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KrediBasvuruComponent]
    });
    fixture = TestBed.createComponent(KrediBasvuruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
