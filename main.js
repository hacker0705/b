// создание транзакции на 1 SOL
async function createTransaction() {
  // получение публичного ключа аккаунта из кошелька Phantom
  const publicKey = await provider.publicKey;

  // создание объекта Solana для работы с блокчейном
  const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('devnet'));

  // создание транзакции
  const transaction = new solanaWeb3.Transaction().add(
    solanaWeb3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: publicKey,
      lamports: solanaWeb3.LAMPORTS_PER_SOL,
    })
  );

  // подписание транзакции
  const signedTransaction = await provider.signTransaction(transaction);

  // отправка транзакции на блокчейн
  const signature = await connection.sendRawTransaction(signedTransaction.serialize());

  console.log(`Транзакция создана с сигнатурой: ${signature}`);
}
