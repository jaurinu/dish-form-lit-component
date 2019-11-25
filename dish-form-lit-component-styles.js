import { css } from 'lit-element';

export default css`
:host {
  display: inline-block;
  --dish-form-component-green-color: #4caf50;
  --dish-form-component-white-color: #ffffff;
  box-sizing: border-box; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit; }
  .green {
    background-color: var(--dish-form-component-green-color);
    color: var(--dish-form-component-white-color);
  }
`;
