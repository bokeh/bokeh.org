(() => {
  const picker = document.querySelector("[data-install-picker]");

  if (!picker) {
    return;
  }

  const tabs = Array.from(picker.querySelectorAll('[role="tab"]'));
  const panel = picker.querySelector('[role="tabpanel"]');
  const command = panel.querySelector("code");
  const copyButton = panel.querySelector("button");
  let copiedTimer;

  function selectTab(index, moveFocus = false) {
    const tab = tabs[index];

    tabs.forEach((item, itemIndex) => {
      const isActive = itemIndex === index;
      item.setAttribute("aria-selected", String(isActive));
      item.tabIndex = isActive ? 0 : -1;
    });

    command.textContent = tab.dataset.command;
    panel.setAttribute("aria-labelledby", tab.id);
    copyButton.textContent = "Copy";

    if (moveFocus) {
      tab.focus();
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(index));
    tab.addEventListener("keydown", (event) => {
      let nextIndex;

      if (event.key === "ArrowRight") {
        nextIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        nextIndex = 0;
      } else if (event.key === "End") {
        nextIndex = tabs.length - 1;
      } else {
        return;
      }

      event.preventDefault();
      selectTab(nextIndex, true);
    });
  });

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(command.textContent);
      copyButton.textContent = "Copied";
      window.clearTimeout(copiedTimer);
      copiedTimer = window.setTimeout(() => {
        copyButton.textContent = "Copy";
      }, 1800);
    } catch {
      copyButton.textContent = "Copy";
    }
  });
})();
