const countdown = document.querySelector('.countdown');
const targetDate = new Date('Dec 24, 2021, 00:00:01').getTime();
// milliseconds sine Jan 1, 1970, 00:00:00.000 GMT

const interval = setInterval(() => {
    console.log('tick');

    const now = new Date().getTime(); //get current time
    console.log(now);

    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft/(1000*60*60*24));
    console.log(days + ' days');

    const hours = Math.floor(timeLeft/(1000*60*60)%24);
    console.log(hours + ' hours')

    const minutes = Math.floor(timeLeft/(1000*60)%60);
    console.log(minutes + ' minutes')
    
    const seconds = Math.floor(timeLeft/1000%60)
    console.log(seconds + ' seconds')

    countdown.innerHTML = `
        <div><span>${days} päeva</span></div>
        <div><span>${hours} tundi</span></div>
        <div><span>${minutes} minutit</span></div>
        <div><span>${seconds} sekundit</span></div>
        `;
}, 1000);   