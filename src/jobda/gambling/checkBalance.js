async function checkBalance(checkId) {
  const response = await contract.methods.playerMoney(checkId).call();
  console.log(response);
  return response;
}

async function updateBalance(checkId) {
  document.getElementById("having-money").innerHTML = await checkBalance(
    checkId
  );
}
