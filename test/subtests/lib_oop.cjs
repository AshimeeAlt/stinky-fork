'use strict';

const chai = require('chai');

describe('lib/oop#Clazz', () => {
  const oop = require('../../src/lib/oop.cjs');

  const czA = function($super, x) { this.a = x };
  const czB = function($super, x) { $super(x + 1); this.b = x };

  it('should make a clazz on call',
     () => chai.expect((oop.Clazz(czA)(1)).a).equals(1,       'clazz instance did not construct a "clazz" properly on call')
    );
  it('should make a clazz on "new"',
     () => chai.expect((new (oop.Clazz(czA))(1)).a).equals(1, 'clazz instance did not construct a "clazz" properly on "new"')
    );

  it('should inherit when a parent is passed',
     () => {
       const cz = new (oop.Clazz(czB, oop.Clazz(czA)))(1);
       chai.expect(cz.a).equals(2, 'clazz instance did not inherit its parent properly');
       chai.expect(cz.b).equals(1, 'clazz instance did not construct properly');
     }
    );
});
