import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'angular-pet-store'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('angular-pet-store')
  })

  it('render app-header', async(() => {
      const fixture = TestBed.createComponent(AppComponent)
      fixture.whenStable().then(() => {
        fixture.detectChanges()
        const compiled = fixture.nativeElement
        const children = compiled.children;
        expect(children.length).toEqual(2)
        expect(compiled.querySelector('app-header')).toBeTruthy()
      })
    })
  )
})
