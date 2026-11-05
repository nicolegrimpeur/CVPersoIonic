import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIonicAngular } from '@ionic/angular';
import { vi, type MockInstance } from 'vitest';

import { ContactComponent } from './contact.component';

// Unit tests for the ContactComponent.
// The delay method is stubbed so tests run synchronously and
// the click handler behaviour is verified.

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let delaySpy: MockInstance<ContactComponent['delay']>;

  beforeEach(async () => {
    delaySpy = vi.spyOn(ContactComponent.prototype, 'delay').mockReturnValue(Promise.resolve());
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [provideIonicAngular()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    delaySpy.mockRestore();
  });

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
    const event = { target: { innerHTML: 'abc' } } as unknown as Event;
    await component.click(event, 'test');
    expect((event.target as HTMLElement).innerHTML).toBe('test');
    expect(component.affiche).toContain('test');
    expect(delaySpy).toHaveBeenCalled();
  });
});
