import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIonicAngular, IonMenu } from '@ionic/angular';
import { vi } from 'vitest';

import { MenuComponent } from './menu.component';

// Tests for MenuComponent.
// document.querySelector is partially mocked so scrolling can be
// verified without interfering with Angular's internals.

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let closeSpy: ReturnType<typeof vi.fn>;

  // Initialize component and stub the menu close method
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuComponent],
      providers: [provideIonicAngular()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    closeSpy = vi.fn();
    component.menu = { close: closeSpy } as unknown as IonMenu;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // goTo should scroll smoothly to the element and close the menu
  it('should scroll to element and close menu', () => {
    const scrollSpy = vi.fn();
    const realQuery = document.querySelector.bind(document);
    const querySpy = vi.spyOn(document, 'querySelector').mockImplementation((selector: string) => {
      if (selector === '#section') {
        return { scrollIntoView: scrollSpy } as unknown as Element;
      }
      return realQuery(selector);
    });

    component.goTo('section');

    expect(querySpy).toHaveBeenCalledWith('#section');
    expect(scrollSpy).toHaveBeenCalledWith({behavior: 'smooth'});
    expect(closeSpy).toHaveBeenCalled();
    querySpy.mockRestore();
  });
});
