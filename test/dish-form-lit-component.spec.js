/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../dish-form-lit-component.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<dish-form-lit-component></dish-form-lit-component>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
