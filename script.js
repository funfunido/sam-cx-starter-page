 const samstarter = new Audio('/samstarter.wav');
    let hasInteracted = false;

    document.addEventListener('click', () => {
      if (!hasInteracted) {
        samstarter.play().catch(error => {
          console.error('Error playing audio:', error);
        });
        hasInteracted = true;
      }
    });
