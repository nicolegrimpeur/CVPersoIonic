import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular/lazy';

import { CertificatsComponent } from './certificats.component';

describe('CertificatsComponent', () => {
  let component: CertificatsComponent;
  let fixture: ComponentFixture<CertificatsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), CertificatsComponent]
}).compileComponents();

    fixture = TestBed.createComponent(CertificatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
