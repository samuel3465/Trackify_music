function revealMore() {
    const moreText = document.getElementById('more-text');
    const button = document.querySelector('#about-us button');
  
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      button.textContent = 'Show Less';
    } else {
      moreText.style.display = 'none';
      button.textContent = 'Read More';
    }
  }
  