import expect from 'unexpected';
import TTClassNames from '../source';

describe('TTClassNames', () => {
  const classNames = new TTClassNames();

  it('should be defined', () => {
    expect(classNames, 'to be defined');
  });
});
