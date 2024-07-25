import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // getters and setters

  get floors() {
    return this._floors;
  }

  set floors(value) {
    if (typeof value !== 'number') throw new TypeError('sqft must be a nmuber.');

    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
