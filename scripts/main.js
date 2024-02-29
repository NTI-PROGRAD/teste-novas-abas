const subTabMenu = document.querySelector("div.subtab-menu-container");
const tabButtons = document.querySelectorAll("button.tab-option");

for (let counter = 0; counter < tabButtons.length; counter++)
  tabButtons[counter].addEventListener("click", (event) => openTab(event.target.id));

function openTab(tabId)
{
  closeAllTabPanels();
  displayTabPanel(tabId);
  deactiveAllTabOptions();
  activeTabOption(tabId);
}

function closeAllTabPanels()
{
  let tabPanels = document.querySelectorAll("div.tab-content");

  for (let i = 0; i < tabPanels.length; i++)
    tabPanels[i].style.display = "none";
}

function insertBodyBorder()
{
  let container = document.querySelector("div.body");
  container.style.border = "1px solid #333";
  container.style.borderRadius = "2px";
}

function removeBodyBorder()
{
  let container = document.querySelector("div.body");
  container.style.border = "none";
}

function displayTabPanel(tabId)
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
}

function deactiveAllTabOptions()
{
  let tabOptions = document.querySelectorAll("button.tab-option");

  for (let i = 0; i < tabOptions.length; i++)
    tabOptions[i].classList.remove("active");
}

function activeTabOption(tabId)
{
  let tabOption = document.getElementById(tabId);
  tabOption.classList.add("active");
}

openTab("publicacoes");

/** ############################ **/

const subTabButtons = document.querySelectorAll("button.subtab-option");

for (let counter = 0; counter < subTabButtons.length; counter++)
  subTabButtons[counter].addEventListener("click", event => openSubTab(event.target.id));

function openSubTab(subTabId)
{
  closeAllSubTabPanels();
  displaySubTabPanel(subTabId);
  deactiveAllSubTabButtons();
  activeSubTabButton(subTabId);
}

function closeAllSubTabPanels()
{
  for (let i = 0; i < subTabButtons.length; i++)
  {
    subTabPanelId = `${subTabButtons[i].id}-panel`;
    panel = document.getElementById(subTabPanelId);
    panel.classList.remove("actived-panel");
  }
}

function displaySubTabPanel(subTabId)
{
  let subTabPanel = document.getElementById(`${subTabId}-panel`);
  subTabPanel.classList.add("actived-panel");
}

function deactiveAllSubTabButtons()
{
  for (let i = 0; i < subTabButtons.length; i++)
    subTabButtons[i].classList.remove("active");
}

function activeSubTabButton(subTabId)
{
  let subTabButton = document.getElementById(subTabId);
  subTabButton.classList.add("active");
}
