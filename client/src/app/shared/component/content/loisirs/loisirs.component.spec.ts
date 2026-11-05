import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular/lazy';

import { LoisirsComponent } from './loisirs.component';

describe('LoisirsComponent', () => {
  let component: LoisirsComponent;
  let fixture: ComponentFixture<LoisirsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [IonicModule.forRoot(), LoisirsComponent]
}).compileComponents();

    fixture = TestBed.createComponent(LoisirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
