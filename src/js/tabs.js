export function initTabs() {

  if (!document.querySelector(".tabs-container")) return;
const tabsContainer = document.querySelector(".tabs-container");
const tabsList = tabsContainer.querySelector(".tabs-list");
const tabLinks = tabsList.querySelectorAll("a");
const tabPanels = tabsContainer.querySelectorAll(".tab-panel");

tabsList.setAttribute("role", "tablist");

tabsList.querySelectorAll("li").forEach((listitem) => {
  listitem.setAttribute("role", "presentation");
});

tabLinks.forEach((tab, index) => {
  tab.setAttribute("role", "tab");
  if (index === 0) {
    tab.setAttribute("aria-selected", "true");
    // we'll add something here
  } else {
    tab.setAttribute("tabindex", "-1");
    tabPanels[index].setAttribute("hidden", "");
  }
});

tabPanels.forEach((panel) => {
  panel.setAttribute("role", "tabpanel");
  panel.setAttribute("tabindex", "0");
});

tabsContainer.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("a");
  if (!clickedTab) return;
  e.preventDefault();

  switchTab(clickedTab);
});

tabsContainer.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      moveLeft();
      break;
    case "ArrowRight":
      moveRight();
      break;
    case "Home":
      e.preventDefault();
      switchTab(tabLinks[0]);
      break;
    case "End":
      e.preventDefault();
      switchTab(tabLinks[tabLinks.length - 1]);
      break;
  }
});

function moveLeft() {
  const currentTab = document.activeElement;
  if (!currentTab.parentElement.previousElementSibling) {
    switchTab(tabLinks[tabLinks.length - 1]);
  } else {
    switchTab(
      currentTab.parentElement.previousElementSibling.querySelector("a")
    );
  }
}

function moveRight() {
  const currentTab = document.activeElement;
  if (!currentTab.parentElement.nextElementSibling) {
    switchTab(tabLinks[0]);
  } else {
    switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"));
  }
}

function switchTab(newTab) {
  const activePanelId = newTab.getAttribute("href");
  const activePanel = tabsContainer.querySelector(activePanelId);


  tabLinks.forEach((button) => {
    button.setAttribute("aria-selected", false);
    button.setAttribute("tabindex", "-1");
  });

  tabPanels.forEach((panel) => {
    panel.setAttribute("hidden", true);
  });

  activePanel.removeAttribute("hidden", false);

  newTab.setAttribute("aria-selected", true);
  newTab.setAttribute("tabindex", "0");
  newTab.focus();
}
}