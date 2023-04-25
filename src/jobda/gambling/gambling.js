let isContinue = false;

function isValid(balance, stake, accept) {
  if (isContinue) {
    alert("숨 좀 고르고 하는거 어때?");
    return false;
  }
  if (stake == null || stake == "" || stake >= balance || stake < 0) {
    alert("어허! 판돈을 확인해라!\n 가진 돈 보다 조금만 입력하세요!");
    return false;
  } else if (accept == "no") {
    alert("... 동의하지 않는거냐");
    return false;
  }
  return true;
}

async function gamblingSmartContract(id, stake) {
  const gamblingTx = await contract.methods.gambling(id, stake);
  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      to: contractAddress,
      data: gamblingTx.encodeABI(),
      gas: (await gamblingTx.estimateGas()) + 10000,
    },
    privateKey
  );
  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  );
}

async function gamblingFunction() {
  const stake = parseInt(document.getElementById("stake").value);
  const accept = document.querySelector('input[name="accept"]:checked').value;
  const id = document.getElementById("id").value;
  let balance = await checkBalance(id);
  if (!isValid(balance, stake, accept)) return;
  isContinue = true;
  try {
    await gamblingSmartContract(id, stake);
  } catch (e) {
    alert("헉...! 잡히지 않은 에러가...! 다시 시도해 주세요!");
    isContinue = false;
    return;
  }
  let after_balance = await checkBalance(id);
  if (parseInt(balance) < parseInt(after_balance)) {
    alert("야호! 이겼다!");
  } else {
    alert("힝... 졌다...");
  }
  updateBalanceWithBalance(after_balance);
  isContinue = false;
}
