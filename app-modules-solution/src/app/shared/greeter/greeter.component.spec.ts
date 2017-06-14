import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

import { GreeterComponent } from './greeter.component';

fdescribe('GreeterComponent', () => {
  let greeter: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;
  let element: any;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    greeter = fixture.componentInstance;
    element = fixture.nativeElement;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(greeter).toBeTruthy();
  });

  //specs
  it('should render `Hello World!` (async)', async(() => {
    greeter.name = 'World';
    //trigger change detection
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      expect(element.querySelector('h1').innerText).toBe('Hello World!');
      expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World!');
    });
  }));
  
  it('should render `Hello World!` (fakeAsync/tick)', fakeAsync(() => {
    greeter.name = 'World';
    //trigger change detection
    fixture.detectChanges();
    //execute all pending asynchronous calls
    tick();
    expect(element.querySelector('h1').innerText).toBe('Hello World!');
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World!');
  }));
  
  it('should render `Hello World!` (done)', done => {
    greeter.name = 'World';
    //trigger change detection
    fixture.detectChanges();
    fixture.whenStable().then(() => { 
      expect(element.querySelector('h1').innerText).toBe('Hello World!');
      expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Hello World!');
      done();
    });
  });
});
