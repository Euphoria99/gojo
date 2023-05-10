burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');



burger.addEventListener('click', ()=>{
    console.log('the function triggered')
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})


//watch video
const watchVideoButton = document.getElementById('watch-video-btn');
  watchVideoButton.addEventListener('click', () => {
    const videoUrl = 'https://youtu.be/ZBXSMzVRWas';
    window.open(videoUrl, '_blank');

  });
  
//subscribe button
  const subscribeButton = document.getElementById('subscribe-btn');
  subscribeButton.addEventListener('click', () => {
    const videoUrl = 'https://www.youtube.com/@MAPPACHANNEL';
    window.open(videoUrl, '_blank');
  });


