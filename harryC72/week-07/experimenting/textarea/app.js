let inputs = document.getElementById('inputs');

inputs.addEventListener('keyup', (e) => {
      if (e.target.className == 'jo') {
        if (e.target.value.length == e.target.maxLength) {
          e.target.nextElementSibling.focus();
        }
      }
    });