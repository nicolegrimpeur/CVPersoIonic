import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, AnimationController } from '@ionic/angular';

import { HeaderComponent } from './header.component';

// Tests for HeaderComponent.
// AnimationController is fully mocked to check the animation chain
// and navigation logic is verified.

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let animationCtrlSpy: jasmine.SpyObj<AnimationController>;
  let animationSpy: any;

  // Setup component with a mocked AnimationController
  beforeEach(waitForAsync(() => {
    animationSpy = {} as any;
    animationSpy.addElement = jasmine.createSpy('addElement').and.returnValue(animationSpy);
    animationSpy.duration = jasmine.createSpy('duration').and.returnValue(animationSpy);
    animationSpy.keyframes = jasmine.createSpy('keyframes').and.returnValue(animationSpy);
    animationSpy.play = jasmine.createSpy('play').and.returnValue(Promise.resolve());

    animationCtrlSpy = jasmine.createSpyObj('AnimationController', ['create']);
    animationCtrlSpy.create.and.returnValue(animationSpy);

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: AnimationController, useValue: animationCtrlSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // ngOnChanges should trigger the correct animation
  it('should play animation on changes', () => {
    component.afficheNom = true;
    component.ngOnChanges();
    expect(animationCtrlSpy.create).toHaveBeenCalled();
    expect(animationSpy.addElement).toHaveBeenCalled();
    expect(animationSpy.duration).toHaveBeenCalledWith(500);
    expect(animationSpy.keyframes).toHaveBeenCalledWith([
      {offset: 0, opacity: '0'},
      {offset: 1, opacity: '1'}
    ]);
    expect(animationSpy.play).toHaveBeenCalled();

    animationSpy.addElement.calls.reset();
    animationSpy.keyframes.calls.reset();
    component.afficheNom = false;
    component.ngOnChanges();
    expect(animationSpy.keyframes).toHaveBeenCalledWith([
      {offset: 0, opacity: '1'},
      {offset: 1, opacity: '0'}
    ]);
  });

  // goTo should scroll smoothly to the given element
  it('should scroll to section in goTo', () => {
    const scrollSpy = jasmine.createSpy('scrollIntoView');
    const realQuery = document.querySelector.bind(document);
    const querySpy = spyOn(document, 'querySelector').and.callFake((selector: string) => {
      if (selector === '#test') {
        return { scrollIntoView: scrollSpy } as any;
      }
      return realQuery(selector);
    });

    component.goTo('test');

    expect(querySpy).toHaveBeenCalledWith('#test');
    expect(scrollSpy).toHaveBeenCalledWith({behavior: 'smooth'});
  });
});
