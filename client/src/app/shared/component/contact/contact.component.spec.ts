import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactComponent } from './contact.component';

// Unit tests for the ContactComponent.
// The delay method is stubbed so tests run synchronously and
// the click handler behaviour is verified.

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

  // testMailOrTel should return input for known value and undefined otherwise
  it('should test testMailOrTel', () => {
    expect(component.testMailOrTel('Téléphone')).toBe('Téléphone');
    expect(component.testMailOrTel('Autre')).toBeUndefined();
  });

  // click should update innerHTML, store the value and await delay
  it('should handle click', async () => {
    const event = { target: { innerHTML: 'abc' } } as any;
    await component.click(event, 'test');
    expect(event.target.innerHTML).toBe('test');
    expect(component.affiche).toContain('test');
    expect(delaySpy).toHaveBeenCalled();
  });
});
