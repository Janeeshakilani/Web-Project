document.querySelectorAll('.box').forEach((box) => {
  const radio = box.querySelector('.radio-input');

  radio.addEventListener('change', () => {
    document.querySelectorAll('.box').forEach((b) => {
      b.classList.remove('expanded');
    });
    if (radio.checked) {
      box.classList.add('expanded');
    }
  });
   box.addEventListener('click', (e) => {
       if (!e.target.classList.contains('radio-input')) {
      radio.checked = true;
      radio.dispatchEvent(new Event('change'));
    }
  });
});
