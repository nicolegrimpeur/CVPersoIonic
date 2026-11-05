import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIonicAngular, AnimationController } from '@ionic/angular';
import { vi, type Mock } from 'vitest';

import { HeaderComponent } from './header.component';

// Tests for HeaderComponent.
// AnimationController is fully mocked to check the animation chain
// and navigation logic is verified.

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let animationCtrlSpy: { create: Mock };
  let animationSpy: Record<'addElement' | 'duration' | 'keyframes' | 'play', Mock>;

  // Setup component with a mocked AnimationController
  beforeEach(async () => {
    animationSpy = {
      addElement: vi.fn(),
      duration: vi.fn(),
      keyframes: vi.fn(),
      play: vi.fn().mockReturnValue(Promise.resolve())
    };
    animationSpy.addElement.mockReturnValue(animationSpy);
    animationSpy.duration.mockReturnValue(animationSpy);
    animationSpy.keyframes.mockReturnValue(animationSpy);

    animationCtrlSpy = { create: vi.fn().mockReturnValue(animationSpy) };

    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideIonicAngular(), { provide: AnimationController, useValue: animationCtrlSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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

    animationSpy.addElement.mockClear();
    animationSpy.keyframes.mockClear();
    component.afficheNom = false;
    component.ngOnChanges();
    expect(animationSpy.keyframes).toHaveBeenCalledWith([
      {offset: 0, opacity: '1'},
      {offset: 1, opacity: '0'}
    ]);
  });

  // goTo should scroll smoothly to the given element
  it('should scroll to section in goTo', () => {
    const scrollSpy = vi.fn();
    const realQuery = document.querySelector.bind(document);
    const querySpy = vi.spyOn(document, 'querySelector').mockImplementation((selector: string) => {
      if (selector === '#test') {
        return { scrollIntoView: scrollSpy } as unknown as Element;
      }
      return realQuery(selector);
    });

    component.goTo('test');

    expect(querySpy).toHaveBeenCalledWith('#test');
    expect(scrollSpy).toHaveBeenCalledWith({behavior: 'smooth'});
    querySpy.mockRestore();
  });
});
