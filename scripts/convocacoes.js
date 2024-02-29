const convocacoesTabOptions = document.querySelectorAll("button.convocacoes-tab-option");

for (let i = 0; i < convocacoesTabOptions.length; i++)
{
  convocacoesTabOptions[i].addEventListener("click", event => openContainer(event.target.id));
}

function openContainer(buttonId)
{
  closeAllContainers();
  displayContainer(buttonId);
  deactivateAllContainersButton();
  activateContainerButton(buttonId);
}

function closeAllContainers()
{
  for (let i = 0; i < convocacoesTabOptions.length; i++)
  {
    let containerId = `${convocacoesTabOptions[i].id}-container`;
    let container   =  document.getElementById(containerId);
    container.classList.remove("active");
  }
}

function displayContainer(buttonId)
{
  let containerId = `${buttonId}-container`;
  let container   = document.getElementById(containerId);
  container.classList.add("active");
}

function deactivateAllContainersButton()
{
  for (let i = 0; i < convocacoesTabOptions.length; i++)
    convocacoesTabOptions[i].classList.remove("tab-option-actived");
}

function activateContainerButton(buttonId)
{
  let button = document.getElementById(buttonId);
  button.classList.add("tab-option-actived");
}