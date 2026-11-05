import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIonicAngular } from '@ionic/angular';

import { TechnosComponent } from './technos.component';

describe('TechnosComponent', () => {
  let component: TechnosComponent;
  let fixture: ComponentFixture<TechnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TechnosComponent],
    providers: [provideIonicAngular()]
}).compileComponents();

    fixture = TestBed.createComponent(TechnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
