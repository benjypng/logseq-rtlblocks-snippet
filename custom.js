console.log("CUSTOM JS LOADED");

const observer = new top.MutationObserver(function () {
  const allElems = top?.document.querySelectorAll(".ls-block");
  if (allElems && allElems.length > 0) {
    for (const elem of allElems) {
      elem.setAttribute("dir", "auto");

      if (getComputedStyle(elem).direction === "rtl") {
        elem.style.marginLeft = "0px";

        const flexElem = elem.childNodes[0];
        if (flexElem) {
          const contentWrapper = flexElem.childNodes[1];
          contentWrapper.style.marginRight = "5px";
        }

        const node = elem.childNodes[1];
        if (node) {
          const borderNode = node.childNodes[0];
          if (borderNode) {
            borderNode.style.zIndex = "1";
            borderNode.style.right = "43px";
            borderNode.style.top = "0";
            borderNode.style.height = "100%";
            borderNode.style.cursor = "pointer";
            borderNode.style.backgroundClip = "content-box";
            borderNode.style.position = "absolute";
            borderNode.style.borderRadius = "2px";
          }

          const leftBorderNode = node.childNodes[1];
          leftBorderNode.style.borderLeft = "0";
          leftBorderNode.style.borderRight = "1px solid";
          leftBorderNode.style.marginLeft = "0";
          leftBorderNode.style.marginRight = "44px";
          leftBorderNode.style.borderRightColor =
            "var(--ls-guideline-color,#ddd)";
          leftBorderNode.style.display = "inline !important";
        }
      }
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
