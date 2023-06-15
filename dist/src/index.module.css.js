
const digest = '3c5dab7e0d39abf7004756498979f3e5cef758bab7d5866b328aa40e9defd504';
const css = `._Select_n31fn_1 {
  position: relative;
  width: 100%;
  flex: 1;
  min-width: 150px;
  height: var(--cui-inputs-height);
}

._selectedOption_n31fn_17 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0 var(--cui-inputs-horizontal-padding);
  background: var(--cui-black-color-100);
  transition: background var(--transition-duration);
  cursor: pointer;
}

@media(prefers-color-scheme: dark) {
  ._selectedOption_n31fn_17 {
    background: var(--cui-black-color-900);
    color: var(--cui-black-color-300)
  }
}

/* Selected option */

._selectedOption_n31fn_17 > * {
  flex-shrink: 0;
}

._selectedOption_n31fn_17 > span {
  display: block;
  width: calc(100% - 1em);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._selectedOption_n31fn_17 > svg {
  width: 1em;
  height: 1em;
  fill: #000;
  transition: var(--transition-duration)
}

@media(prefers-color-scheme: dark) {
  ._selectedOption_n31fn_17 > svg {
    fill: #fff;
  }
}

._Select_n31fn_1[class*="_isOpened"] > ._selectedOption_n31fn_17 > svg {
  transform: rotateZ(180deg)
}

/* Select options list */

._selectOptions_n31fn_121 {
  position: absolute;
  left: 0;
  top: calc(100% + var(--gap-between-selected-option-and-list));
  width: 100%;
  max-width: 100%;
  max-height: calc(var(--option-height) * 5);
  background: var(--cui-black-color-200);
  transition: var(--transition-duration);
  overflow: auto;
  overscroll-behavior: none;
}

@media(prefers-color-scheme: dark) {
  ._selectOptions_n31fn_121 {
    background: var(--cui-black-color-900);
    color: var(--cui-black-color-300)
  }
}

._selectOptions_n31fn_121[class*="_isRemovedFromLayout"] {
  display: none;
}

._selectOptions_n31fn_121[class*="_isRevealedFromBottom"] {
  top: unset;
  bottom: calc(100% + var(--gap-between-selected-option-and-list));
}

._selectOptions_n31fn_121[class*="_isRevealedFromRight"] {
  left: unset;
  right: 0;
}

._Select_n31fn_1:not([class*="_isOpened"]) > ._selectOptions_n31fn_121 {
  opacity: 0;
  visibility: hidden;
  transform: translateY(10%)
}

._Select_n31fn_1:not([class*="_isOpened"]) > ._selectOptions_n31fn_121[class*="_isRevealedFromBottom"] {
  transform: translateY(-10%)
}

._selectOptions_n31fn_121 > button {
  color: inherit;
  height: var(--option-height);
  padding: 0 var(--cui-inputs-horizontal-padding);
  width: 100%;
  justify-content: flex-start;
  font-size: 10.5pt;
  transition: background 0s;
}

._selectOptions_n31fn_121 > button:hover {
  background: var(--cui-accent-color-700);
  color: #fff;
}

@media(prefers-color-scheme: dark) {
  ._selectOptions_n31fn_121 > button:hover {
    background: var(--cui-accent-color-900);
  }
}

._selectOptions_n31fn_121 > button:hover > svg {
  fill: #fff
}
`;

(function() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!document.getElementById(digest)) {
    var el = document.createElement('style');
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();
    
export default {"Select":"_Select_n31fn_1","select":"_Select_n31fn_1","selectedOption":"_selectedOption_n31fn_17","selectOptions":"_selectOptions_n31fn_121"};
export { css, digest };
  