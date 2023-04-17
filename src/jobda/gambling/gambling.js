function gamblingFunction() {
  let money = document.getElementById("having-money").innerHTML;
  const stake = document.getElementById("money").value;
  const accept = document.querySelector('input[name="accept"]:checked').value;
  console.log(accept);
  if (accept == "no") {
    alert("... 동의하지 않는거냐");
    return;
  }
  if (stake == null || stake == "" || Number(stake) > Number(money)) {
    alert("어허! 판돈을 확인해라!");
    return;
  }
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
