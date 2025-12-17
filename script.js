// =============================================
// SEAN & IYA - ANNIVERSARY WEBSITE
// JavaScript Functionality
// =============================================

// Anniversary Date
const anniversaryDate = new Date('December 18, 2025 00:00:00').getTime();

// =============================================
// COUNTDOWN TIMER
// =============================================
function updateCountdown() {
    const now = new Date().getTime();
    const distance = anniversaryDate - now;

    const countdown = document.getElementById('countdown');
    const celebrationMessage = document.getElementById('celebrationMessage');

    if (distance < 0) {
        // It's the anniversary day or after!
        countdown.style.display = 'none';
        celebrationMessage.style.display = 'block';
        return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display with leading zeros
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// =============================================
// FLOATING HEARTS
// =============================================
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const hearts = ['💙', '💕', '💗', '✨', '💫', '♥'];

    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = 10 + Math.random() * 10 + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.fontSize = 0.8 + Math.random() * 1.2 + 'rem';
        container.appendChild(heart);

        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 20000);
    }

    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 300);
    }

    // Continue creating hearts
    setInterval(createHeart, 2000);
}

createFloatingHearts();

// =============================================
// SCROLL REVEAL ANIMATIONS
// =============================================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to sections
document.querySelectorAll('section:not(.hero)').forEach(section => {
    section.classList.add('reveal');
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// =============================================
// ALBUM SYSTEM
// =============================================
const albums = {
    'first-date': {
        title: 'First Date',
        photos: [
            { type: 'image', src: 'first date/first date.jpg', alt: 'Our First Date' },
            { type: 'image', src: 'first date/IMG_6082.jpg', alt: 'First Date Memory' },
            { type: 'image', src: 'first date/IMG_6098.jpg', alt: 'First Date Memory' },
            { type: 'video', src: 'first date/first date.mp4', poster: 'first date/first date.jpg' }
        ]
    },
    'second-date': {
        title: '2nd Date',
        photos: [
            { type: 'image', src: '2nd date/2nd date.jpg', alt: 'Our 2nd Date' },
            { type: 'image', src: '2nd date/IMG_20241218_160401.jpg', alt: '2nd Date Memory' },
            { type: 'image', src: '2nd date/IMG_20241218_160500.jpg', alt: '2nd Date Memory' },
            { type: 'image', src: '2nd date/IMG_20241218_160514.jpg', alt: '2nd Date Memory' }
        ]
    },
    'third-date': {
        title: '3rd Date',
        photos: [
            { type: 'image', src: '3rd date/3rd date.jpg', alt: 'Our 3rd Date' },
            { type: 'image', src: '3rd date/IMG_20241226_125723.jpg', alt: '3rd Date Memory' },
            { type: 'image', src: '3rd date/IMG_20241226_132306.jpg', alt: '3rd Date Memory' },
            { type: 'image', src: '3rd date/IMG_20241226_132309.jpg', alt: '3rd Date Memory' }
        ]
    },
    'first-bday': {
        title: '1st Birthday Together',
        photos: [
            { type: 'image', src: '1st bday celeb together/nrVPdEmHejWr-1.jpg', alt: 'Birthday Celebration' },
            { type: 'image', src: '1st bday celeb together/IMG_20250118_145849.jpg', alt: 'Birthday Memory' },
            { type: 'image', src: '1st bday celeb together/IMG_9596.jpg', alt: 'Birthday Memory' },
            { type: 'image', src: '1st bday celeb together/IMG_9617.jpg', alt: 'Birthday Memory' },
            { type: 'image', src: '1st bday celeb together/NORMAL00239.jpg', alt: 'Birthday Memory' },
            { type: 'image', src: '1st bday celeb together/NORMAL00272.jpg', alt: 'Birthday Memory' },
            { type: 'image', src: '1st bday celeb together/NORMAL00311.jpg', alt: 'Birthday Memory' },
            { type: 'image', src: '1st bday celeb together/NORMAL00367.jpg', alt: 'Birthday Memory' },
            { type: 'image', src: '1st bday celeb together/NORMAL00378.jpg', alt: 'Birthday Memory' },
            { type: 'image', src: '1st bday celeb together/NORMAL00474.jpg', alt: 'Birthday Memory' },
            { type: 'image', src: '1st bday celeb together/NORMAL00478.jpg', alt: 'Birthday Memory' }
        ]
    },
    'sumo-niku': {
        title: '1st Sumo Niku',
        photos: [
            { type: 'image', src: '1st sumo niku/IMG_0051.jpg', alt: 'Sumo Niku' },
            { type: 'image', src: '1st sumo niku/IMG_0199.jpg', alt: 'Sumo Niku Memory' },
            { type: 'image', src: '1st sumo niku/IMG_0204.jpg', alt: 'Sumo Niku Memory' },
            { type: 'image', src: '1st sumo niku/NORMAL00562.jpg', alt: 'Sumo Niku Memory' },
            { type: 'image', src: '1st sumo niku/NORMAL00567.jpg', alt: 'Sumo Niku Memory' }
        ]
    },
    'moa-date': {
        title: 'MOA Date',
        photos: [
            { type: 'image', src: 'MOA date/IMG_1629.jpg', alt: 'MOA Date' },
            { type: 'image', src: 'MOA date/IMG_1820.jpg', alt: 'MOA Date Memory' },
            { type: 'image', src: 'MOA date/IMG_1832.jpg', alt: 'MOA Date Memory' },
            { type: 'image', src: 'MOA date/IMG_1844.jpg', alt: 'MOA Date Memory' },
            { type: 'image', src: 'MOA date/IMG_1850.jpg', alt: 'MOA Date Memory' }
        ]
    },
    'second-airbnb': {
        title: '2nd Airbnb',
        photos: [
            { type: 'image', src: '2nd airbnb/IMG_20250323_101415.jpg', alt: '2nd Airbnb' },
            { type: 'image', src: '2nd airbnb/IMG_20250323_101426.jpg', alt: '2nd Airbnb Memory' },
            { type: 'image', src: '2nd airbnb/IMG_20250323_135912.jpg', alt: '2nd Airbnb Memory' },
            { type: 'image', src: '2nd airbnb/IMG_20250323_135920.jpg', alt: '2nd Airbnb Memory' }
        ]
    },
    'kkv-sumo': {
        title: 'KKV + Sumo Niku',
        photos: [
            { type: 'image', src: 'KKV + Sumo niku date/IMG_20250824_121404.jpg', alt: 'KKV + Sumo Niku' },
            { type: 'image', src: 'KKV + Sumo niku date/IMG_20250824_121917.jpg', alt: 'KKV + Sumo Niku Memory' },
            { type: 'image', src: 'KKV + Sumo niku date/IMG_20250824_141229.jpg', alt: 'KKV + Sumo Niku Memory' }
        ]
    },
    'ramen-kuroda': {
        title: 'Ramen Kuroda Date',
        photos: [
            { type: 'image', src: 'Ramen Kuroda date/IMG_20250817_134826_914.jpg', alt: 'Ramen Kuroda' },
            { type: 'image', src: 'Ramen Kuroda date/IMG_20250817_134838_774.jpg', alt: 'Ramen Kuroda Memory' },
            { type: 'image', src: 'Ramen Kuroda date/IMG_20250817_141552_962.jpg', alt: 'Ramen Kuroda Memory' },
            { type: 'image', src: 'Ramen Kuroda date/IMG_20250817_153400.jpg', alt: 'Ramen Kuroda Memory' },
            { type: 'image', src: 'Ramen Kuroda date/IMG_20250817_153406.jpg', alt: 'Ramen Kuroda Memory' },
            { type: 'image', src: 'Ramen Kuroda date/IMG_20250817_153646.jpg', alt: 'Ramen Kuroda Memory' }
        ]
    },
    'silly-date': {
        title: 'Silly Date',
        photos: [
            { type: 'image', src: 'Silly date/IMG_2812.jpg', alt: 'Silly Date' },
            { type: 'image', src: 'Silly date/IMG_2836.jpg', alt: 'Silly Date Memory' },
            { type: 'image', src: 'Silly date/IMG_2868.jpg', alt: 'Silly Date Memory' },
            { type: 'image', src: 'Silly date/KAPI_SF2511150917573732811.jpg', alt: 'Silly Date Memory' },
            { type: 'image', src: 'Silly date/KAPI_SF251115091816460722.jpg', alt: 'Silly Date Memory' }
        ]
    },
    'swim-gang': {
        title: 'Swim with Gang',
        photos: [
            { type: 'image', src: 'Swim with gang/IMG_6245.jpg', alt: 'Swim with Gang' },
            { type: 'image', src: 'Swim with gang/IMG_6247.jpg', alt: 'Swim with Gang Memory' },
            { type: 'image', src: 'Swim with gang/IMG_6281.jpg', alt: 'Swim with Gang Memory' },
            { type: 'image', src: 'Swim with gang/IMG_6283.jpg', alt: 'Swim with Gang Memory' }
        ]
    },
    'second-bday': {
        title: '2nd Birthday Together',
        photos: [
            { type: 'image', src: '2nd bday celeb together/OMjaqUoJ.jpg', alt: '2nd Birthday' },
            { type: 'image', src: '2nd bday celeb together/20251130_130324.jpg', alt: '2nd Birthday Memory' },
            { type: 'image', src: '2nd bday celeb together/20251130_130334.jpg', alt: '2nd Birthday Memory' },
            { type: 'image', src: '2nd bday celeb together/20251130_130713.jpg', alt: '2nd Birthday Memory' },
            { type: 'image', src: '2nd bday celeb together/20251205_151620.jpg', alt: '2nd Birthday Memory' },
            { type: 'image', src: '2nd bday celeb together/20251205_151851.jpg', alt: '2nd Birthday Memory' },
            { type: 'image', src: '2nd bday celeb together/IMG_20251129_230136.jpg', alt: '2nd Birthday Memory' },
            { type: 'image', src: '2nd bday celeb together/IMG_20251130_065446.jpg', alt: '2nd Birthday Memory' }
        ]
    }
};

const albumModal = document.getElementById('albumModal');
const albumModalTitle = document.getElementById('albumModalTitle');
const albumPhotos = document.getElementById('albumPhotos');
const albumClose = document.getElementById('albumClose');

function openAlbum(albumId) {
    const album = albums[albumId];
    if (!album) return;

    albumModalTitle.textContent = album.title;
    albumPhotos.innerHTML = '';

    album.photos.forEach((photo, index) => {
        const item = document.createElement('div');
        item.className = 'photo-item' + (photo.type === 'video' ? ' video-item' : '');

        if (photo.type === 'video') {
            item.innerHTML = `<video src="${photo.src}" controls poster="${photo.poster}"></video>`;
        } else {
            item.innerHTML = `<img src="${photo.src}" alt="${photo.alt}" loading="lazy">`;
            item.addEventListener('click', () => openLightboxFromAlbum(album.photos, index));
        }

        albumPhotos.appendChild(item);
    });

    albumModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAlbum() {
    albumModal.classList.remove('active');
    document.body.style.overflow = '';
    // Stop any playing videos
    albumPhotos.querySelectorAll('video').forEach(v => v.pause());
}

// Album card click listeners
document.querySelectorAll('.album-card').forEach(card => {
    card.addEventListener('click', () => {
        const albumId = card.dataset.album;
        openAlbum(albumId);
    });
});

albumClose.addEventListener('click', closeAlbum);
albumModal.addEventListener('click', (e) => {
    if (e.target === albumModal) closeAlbum();
});

// =============================================
// LIGHTBOX FOR GALLERY
// =============================================
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
let currentAlbumPhotos = [];

function openLightboxFromAlbum(photos, index) {
    currentAlbumPhotos = photos.filter(p => p.type === 'image');
    const imageIndex = currentAlbumPhotos.findIndex(p => p === photos[index]);
    if (imageIndex === -1) return;

    currentImageIndex = imageIndex;
    lightboxImage.src = currentAlbumPhotos[imageIndex].src;
    lightboxImage.alt = currentAlbumPhotos[imageIndex].alt || 'Gallery Image';
    lightbox.classList.add('active');
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

function navigateLightbox(direction) {
    currentImageIndex += direction;

    if (currentImageIndex >= currentAlbumPhotos.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = currentAlbumPhotos.length - 1;
    }

    lightboxImage.src = currentAlbumPhotos[currentImageIndex].src;
    lightboxImage.alt = currentAlbumPhotos[currentImageIndex].alt || 'Gallery Image';
}

// Lightbox event listeners
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (albumModal.classList.contains('active') && e.key === 'Escape') {
        closeAlbum();
        return;
    }

    if (!lightbox.classList.contains('active')) return;

    switch (e.key) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowLeft':
            navigateLightbox(-1);
            break;
        case 'ArrowRight':
            navigateLightbox(1);
            break;
    }
});

// =============================================
// SMOOTH SCROLL FOR NAVIGATION
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =============================================
// PARALLAX EFFECT FOR HERO
// =============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');

    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// =============================================
// LOADING ANIMATION
// =============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// =============================================
// HELPER: Add photos to gallery
// Call this function to add photos dynamically
// Example: addPhotoToGallery('path/to/photo.jpg', 'Description')
// =============================================
function addPhotoToGallery(imageSrc, altText = 'Our Memory') {
    const gallery = document.getElementById('photoGallery');
    const placeholders = gallery.querySelectorAll('.placeholder');

    // Remove a placeholder if exists
    if (placeholders.length > 0) {
        placeholders[0].remove();
    }

    // Create new gallery item
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `<img src="${imageSrc}" alt="${altText}" loading="lazy">`;

    gallery.appendChild(item);

    // Reinitialize gallery for lightbox
    initGallery();
}

console.log('♥ Sean & Iya Anniversary Website Loaded ♥');
console.log('To add photos, use: addPhotoToGallery("path/to/image.jpg", "Description")');
