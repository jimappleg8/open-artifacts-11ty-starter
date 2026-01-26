
/**
 * Hamburger Menu Toggle
 */
document.addEventListener('DOMContentLoaded', function() {
  // open
  const burger = document.querySelectorAll('.navbar-burger');
  const menu = document.querySelectorAll('.navbar-menu');

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener('click', function() {
        for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  // close
  const close = document.querySelectorAll('.navbar-close');
  const backdrop = document.querySelectorAll('.navbar-backdrop');

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function() {
        for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener('click', function() {
        for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle('hidden');
        }
      });
    }
  }

  /**
   * Theme (Dark Mode)Toggle
   */
  // Use querySelectorAll to find ALL buttons with our new class
  const toggleBtns = document.querySelectorAll('.js-theme-toggle');

  // Helper function to handle the logic
  function setDarkTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }

  // Attach the Click Event to BOTH buttons
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.contains('dark');
      // Toggle the opposite of current state
      setDarkTheme(!isDark);
    });
  });

});
