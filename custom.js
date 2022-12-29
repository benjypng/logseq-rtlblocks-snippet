const observer = new top.MutationObserver(() => {
  const allElems = top?.document.querySelectorAll(".ls-block");
  if (allElems && allElems.length > 0) {
    for (const elem of allElems) {
      elem.setAttribute("dir", "auto");
    }
  }
});

observer.observe(top.document.getElementById("app-container"), {
  attributes: false,
  childList: true,
  subtree: true,
});
