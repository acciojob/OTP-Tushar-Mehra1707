//your JS code here. If required.
const inputs = document.querySelectorAll('.code');

inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      input.value = ''; // Clear current before adding new
      setTimeout(() => {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }, 10);
    } else if (e.key === 'Backspace') {
      input.value = '';
      setTimeout(() => {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }, 10);
    }
  });

  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9]/g, ''); // Accept only digits
  });
});

