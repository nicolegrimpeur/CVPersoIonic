import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, AnimationController } from '@ionic/angular';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let animationCtrlSpy: jasmine.SpyObj<AnimationController>;
  let animationSpy: any;
  let querySpy: jasmine.Spy;
  let scrollSpy: jasmine.Spy;

  beforeEach(waitForAsync(() => {
    animationSpy = {} as any;
    animationSpy.addElement = jasmine.createSpy('addElement').and.returnValue(animationSpy);
    animationSpy.duration = jasmine.createSpy('duration').and.returnValue(animationSpy);
    animationSpy.keyframes = jasmine.createSpy('keyframes').and.returnValue(animationSpy);
    animationSpy.play = jasmine.createSpy('play').and.returnValue(Promise.resolve());

    animationCtrlSpy = jasmine.createSpyObj('AnimationController', ['create']);
    animationCtrlSpy.create.and.returnValue(animationSpy);

    scrollSpy = jasmine.createSpy('scrollIntoView');
    querySpy = spyOn(document, 'querySelector').and.returnValue({scrollIntoView: scrollSpy} as any);

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

  it('should scroll to section in goTo', () => {
    querySpy.calls.reset();
    component.goTo('test');
    expect(querySpy).toHaveBeenCalledWith('#test');
    expect(scrollSpy).toHaveBeenCalledWith({behavior: 'smooth'});
  });
});
