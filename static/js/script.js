// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-in-out-quad'
    });
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// فایل script.js
document.addEventListener('DOMContentLoaded', function() {
    // تنظیمات اولیه برای AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: false, // اجازه میدهیم انیمیشن در اسکرول برگشتی هم اجرا شود
        mirror: true, // فعال کردن انیمیشن در اسکرول معکوس
        easing: 'ease-in-out-quad',
        offset: 120
    });

    // افزودن افکت اسکرول نرم برای کلیه لینکها
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // افزودن افکت اسکرول معکوس با تشخیص جهت
    let lastScroll = 0;
    const delta = 15;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // تشخیص جهت اسکرول
        if(Math.abs(lastScroll - currentScroll) <= delta) return;
        
        const scrollDown = currentScroll > lastScroll;
        const sections = document.querySelectorAll('.section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const scrollPosition = window.innerHeight + currentScroll;
            
            if(scrollDown) {
                if(scrollPosition > sectionTop + sectionHeight/2) {
                    section.style.transform = 'translateY(0)';
                    section.style.opacity = '1';
                }
            } else {
                if(currentScroll < sectionTop - sectionHeight/2) {
                    section.style.transform = 'translateY(50px)';
                    section.style.opacity = '0';
                }
            }
        });
        
        lastScroll = currentScroll;
    });

    // افزودن نشانگر پیشرفت اسکرول
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '3px';
    progressBar.style.backgroundColor = '#4CAF50';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.3s ease';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
});