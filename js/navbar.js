document.addEventListener('DOMContentLoaded', () => {
    const navbarHeader = document.getElementById('navbarHeader');
    const mainNavbar = document.getElementById('mainNavbar');

    // Create the navbar container
    const navbarContainer = document.createElement('div');
    navbarContainer.classList.add('navbar-container');

    // Create the logo container
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
    const logoLink = document.createElement('a');
    logoLink.href = '#';
    logoLink.classList.add('logo');
    const logoImg = document.createElement('img');
    logoImg.src = '../images/Logo.png'; 
    logoImg.alt = 'Logo';
    logoLink.appendChild(logoImg);
    logoContainer.appendChild(logoLink);
    navbarContainer.appendChild(logoContainer);

    // Create the navigation links
    const navLinks = document.createElement('ul');
    navLinks.classList.add('nav-links');
    navLinks.id = 'navLinks';

    const navItemsData = [
        { text: 'Home', href: '#' },
        {
            text: 'Services', href: '#', dropdown: [
                { text: 'Service 1', href: '#' },
                { text: 'Service 2', href: '#' },
                { text: 'Service 3', href: '#' },
            ]
        },
        { text: 'Portfolio', href: '#' },
        { text: 'Reviews', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'White level', href: '#' },
    ];

    navItemsData.forEach(itemData => {
        const listItem = document.createElement('li');
        listItem.classList.add('nav-item');

        const link = document.createElement('a');
        link.href = itemData.href;
        link.classList.add('nav-link');
        link.textContent = itemData.text;
        listItem.appendChild(link);

        if (itemData.dropdown) {
            listItem.classList.add('has-dropdown');
            const dropdownIcon = document.createElement('span');
            dropdownIcon.classList.add('dropdown-icon');
            dropdownIcon.innerHTML = '&#9660;';
            link.appendChild(dropdownIcon);

            const dropdownList = document.createElement('ul');
            dropdownList.classList.add('dropdown');
            itemData.dropdown.forEach(dropdownItem => {
                const dropdownListItem = document.createElement('li');
                const dropdownLink = document.createElement('a');
                dropdownLink.href = dropdownItem.href;
                dropdownLink.textContent = dropdownItem.text;
                dropdownListItem.appendChild(dropdownLink);
                dropdownList.appendChild(dropdownListItem);
            });
            listItem.appendChild(dropdownList);
        }

        navLinks.appendChild(listItem);
    });

    navbarContainer.appendChild(navLinks);

    // Create the authentication buttons
    const authButtons = document.createElement('div');
    authButtons.classList.add('auth-buttons');
    const loginBtn = document.createElement('button');
    loginBtn.classList.add('login-btn');
    loginBtn.textContent = 'Log in';
    const demoBtn = document.createElement('button');
    demoBtn.classList.add('demo-btn');
    demoBtn.textContent = 'Book a demo';
    authButtons.appendChild(loginBtn);
    authButtons.appendChild(demoBtn);
    navbarContainer.appendChild(authButtons);

    // Create the hamburger button
    const hamburgerBtn = document.createElement('button');
    hamburgerBtn.classList.add('hamburger');
    hamburgerBtn.id = 'hamburgerBtn';
    for (let i = 0; i < 3; i++) {
        const bar = document.createElement('span');
        bar.classList.add('bar');
        hamburgerBtn.appendChild(bar);
    }
    navbarContainer.appendChild(hamburgerBtn);

    // Append the container to the navbar
    mainNavbar.appendChild(navbarContainer);

    // Add event listeners for mobile navigation (same as before)
    hamburgerBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburgerBtn.classList.toggle('open');
        document.querySelectorAll('.has-dropdown').forEach(item => item.classList.remove('open'));
    });

    navLinks.querySelectorAll('.has-dropdown > .nav-link').forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                const parentItem = toggle.parentNode;
                parentItem.classList.toggle('open');
            }
        });
    });

    navLinks.querySelectorAll('.nav-link:not(.has-dropdown > .nav-link)').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 992 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerBtn.classList.remove('open');
                document.querySelectorAll('.has-dropdown').forEach(item => item.classList.remove('open'));
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            document.querySelectorAll('.has-dropdown').forEach(item => item.classList.remove('open'));
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburgerBtn.classList.remove('open');
            }
        }
    });
});