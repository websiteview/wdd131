document.addEventListener('DOMContentLoaded', () => {
  let reviewCount = Number(localStorage.getItem('reviewCount')) || 0;
  reviewCount += 1;
  localStorage.setItem('reviewCount', reviewCount);
  const countElement = document.getElementById('reviewCount');
  if (countElement) {
    countElement.textContent = reviewCount;
  }
});
