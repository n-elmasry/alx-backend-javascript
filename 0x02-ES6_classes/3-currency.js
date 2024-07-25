export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') throw new TypeError('Currency must be a string.');
    if (typeof name !== 'string') throw new TypeError('name must be a string.');

    this._code = code;
    this._name = name;
  }

  // method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // setters and getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('name must be a string.');
    this._name = value;
  }

  set code(value) {
    if (typeof value !== 'string') throw new TypeError('Currency must be a string.');
    this._code = value;
  }
}
