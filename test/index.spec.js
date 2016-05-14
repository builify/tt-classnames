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

  describe('classNames', () => {
    it('should return correct classname', () => {
      expect(classNames('test'), 'to be', 'tt__test');

      expect(classNames({
        'cool': true,
        'weird': false
      }), 'to be', 'tt__cool');

      expect(classNames(['test', 123]), 'to be', 'tt__test tt__123');

      expect(classNames('test', 123, ['what'], {
        'trip-trax': true
      }), 'to be', 'tt__test 123 what trip-trax');
    });
  });

  describe('prefix', () => {
    it('should return prefixed values', () => {
      const cn = new TTClassNames({
        prefix: 'tt'
      });

      expect(cn('test'), 'to be', 'tt-test');

      expect(cn({
        'cool': true,
        'weird': false
      }), 'to be', 'tt-cool');

      expect(cn(['test', 123]), 'to be', 'tt-test tt-123');

      expect(cn('test', 123, ['what'], {
        'trip-trax': true
      }), 'to be', 'tt-test 123 what trip-trax');
    });
  });
});
