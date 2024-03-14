const tabButtons = document.querySelectorAll("button.tab-option");
const subTabMenu = document.querySelector("div.subtab-menu-container");

for (let counter = 0; counter < tabButtons.length; counter++)
  tabButtons[counter].addEventListener("click", event => openTab(event.target.id));

function openTab(tabId)
{
  closeAllTabs();
  displayRightTab(tabId);
}

function closeAllTabs()
{
  let tabPanels  = document.querySelectorAll("div.tab-content");
  let tabButtons = document.querySelectorAll("button.tab-option");

  for (let counter = 0; counter < tabPanels.length; i++)
  {
    tabPanels[counter].style.display = "none";
    tabButtons[counter].remove("active");
  }
}

function displayRightTab(tabId)
{
  if (tabId === "publicacoes")
  {
    subTabMenu.style.display = "flex";
    removeBodyBorder();
  }
  else
  {
    subTabMenu.style.display = "none";
    insertBodyBorder();
  }

  let tabPanel = document.getElementById(`${tabId}-panel`);
  tabPanel.style.display = "block";

  let tabButton = document.getElementById(tabId);
  tabButton.classList.add("active");
}