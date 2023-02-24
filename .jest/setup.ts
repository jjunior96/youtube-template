import '@testing-library/jest-dom';
import 'jest-styled-components';

const { defineProperty } = Object;
Object.defineProperty = function (object, name, meta) {
  if (meta.get && !meta.configurable) {
    return defineProperty(object, name, {
      ...meta,
      configurable: true,
    });
  }


  return defineProperty(object, name, meta);
};
