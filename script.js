// Change background color when button is clicked
document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#f4f4f4', '#e6f7ff', '#ffe6e6', '#e6ffe6', '#f9e6ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Add current year to footer
document.querySelector('footer p').innerHTML ='&copy; ${new Date().getFullYear()} My Simple Website';

// Add hover effect to feature boxes
const featureBoxes = document.querySelectorAll('.feature-box');
featureBoxes.forEach(box => {
    box.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    box.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});