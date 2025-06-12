document.addEventListener("DOMContentLoaded", () => {

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
    
    
    const a = document.querySelector('.hero');
    setTimeout(() => {
        a.classList.add('visible');
    }, 100);

    const b = document.querySelectorAll('.text, .video, .gallery-image');
    const c = document.querySelector('.faq-section');
    const d = document.querySelectorAll('.faq-item');
    const tySection = document.querySelector('.ty');

    const e = () => {
        const f = document.querySelectorAll('.showcase, .optimization, .gallery, .metallic-experience, .subscription');
        f.forEach(g => {
            const h = g.querySelectorAll('.text, .video, .gallery-image');
            const i = g.getBoundingClientRect();
            if (i.top < window.innerHeight && i.bottom > 0) {
                g.classList.add('in-view');
                h.forEach(j => j.classList.add('in-view'));
            } else {
                g.classList.remove('in-view');
                h.forEach(j => j.classList.remove('in-view'));
            }
        });

        const k = c.getBoundingClientRect();
        if (k.top < window.innerHeight && k.bottom > 0) {
            c.classList.add('in-view');
        } else {
            c.classList.remove('in-view');
        }

        const tyRect = tySection.getBoundingClientRect();
        if (tyRect.top < window.innerHeight && tyRect.bottom > 0) {
            tySection.classList.add('in-view');
        } else {
            tySection.classList.remove('in-view');
        }
    };

    d.forEach(n => {
        const o = n.querySelector('.faq-question');
        o.addEventListener('click', () => {
            n.classList.toggle('active');
        });
    });


    document.querySelector('.faq').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.faq-section').scrollIntoView({ behavior: 'smooth' });
    });


    const p = document.getElementById('scroll-to-top');
    p.addEventListener('click', (q) => {
        q.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            const info = image.querySelector('.info');
            info.classList.add('visible');
        });
        image.addEventListener('mouseleave', () => {
            const info = image.querySelector('.info');
            info.classList.remove('visible');
        });
    });
    
    window.addEventListener('scroll', e);
    e();
});


