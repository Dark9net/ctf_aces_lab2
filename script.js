const exampleToken = "ACES{U29NRV9PbmVfVGhlRnRfTXlfaEVhclQ=}";

function setTokenContent() {
  const tokenContentElement = document.getElementById('tokenContent');
  tokenContentElement.textContent = 'Wait and watch...';

  setTimeout(() => {
    tokenContentElement.textContent = exampleToken;
  }, 30000);
}

window.onload = setTokenContent;
