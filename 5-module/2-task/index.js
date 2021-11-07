function toggleText() {
  let button = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    text.toggleAttribute('hidden');
  });
}
