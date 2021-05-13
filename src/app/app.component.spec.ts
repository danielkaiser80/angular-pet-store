import {waitForAsync, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-pet-store'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-pet-store');
  });

  it('should render app-header', waitForAsync(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.whenStable().then(() => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        const children = compiled.children;
        expect(children.length).toEqual(2);
        expect(compiled.querySelector('app-header')).toBeTruthy();
      });
    })
  );
});
