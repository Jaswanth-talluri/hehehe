const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Add SVG heart
    heart.innerHTML = `
        <svg viewBox="0 0 32 29.6" width="100%" height="100%">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" fill="#ff7980"/>
        </svg>
    `;

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 10 + 's';
    heart.style.opacity = Math.random();
    heart.style.transform = `scale(${Math.random()})`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);
// Set the target date and time (e.g., December 31, 2024, 23:59:59)
const targetDate = new Date('March 20, 2024 10:30:00').getTime();

function updateCountdown() {
    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the time difference in milliseconds
    const timeDifference = now -targetDate ;

    // Check if the target date has passed
    // if (timeDifference <= 0) {
    //     document.querySelector('.timer').innerHTML = '<h2>Event has started!</h2>';
    //     return;
    // }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    // const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the HTML elements with the calculated values
    document.getElementById('dayst').textContent = String(days).padStart(2, '0');
    document.getElementById('hourst').textContent = String(hours).padStart(2, '0');
    document.getElementById('mint').textContent = String(minutes).padStart(2, '0');
    // document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
let wrapper = document.getElementById('wrapper')
let glass = document.getElementById('glass')
let cancle=document.getElementById('cancle')
let back=document.getElementById('back')
let next=document.getElementById('next')
let l1=document.getElementById('l1')
document.querySelector('#wrapper').onclick = () =>{    
    glass.classList.add('glass');
    wrapper.classList.add('yes');
    cancle.style.display = "block";

    wrapper.classList.remove('not');

    
    console.log("hello");
}
document.querySelector('#cancle').onclick=()=>{
    wrapper.classList.toggle('yes');
    wrapper.classList.toggle('not');
    glass.classList.toggle('glass');
    cancle.style.display = "none";
    back.style.display = "none";
    next.style.display = "none";
    l1.classList.remove('view')
}
document.querySelector('#l1').onclick=()=>{
    l1.classList.add('view');
    back.style.display = "block";
    next.style.display = "block";


}
document.querySelector('#next').onclick=()=>{
    let selectedItem = document.querySelector('.view');
    let nextElement = selectedItem.nextElementSibling;
    selectedItem.classList.remove('view')
    nextElement.classList.add('view')
}