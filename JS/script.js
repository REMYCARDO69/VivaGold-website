 // Mobile Menu Toggle
        document.querySelector('.mobile-menu').addEventListener('click', function() {
            document.querySelector('nav ul').classList.toggle('show');
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.querySelector('nav ul').classList.remove('show');
                }
            });
        });

  
        
        // Form Validation
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                // Simple validation
                if (validateEmail(email)) {
                    // Form is valid - show success message
                    alert('Thank you for your message! We will contact you soon.');
                    this.reset();
                } else {
                    alert('Please enter a valid email address.');
                }
            } else {
                alert('Please fill in all fields.');
            }
        });
        
        function validateEmail(email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        
        // Animation on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe elements that need animation
        document.querySelectorAll('.about-content, .about-image, .service-card, .contact-info, .contact-form').forEach(el => {
            observer.observe(el);
        });
        

const carousel = document.getElementById('testimonialCarousel');
let scrollAmount = 0;
function autoScroll(){
    if (carousel.scrollWidth - carousel.clientWidth ===scrollAmount){
        scrollAmount = 0;
    }else{
        scrollAmount += 1;
    }
    carousel.scrollTo({
        left:scrollAmount,
        behavior:"smooth"
    });
}
setInterval(autoScroll,40);

    
// Show popup after 2 seconds
window.addEventListener('load', function () {
    setTimeout(() => {
        document.getElementById("popupAd").style.display = "block";
    }, 2000);
});
// Then, show video animation after anther second
setTimeout(() =>{
    const videoWrapper = document.getElementById("videoWrapper");
    videoWrapper.classList.add("show");},3000)

// Close popup ad
function closeAd() {
    const ad = document.getElementById("popupAd");
    ad.style.animation = "popOut 0.9s ease forwards";
    setTimeout(() => ad.style.display = "none", 6000);
}



