function isValid() {
  let money = document.getElementById("having-money").innerHTML;
  const stake = document.getElementById("money").value;
  const accept = document.querySelector('input[name="accept"]:checked').value;
  if (
    stake == null ||
    stake == "" ||
    Number(stake) > Number(money) ||
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
  let money = document.getElementById("having-money").innerHTML;
  const stake = document.getElementById("money").value;
  const randNum = Math.floor(Math.random() * 10);
  if (randNum % 2) {
    alert("이겼다!");
    money = Number(money) + Number(stake);
  } else {
    alert("졌다ㅜㅜ");
    money = Number(money) - Number(stake);
  }
  document.getElementById("having-money").innerHTML = money;
}

function gamblingFunction() {
  if (!isValid()) return;
  letsGambling();
}
