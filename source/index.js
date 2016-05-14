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

function normalizeArg (arg, rootName, prefix) {
  if (rootName !== null) {
    arg = `${rootName}__${arg}`;
  } else if (prefix !== null) {
    arg = `${prefix}-${arg}`;
  }

  return arg;
}

export default function (options) {
  return function () {
    const rootName = options.name || null;
    const prefix = options.prefix || null;
    var classNames = [];

    for (let i = 0; i < arguments.length; i++) {
      const arg = arguments[i];

      if (isString(arg) || isNumber(arg)) {
        classNames.push(i === 0 ? normalizeArg(arg, rootName, prefix) : arg);
      } else if (isObject(arg)) {
        for (var key in arg) {
          if (arg.hasOwnProperty(key) && arg[key]) {
            classNames.push(i === 0 ? normalizeArg(key, rootName, prefix) : key);
          }
        }
      } else if (isArray(arg)) {
        for (let j = 0; j < arg.length; j++) {
          const secArg = arg[j];

          classNames.push(i === 0 ? normalizeArg(secArg, rootName, prefix) : secArg);
        }
      }
    }

    return classNames.join(' ');
  };
}
