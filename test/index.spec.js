import expect from 'unexpected';
import TTClassNames from '../source';

describe('TTClassNames', () => {
  const classNames = new TTClassNames({
    name: 'tt'
  });

  it('should be defined', () => {
    expect(classNames, 'to be defined');
  });

  it('should return function', () => {
    expect(classNames, 'to be a', 'function');
  });

  describe('return values', () => {
    it('should return correct classname', () => {
      expect(classNames('test'), 'to be', 'tt__test');

      expect(classNames({
        'cool': true,
        'weird': false
      }), 'to be', 'tt__cool');

      expect(classNames(['test', 123]), 'to be', 'tt__test tt__123');

      expect(classNames('test', 123, ['what'], {
        'trip-trax': true
      }), 'to be', 'tt__test tt__123 tt__what tt__trip-trax');
    });
  });
});
