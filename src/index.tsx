import "@logseq/libs";
import observerCallback from "./services/observerCallback";

function main() {
  console.log("logseq-rtlblocks-plugin loaded");

  logseq.App.registerCommandShortcut(
    { mode: "non-editing", binding: "r r" },
    function () {
      if (logseq.settings!.rtl === "left") {
        logseq.updateSettings({
          rtl: "right",
        });
        logseq.UI.showMsg(`RTL mode: Right to Left`, "success");
      } else {
        logseq.updateSettings({
          rtl: "left",
        });
        logseq.UI.showMsg(`RTL mode: Left to Right`, "success");
      }
    }
  );

  //@ts-expect-error
  const observer = new top.MutationObserver(observerCallback);

  //@ts-expect-error
  observer.observe(top.document.getElementById("app-container"), {
    attributes: false,
    childList: true,
    subtree: true,
  });
}

logseq.ready(main).catch(console.error);
