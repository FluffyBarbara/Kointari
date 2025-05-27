
let totalSum = 0;
let seriesSum = 0;

function formatMoney(value) {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: 3,
    maximumFractionDigits: 3,
  }) + '$';
}

function saveEntry() {
  const amountInput = document.getElementById('amount');
  const commentInput = document.getElementById('comment');
  const amount = parseFloat(amountInput.value);
  const comment = commentInput.value.trim();
  if (isNaN(amount) || comment === '') return;

  const time = new Date().toLocaleTimeString();
  const entry = document.createElement('div');
  entry.classList.add('entry', amount >= 0 ? 'positive' : 'negative');
  entry.innerHTML = `<strong>${time}</strong> ${amount >= 0 ? '+' : ''}${formatMoney(amount)}<br>${comment}`;
  document.getElementById('log').prepend(entry);

  totalSum += amount;
  seriesSum += amount;
  updateSums();

  amountInput.value = '';
  commentInput.value = '';
}

function updateSums() {
  document.getElementById('seriesSum').textContent = formatMoney(seriesSum);
  document.getElementById('totalSum').textContent = formatMoney(totalSum);
}

function newSeries() {
  seriesSum = 0;
  updateSums();
}

function resetAll() {
  if (confirm("Вы уверены, что хотите сбросить все данные?")) {
    totalSum = 0;
    seriesSum = 0;
    updateSums();
    document.getElementById('log').innerHTML = '';
  }
}

function openAuthorInfo() {
  document.getElementById('authorModal').style.display = 'block';
}

function closeAuthorInfo() {
  document.getElementById('authorModal').style.display = 'none';
}
