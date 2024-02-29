const remanejamentosTabOptions = document.querySelectorAll("button.remanejamento-tab");

for (let i = 0; i < remanejamentosTabOptions.length; i++)
{
  remanejamentosTabOptions[i].addEventListener("click", event => remanejamentosOpenContainer(event.target.id));
}

function remanejamentosOpenContainer(buttonId)
{
  remanejamentosCloseAllContainers();
  remanejamentosDisplayContainer(buttonId);
  remanejamentosDeactivateAllContainersButton();
  remanejamentosActivateContainerButton(buttonId);
}

function remanejamentosCloseAllContainers()
{
  for (let i = 0; i < remanejamentosTabOptions.length; i++)
  {
    let containerId = `${remanejamentosTabOptions[i].id}-container`;
    let container   =  document.getElementById(containerId);
    container.classList.remove("active");
  }
}

function remanejamentosDisplayContainer(buttonId)
{
  let containerId = `${buttonId}-container`;
  let container   = document.getElementById(containerId);
  container.classList.add("active");
}

function remanejamentosDeactivateAllContainersButton()
{
  for (let i = 0; i < remanejamentosTabOptions.length; i++)
    remanejamentosTabOptions[i].classList.remove("active-tab");
}

function remanejamentosActivateContainerButton(buttonId)
{
  let button = document.getElementById(buttonId);
  button.classList.add("active-tab");
}