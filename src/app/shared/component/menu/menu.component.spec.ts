import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let querySpy: jasmine.Spy;
  let scrollSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    scrollSpy = jasmine.createSpy('scrollIntoView');
    querySpy = spyOn(document, 'querySelector').and.returnValue({scrollIntoView: scrollSpy} as any);

    TestBed.configureTestingModule({
      declarations: [ MenuComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    (component as any).menu = { el: { close: jasmine.createSpy('close') } };
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to element and close menu', () => {
    component.goTo('section');
    expect(querySpy).toHaveBeenCalledWith('#section');
    expect(scrollSpy).toHaveBeenCalledWith({behavior: 'smooth'});
    expect((component as any).menu.el.close).toHaveBeenCalled();
  });
});
