let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



menuIcon.onclick = () => {
    menuIcon.classList.toggle('bi-x');
    navbar.classList.toggle('active');
};

document.querySelector('.gradient-btn').onclick = function()
 {
    location.href = '#contact';
};

``
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-mode');
        }

        const themeToggle = document.getElementById('theme-toggle');

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light');
            } else {
                localStorage.setItem('theme', 'dark');
            }
        });

    document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
   
    const fullName = document.querySelector('input[placeholder="Full Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const phone = document.querySelector('input[placeholder="Phone Number"]').value;
    const subject = document.querySelector('input[placeholder="Subject"]').value;
    const message = document.getElementById('messege').value;
    const contactMethod = document.querySelector('input[name="contact-method"]:checked');

    
    document.getElementById('error-Full Name').textContent = '';
    document.getElementById('error-Email').textContent = '';
    document.getElementById('error-phone Number').textContent = '';
    document.getElementById('error-Subject').textContent = '';
    document.getElementById('error-message').textContent = '';

    let isValid = true;

    
    const namePattern = /^[A-Za-z\s]+$/; 
    if (fullName.length < 3 || !namePattern.test(fullName)) {
        document.getElementById('error-FullName').textContent = 'the name should contain of at least 3 characters and contain only';
        isValid = false;
    }

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!emailPattern.test(email)) {
        document.getElementById('error-Email').textContent = 'please enter a valid email';
        isValid = false;
    }

    
    const phonePattern = /^\+?\d+(-\d+)*$|^\(\d{3}\) \d{3}-\d{4}$/; 
    if (phone && !phonePattern.test(phone)) {
        document.getElementById('error-phone Number').textContent = 'please enter a valid phone number';
        isValid = false;
    }

    
    if (subject.length < 5) {
        document.getElementById('error-Subject').textContent = 'the subject must be at least 5 characters';
        isValid = false;
    }

  
    if (message.length < 10 || message.length > 500) {
        document.getElementById('error-message').textContent = 'the message must consist of 10 to 500 characters';
        isValid = false;
    }

   
    if (!contactMethod) {
        document.getElementById('error-message').textContent = 'please choose its preferred contact route';
        isValid = false;
    }

  
    if (isValid) {
        alert('Message sent successfully');
        
    }
});