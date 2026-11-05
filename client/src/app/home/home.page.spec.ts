import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideIonicAngular, Platform } from '@ionic/angular';
import { vi, type Mock } from 'vitest';

import { HomePage } from './home.page';

// Unit tests for the HomePage component.
// The platform service is mocked to simulate a desktop environment
// and scroll events are tested to ensure the component toggles
// the `afficheNom` property correctly.

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let platformSpy: { is: Mock };

  // Configure the testing module and mock Platform
  beforeEach(async () => {
    platformSpy = { is: vi.fn().mockReturnValue(true) };

    await TestBed.configureTestingModule({
      imports: [HomePage],
      providers: [provideIonicAngular(), { provide: Platform, useValue: platformSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Platform.is('desktop') should be called and isDesktop flag set
  it('should detect desktop platform', () => {
    expect(platformSpy.is).toHaveBeenCalledWith('desktop');
    expect(component.isDesktop).toBe(true);
  });

  // The afficheNom flag should toggle based on scroll position
  it('should toggle afficheNom on scroll', () => {
    component.eventScroll({detail: {scrollTop: 600}});
    expect(component.afficheNom).toBe(true);
    component.eventScroll({detail: {scrollTop: 400}});
    expect(component.afficheNom).toBe(false);
  });
});
