// Создаем кнопку для подключения кошелька Phantom
const connectButton = document.createElement('button');
connectButton.textContent = 'Подключить Phantom';
document.body.appendChild(connectButton);

// Создаем кнопку для создания транзакции на 1 SOL
const transactionButton = document.createElement('button');
transactionButton.textContent = 'Создать транзакцию на 1 SOL';
document.body.appendChild(transactionButton);

// Обработчик нажатия на кнопку подключения кошелька Phantom
connectButton.onclick = async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      await window.solana.connect();
      console.log('Кошелек Phantom подключен!');
    } catch (e) {
      console.error(e);
    }
  } else {
    console.error('Phantom не найден!');
  }
};
