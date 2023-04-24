function isValid() {
  let balance = document.getElementById("having-money").innerHTML;
  const stake = document.getElementById("money").value;
  const accept = document.querySelector('input[name="accept"]:checked').value;
  if (
    stake == null ||
    stake == "" ||
    Number(stake) > Number(balance) ||
    Number(stake) < 0
  ) {
    alert("어허! 판돈을 확인해라!");
    return false;
  } else if (accept == "no") {
    alert("... 동의하지 않는거냐");
    return false;
  }
  return true;
}

function letsGambling() {
  let balance = document.getElementById("having-money").innerHTML;
  const stake = document.getElementById("money").value;
  const randNum = Math.floor(Math.random() * 10);
  if (randNum % 2) {
    alert("이겼다ㅎㅎ");
    balance = Number(balance) + Number(stake);
  } else {
    alert("졌다ㅜㅜ");
    balance = Number(balance) - Number(stake);
  }
  document.getElementById("having-money").innerHTML = balance;
}

async function loadBalance() {
  const id = document.getElementById("money").value;
  const balence = await contract.methods.playerMoney(account).call();
}

function gamblingSmartContract() {
  const stake = document.getElementById("money").value;
  const Http = new XMLHttpRequest();
  const url = `https://api-testnet.polygonscan.com/api?module=account&action=balance&address=0xa17CCeC4f1a1a8775C83913Cc1F837ADb6F12cC2&apikey=YourApiKeyToken`;
  Http.open("GET", url);
  Http.send();
  Http.onreadystatechange = (e) => {
    console.log(Http.responseText);
  };
}

function gamblingFunction() {
  // if (!isValid()) return;
  // letsGambling();
  loadBalance();
  // httpEx();
}
