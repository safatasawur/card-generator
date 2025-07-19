// script.js

function createCard(title, channelName, views, monthsOld, duration, imageUrl) {
  const card = document.createElement('div');
  card.className = 'card';

  // Image
  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = title;
  img.className = 'thumbnail';

  // Content box
  const content = document.createElement('div');
  content.className = 'card-content';

  const titleEl = document.createElement('h3');
  titleEl.textContent = title;
  
  const metaEl = document.createElement('p');
  metaEl.textContent = `${channelName} • ${views} views • ${monthsOld} months ago`

  const durationEl = document.createElement('p');
  durationEl.textContent = ` ${duration}`;
  durationEl.classList.add('time')

  // Assemble
  content.appendChild(titleEl);
  content.appendChild(metaEl);
  content.appendChild(durationEl);
  card.appendChild(img);
  card.appendChild(content);

  document.getElementById('cardContainer').appendChild(card);
}

// Form submission
document.getElementById('inputForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const channel = document.getElementById('channel').value;
  const views = parseInt(document.getElementById('views').value);
  const months = parseInt(document.getElementById('months').value);
  const duration = document.getElementById('duration').value;
  const image = document.getElementById('image').value;

  createCard(title,channel,  views, months, duration, image);

  this.reset(); // Clear form
});
