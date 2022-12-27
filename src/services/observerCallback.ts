export default async function observerCallback(mutationsList: any[]) {
  const elems = top?.document.getElementsByClassName("block-property");

  if (elems && elems.length > 0) {
    for (const elem of elems) {
      if (elem.innerHTML === "rtl") {
        const parent = elem.closest(".ls-block") as HTMLDivElement;
        parent.setAttribute("dir", "rtl");
        const propertyBlock = elem.closest(
          ".block-properties"
        ) as HTMLDivElement;
        propertyBlock.style.display = "none";
      }
    }
  }

  if (
    mutationsList[0].removedNodes.length === 0 &&
    logseq.settings!.rtl === "right"
  ) {
    const elem = mutationsList[0].target.closest('div[id^="ls-block"]');
    if (elem) elem.setAttribute("dir", "rtl");
  }

  if (
    mutationsList[0].type === "childList" &&
    mutationsList[0].removedNodes.length > 0 &&
    mutationsList[0].removedNodes[0].className ===
      "editor-inner block-editor" &&
    logseq.settings!.rtl === "right"
  ) {
    const uuid = mutationsList[0].target
      .closest('div[id^="ls-block"]')
      ?.getAttribute("blockid");

    await logseq.Editor.upsertBlockProperty(uuid, "rtl", "right");
  }
}
