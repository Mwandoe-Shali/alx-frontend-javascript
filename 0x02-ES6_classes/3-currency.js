#!/usr/bin/node

export default class Currency {
    constructor(code, name) {
      this.code = code;  // Use setter for validation
      this.name = name;  // Use setter for validation
    }

    // Getter and Setter for 'code'
    get code() {
      return this._code;
    }

    set code(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Code must be a string');
      }
      this._code = value;
    }

    // Getter and Setter for 'name'
    get name() {
      return this._name;
    }

    set name(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = value;
    }

    // Method to display the full currency
    displayFullCurrency() {
      return `${this._name} (${this._code})`;
    }
  }
