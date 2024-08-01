const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];

/* Declaring the alternative text for each image file */
const alts = {'pic1.jpg' : 'Eye', 'pic2.jpg' : 'Shell close up', 'pic3.jpg' : 'Flowers', 'pic4.jpg' : 'Tomb wall', 'pic5.jpg' : 'Moth'}

/* Looping through images */
for (image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const colour = btn.getAttribute('switch');
    if (colour === 'dark') {
        btn.setAttribute('switch', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.2';
    } else {
        btn.setAttribute('switch','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
})

