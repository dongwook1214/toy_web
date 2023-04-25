async function signUp(signUpId) {
  console.log(signUpId);
  const signUpTx = await contract.methods.signIn(signUpId);
  const balance = parseInt(await checkBalance(signUpId));
  if (balance > 0) {
    alert("이미 가입된 아이디다!");
    return;
  }

  const createTransaction = await web3.eth.accounts.signTransaction(
    {
      to: contractAddress,
      data: signUpTx.encodeABI(),
      gas: await signUpTx.estimateGas(),
    },
    privateKey
  );

  const createReceipt = await web3.eth.sendSignedTransaction(
    createTransaction.rawTransaction
  );

  console.log(createReceipt);
  alert("가입에 성공했다!");
}
