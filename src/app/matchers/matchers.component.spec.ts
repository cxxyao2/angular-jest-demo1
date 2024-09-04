import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchersComponent } from './matchers.component';

describe('MatchersComponent', () => {
  let component: MatchersComponent;
  let fixture: ComponentFixture<MatchersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatchersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('two plus two is four', () =>{
    const value = 2+2;
    expect(value).toBe(4);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  })

  it('Object values',()=>{
    const data = {name: 'World'};
    expect(data).toEqual({name:'World'});
  })

  it('null',()=>{
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  })

  it('zero',()=>{
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).toBeFalsy();
  })

  it('adding floating point number',()=>{
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); // It doesnt work because of rounding error
    expect(value).toBeCloseTo(0.3);
  })

  // Strings
  it('there is no D in tech',()=>{
    expect('tech').not.toMatch(/D/);
  })

  it('there is a "world" in techworld',()=>{
    expect('techWorld').toMatch(/world/i);
  })

  // Arrays and iterables
  it('the shopping list has milk on it',()=>{
    const shoppingList = ['diapers','kleenex','trash bags','milk'];
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk');
  })

// Exceptions
it('compiling android goes as expected',()=>{
  expect(() => component.compileAndroidCode()).toThrow();
  expect(() => component.compileAndroidCode()).toThrow(Error);
  expect(() => component.compileAndroidCode()).toThrow(Error);
  expect(() => component.compileAndroidCode()).toThrow(/Angular/i);
  expect(()=>component.compileAndroidCode()).toThrow('you are using Old Angular');
})

});
