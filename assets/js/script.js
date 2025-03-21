(function() {
  "use strict";

   /**
   * Manejo del envío del formulario
   */
   const contactForm = document.getElementById("contact-form");
   if (contactForm) {
     contactForm.addEventListener("submit", function (event) {
       event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
 
       const form = event.target;
       const formData = new FormData(form);
 
       fetch(form.action, {
         method: "POST",
         body: formData,
         headers: {
           Accept: "application/json",
         },
       })
         .then((response) => {
           if (response.ok) {
              // Redirigir a una página de "mensaje enviado"
             window.location.href = "contact-enviado.html";
            //  mensajeEnviado.classList.remove("hidden");
            //  form.reset(); // Limpia el formulario
           } else {
             alert(
               "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo."
             );
           }
         })
         .catch((error) => {
           alert(
             "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo."
           );
         });
     });
   }
  
  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  /**
   * Mobile nav toggle
   */
  // const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  // function mobileNavToogle() {
  //   document.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavToggleBtn.classList.toggle('bi-list');
  //   mobileNavToggleBtn.classList.toggle('bi-x');
  // }
  // mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    navmenu.addEventListener('click', function(e) {
      e.preventDefault();
      this.parentNode.classList.toggle('active');
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);

})();