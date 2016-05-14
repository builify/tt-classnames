const TYPE_ARRAY = '[object Array]';
const TYPE_STRING = '[object String]';
const TYPE_OBJECT = '[object Object]';
const TYPE_NUMBER = '[object Number]';

function getType (type) {
  return Object.prototype.toString.call(type);
}

function isNumber (value) {
  return !!(getType(value) === TYPE_NUMBER);
}

function isString (value) {
  return !!(getType(value) === TYPE_STRING);
}

function isObject (value) {
  return !!(getType(value) === TYPE_OBJECT);
}

function isArray (value) {
  return !!(getType(value) === TYPE_ARRAY);
}

export default function (options) {
  return function () {
    const rootName = options.name || null;
    var classNames = [];

    for (let arg of arguments) {
      if (isString(arg) || isNumber(arg)) {
        classNames.push(arg);
      } else if (isObject(arg)) {
        for (var key in arg) {
          (arg.hasOwnProperty(key) && arg[key]) && classNames.push(key);
        }
      } else if (isArray(arg)) {
        classNames.push(...arg);
      }
    }

    if (rootName !== null) {
      classNames = classNames.map((cn) => `${rootName}__${cn}`);
    }

    return classNames.join(' ');
  };
}
