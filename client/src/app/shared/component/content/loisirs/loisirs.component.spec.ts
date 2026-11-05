import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIonicAngular } from '@ionic/angular';

import { LoisirsComponent } from './loisirs.component';

describe('LoisirsComponent', () => {
  let component: LoisirsComponent;
  let fixture: ComponentFixture<LoisirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [LoisirsComponent],
    providers: [provideIonicAngular()]
}).compileComponents();

    fixture = TestBed.createComponent(LoisirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
