const observer = new top.MutationObserver(() => {
  const allElems = top?.document.querySelectorAll(".ls-block");
  if (allElems && allElems.length > 0) {
    for (const elem of allElems) {
      elem.setAttribute("dir", "auto");
    }
  }
  const latexElems = top?.document.querySelectorAll(".katex-html");
  if (latexElems && latexElems.length > 0) {
    for (const elem of latexElems) {
      elem.setAttribute("dir", "ltr");
    }
  }
});

observer.observe(top.document.getElementById("app-container"), {
  attributes: false,
  childList: true,
  subtree: true,
});
