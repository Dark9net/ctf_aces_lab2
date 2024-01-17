const exampleToken = "ACES{U29NRV9PbmVfVGhlRnRfTXlfaEVhclQ=}";
// Try to decode the encoded string
function setTokenContent() {
  const tokenContentElement = document.getElementById('tokenContent');
  tokenContentElement.textContent = 'Wait and watch...';

  setTimeout(() => {
    tokenContentElement.textContent = exampleToken;
  }, 300000);
}

window.onload = setTokenContent;
