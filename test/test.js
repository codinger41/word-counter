const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const words = require('../index.js');

describe("words()", () => {

    it("counting a single word", () => {
    let Count = { word: 1 };
    assert.equal(JSON.stringify(words("word")), JSON.stringify(Count));
    });
    it("counting the given example", () => {
      let Count = { olly: 2, in: 1, come: 1, free: 1 };
      assert.equal(JSON.stringify(words("olly olly in come free")), JSON.stringify(Count));
    });
    it("counting words with numbers", () => {
      let Count = { 11: 1, 12: 1, 13: 1, this: 1, is: 1, a: 1, test: 1, of: 1 };
      assert.equal(JSON.stringify(words("this is a test of 11 12 13")), JSON.stringify(Count));
    });
    it("counting symbols", () => {
      let Count = { '(': 1, ')': 1, '*': 1, '^': 1, '/': 1, '.': 1, '': 1 };
      assert.equal(JSON.stringify(words("( ) * ^ / . ")), JSON.stringify(Count));
    });
    
});