import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';

// Tests for MenuComponent.
// document.querySelector is partially mocked so scrolling can be
// verified without interfering with Angular's internals.

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  // Initialize component and stub the menu close method
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.menu = { el: { close: jasmine.createSpy('close') } } as any;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // goTo should scroll smoothly to the element and close the menu
  it('should scroll to element and close menu', () => {
    const scrollSpy = jasmine.createSpy('scrollIntoView');
    const realQuery = document.querySelector.bind(document);
    const querySpy = spyOn(document, 'querySelector').and.callFake((selector: string) => {
      if (selector === '#section') {
        return { scrollIntoView: scrollSpy } as any;
      }
      return realQuery(selector);
    });

    component.goTo('section');

    expect(querySpy).toHaveBeenCalledWith('#section');
    expect(scrollSpy).toHaveBeenCalledWith({behavior: 'smooth'});
    expect((component as any).menu.el.close).toHaveBeenCalled();
  });
});
