const setAttributeBySelector = attribute => value => querySelector => {
  const elements = top?.document.querySelectorAll(querySelector);
  if (elements && elements.length > 0) {
    for (const element of elements) {
      element.setAttribute(attribute, value);
    }
  }
};

const setDir = setAttributeBySelector("dir");
const setAuto = setDir("auto");
const setLTR = setDir("ltr");

const observer = new top.MutationObserver(() => {
  setAuto(".ls-block");
  setAuto(".block-properties > div");
  setLTR(".katex");
  setLTR(".latex-inline");
  setAuto(".is-paragraph");
});

observer.observe(top.document.getElementById("app-container"), {
  attributes: false,
  childList: true,
  subtree: true,
});
