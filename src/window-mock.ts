// write the jest initialization for testing the angular w/o DOM
import 'jest-preset-angular/setup-jest';

// HTML Template parsing using docType
Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>'
});

Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  }
});
