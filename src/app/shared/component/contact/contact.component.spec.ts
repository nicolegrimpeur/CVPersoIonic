import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let delaySpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    delaySpy = spyOn(ContactComponent.prototype, 'delay').and.returnValue(Promise.resolve());
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test testMailOrTel', () => {
    expect(component.testMailOrTel('Téléphone')).toBe('Téléphone');
    expect(component.testMailOrTel('Autre')).toBeUndefined();
  });

  it('should handle click', async () => {
    const event = { target: { innerHTML: 'abc' } } as any;
    await component.click(event, 'test');
    expect(event.target.innerHTML).toBe('test');
    expect(component.affiche).toContain('test');
    expect(delaySpy).toHaveBeenCalled();
  });
});
