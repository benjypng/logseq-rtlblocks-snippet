const setAttributeBySelector = (attribute, value, querySelector) => {
  const elements = top?.document.querySelectorAll(querySelector);
  if (elements && elements.length > 0) {
    for (const element of elements) {
      element.setAttribute(attribute, value);
    }
  }
};

const observer = new top.MutationObserver(() => {
  setAttributeBySelector("dir", "auto", ".ls-block");
  setAttributeBySelector("dir", "ltr", ".katex-html");
});

observer.observe(top.document.getElementById("app-container"), {
  attributes: false,
  childList: true,
  subtree: true,
});
