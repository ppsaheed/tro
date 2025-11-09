        document.addEventListener('DOMContentLoaded', function() {
          // Function to trigger the Facebook Subscribe event
          function triggerFacebookSubscribe() {
            if (typeof fbq === 'function') {
              fbq('track', 'Subscribe');
              console.log('Facebook Subscribe event triggered!');
            } else {
              console.warn('Facebook Pixel (fbq) not found. Make sure the base code is installed correctly.');
            }
          }
      
          // Get all elements with the class 'whattsapp_icon'
          const whatsappButtons = document.querySelectorAll('.whattsapp_icon');
          whatsappButtons.forEach(button => {
            button.addEventListener('click', triggerFacebookSubscribe);
          });
          
        const scheduleButtons = document.querySelectorAll('.vs-btn.wave-btn');
          scheduleButtons.forEach(button => {
            button.addEventListener('click', triggerFacebookSubscribe);
          });
      
          // Get all elements with the classes 'vs-btn wave-btn style-1'
          const otherButtons = document.querySelectorAll('.vs-btn.wave-btn.style-1');
          otherButtons.forEach(button => {
            button.addEventListener('click', triggerFacebookSubscribe);
          });
        });