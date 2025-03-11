// Получаем дату и время окончания принятия ответов (например, через 10 минут)
const endTime = new Date();
endTime.setMinutes(endTime.getMinutes() + 10);

// Функция для обновления таймера
function updateTimer() {
  const currentTime = new Date().getTime();
  const distance = endTime - currentTime;

  // Рассчитываем оставшееся время в минутах и секундах
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Выводим оставшееся время в элемент на странице
  document.getElementById('timer').innerText = minutes + ' минут ' + seconds + ' секунд';

  // Если время истекло, выводим сообщение и останавливаем таймер
  if (distance < 0) {
    clearInterval(timerInterval);
    document.getElementById('timer').innerText = 'Время истекло';
  }
}

// Вызываем функцию обновления таймера каждую секунду
const timerInterval = setInterval(updateTimer, 1000);

// При загрузке страницы выводим оставшееся время
window.onload = updateTimer;