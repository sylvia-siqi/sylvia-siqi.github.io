(function () {
    const nav = document.querySelector('.project-section-nav');
    if (!nav) return;

    const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    const sections = links
        .map((link) => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return null;
            const section = document.querySelector(href);
            if (!section) return null;
            return { link, section };
        })
        .filter(Boolean);

    if (!sections.length) return;

    function setActiveSection() {
        const scrollPosition = window.scrollY + 180;
        let activeItem = sections[0];

        for (const item of sections) {
            if (item.section.offsetTop <= scrollPosition) {
                activeItem = item;
            } else {
                break;
            }
        }

        sections.forEach(({ link }) => {
            const isActive = link === activeItem.link;
            link.classList.toggle('active', isActive);
            if (isActive) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    setActiveSection();
    window.addEventListener('scroll', setActiveSection, { passive: true });
    window.addEventListener('resize', setActiveSection);
})();
