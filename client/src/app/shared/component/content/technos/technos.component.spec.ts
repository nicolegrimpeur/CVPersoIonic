import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular/lazy';

import { TechnosComponent } from './technos.component';

describe('TechnosComponent', () => {
  let component: TechnosComponent;
  let fixture: ComponentFixture<TechnosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), TechnosComponent]
}).compileComponents();

    fixture = TestBed.createComponent(TechnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
