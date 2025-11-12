document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();

        const targetId = link.getAttribute('data-target');

        document.querySelectorAll('.view-card').forEach(card => {
            card.style.display = 'none';
            card.classList.remove('fade-in');
        });

        const targetView = document.getElementById(targetId);
        targetView.style.display = 'block';
        targetView.classList.add('fade-in');
        document.getElementById('welcome-card').style.display = 'none';
    });
});
