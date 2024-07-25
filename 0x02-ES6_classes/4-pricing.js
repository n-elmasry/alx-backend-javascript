import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number.');
    if (!(currency instanceof Currency)) throw new TypeError('Currency must be an instance of Currency.');

    this._amount = amount;
    this._currency = currency;
  }

  // getters and setters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  set amount(value) {
    if (typeof value !== 'number') throw new TypeError('Amount must be a number.');
    this._amount = value;
  }

  set currency(value) {
    if (!(value instanceof Currency)) throw new TypeError('Currency must be an instance of Currency.');
    this._currency = value;
  }

  // method
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this.currency.code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number.');
    if (typeof conversionRate !== 'number') throw new TypeError('Conversion rate must be a number.');

    return amount * conversionRate;
  }
}
