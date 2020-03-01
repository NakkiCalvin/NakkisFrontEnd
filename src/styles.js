import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

*,
*:after,
*:before {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
 
  background-color: #fcfcfc;
  font-size: 16px;
  line-height: 1.4;
 
  color: #372717;
  box-sizing: border-box;
  overflow-y: scroll;
}

fieldset {
  margin: 0;
  padding: 0;
  border: none;
}

#root {

}

.panel {
  max-width: 1305px;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: 750px) {
    padding: 0 35px;
  }
  @media (max-width: 500px) {
    padding: 0 20px;
  }
}

.form-container {
  margin: 125px 0 155px;

  @media (max-width: 750px) {
    margin-top: 50px;
  }
}

.panel[aria-expanded='true'] .panel__content {
  opacity: 1;
}

.panel__inner {
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);

  &--hidden {
    max-height: 0;
  }
}

.panel__content {
  font-size: 14px;
  color: #756658;
  opacity: 0;
  transition: opacity 0.4s linear 0.18s;
}

.footer {
  clear: both;
}

.top-block {
  background: linear-gradient(0deg,#ffbf06,#ffdb26);
}

button,
.btn {
  cursor: pointer;
}

.dark-element-btn-hover {
  background: linear-gradient(0deg, #ffbf06, #ffdb26);
  color: #ffffff;

  transition: .4s;
  &:hover {
    background: #ffffff;
    color: #313133;

    transition: .4s;
  }
}

.light-element-btn-hover {
  background: linear-gradient(0deg, #ffbf06, #ffdb26);
  color: #ffffff;

  transition: .4s;
  &:hover {
    background: #313133;

    transition: .4s;
  }
}

.autocompleted-input {
  position: relative;

  .autocomplete-dropdown-container {
    position: absolute;
    width: 100%;
    color: #d6d6d6;
    font-size: 19px;
    text-transform: uppercase;
    text-align: left;
    letter-spacing: 1px;
    z-index: 1;
    padding: 0 5px;
    background: #ffffff;

    div {
      min-height: 50px;
      word-break: break-all;
      justify-content: left;
      line-height: 24px;
      padding: 10px 15px;
      border-bottom: 2px solid #d6d6d6;
      color: #313133;

      &:last-child {
        border-bottom: none;
      }
    }
  }
}

.no-touchevents {
  @media (hover: none) {
    .main-nav__item--primary .main-nav__link:hover { color: inherit; }
    div.gyms__gym:hover .gyms__gym-number {
      background-color: #959598;

      &:after {
        border-color: #959598 transparent;
      }
    }
    .gyms__gym:hover .gyms__btn {
      background-color: transparent;
      border: 3px solid #ffffff;
    }
    .main-nav__item--secondary .main-nav__link:hover {
      color: hsla(0,0%,100%,.5);
    }
  }
}`;

export default GlobalStyles;
