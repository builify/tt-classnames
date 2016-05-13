# tt-classnames

[![Build Status](https://img.shields.io/travis/Trip-Trax/tt-classnames.svg?style=flat-square)](https://travis-ci.org/Trip-Trax/tt-classnames)
[![Coveralls Status](https://img.shields.io/coveralls/Trip-Trax/tt-classnames.svg?style=flat-square)](https://coveralls.io/r/Trip-Trax/tt-classnames)
[![Code Climate](https://codeclimate.com/github/Trip-Trax/tt-classnames/badges/gpa.svg)](https://codeclimate.com/github/Trip-Trax/tt-classnames)
[![NPM Version](https://badge.fury.io/js/tt-classnames.svg)](https://badge.fury.io/js/tt-classnames)

> Utility for joining classNames together with `name` option for BEM styling.

## Installation
```shell
npm install tt-classnames
```

## Usage
```javascript
import TTClassNames from 'tt-classnames';

const classNames = new TTClassNames();

const rootClassName = classNames('test', 123, ['what', 'futura'], {
  'bilder': true,
  'builder': false
});

// rootClassName equals 'test 123 what futura bilder builder'
```

# Usage with React.js
```javascript
import React from 'react';
import TTClassNames from 'tt-classnames';

const classNames = new TTClassNames({
  name: 'tt'
});

export default class Logo extends React.Component {
  render () {
    const currentPage = 'home';

    return (
      <div className={classNames('logo')}>         // className='tt__logo'
        <div className={className('line-1')} />    // className='tt__line-1'
        <div className={className('bg', {          // className='tt__bg tt__yellow'
          'yellow': currentPage === 'home',
          'blue': currentPage === 'about'
        })} />
      </div>
    );
  }
}

## Contributions & Issues
Contributions are welcome. Please clearly explain the purpose of the PR and follow the current style.

Issues can be resolved quickest if they are descriptive and include both a reduced test case and a set of steps to reproduce.

## Licence
Licensed under the [MIT License](LICENSE) © Trip-Trax 2015 - present.
