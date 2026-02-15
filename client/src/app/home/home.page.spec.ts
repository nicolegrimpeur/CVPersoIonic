import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, Platform } from '@ionic/angular';

import { HomePage } from './home.page';

// Unit tests for the HomePage component.
// The platform service is mocked to simulate a desktop environment
// and scroll events are tested to ensure the component toggles
// the `afficheNom` property correctly.

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let platformSpy: jasmine.SpyObj<Platform>;

  // Configure the testing module and mock Platform
  beforeEach(waitForAsync(() => {
    platformSpy = jasmine.createSpyObj('Platform', ['is']);
    platformSpy.is.and.returnValue(true);

    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: Platform, useValue: platformSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Platform.is('desktop') should be called and isDesktop flag set
  it('should detect desktop platform', () => {
    expect(platformSpy.is).toHaveBeenCalledWith('desktop');
    expect(component.isDesktop).toBeTrue();
  });

  // The afficheNom flag should toggle based on scroll position
  it('should toggle afficheNom on scroll', () => {
    component.eventScroll({detail: {scrollTop: 600}} as any);
    expect(component.afficheNom).toBeTrue();
    component.eventScroll({detail: {scrollTop: 400}} as any);
    expect(component.afficheNom).toBeFalse();
  });
});
