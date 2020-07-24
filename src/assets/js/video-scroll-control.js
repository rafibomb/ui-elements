const videoScroll = document.getElementById("videoScrollWrapper");

if (videoScroll) {
  var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 1000,
    // get page height from video duration
    setHeight = document.getElementById("videoScrollWrapper"),
    // select video element
    vid = document.querySelector('.video-scroll-wrapper video');

  // dynamically set the page height according to video length
  vid.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
  });


  // Use requestAnimationFrame for smooth playback
  function scrollPlay(){
    var frameNumber  = window.pageYOffset/playbackConst;
    vid.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);
  }

  window.requestAnimationFrame(scrollPlay);
}

const videoScrollTexts = document.querySelectorAll('.video-scroll-content-container');
const options = {
  root: document.querySelector('.section')
};

let observer = new IntersectionObserver((entries, options)=> {
  console.log(entries)

  entries.forEach(function(entry, index) {
    if (entry.intersectionRatio > 0) {
      console.log(entry.target, `Section ${index} is intesecting!`);
      entry.target.classList.add('in-viewport');
      entry.target.classList.remove('is-moving-out');
    } else {
      console.log(entry.target, `Section ${index} is lost in space!`);
      entry.target.classList.remove('in-viewport');
      entry.target.classList.add('is-moving-out');
    }
  });
});

observer.observe(videoScrollTexts[0]);



// console.assert(isInViewport(videoScrollTexts[0]), 'Not in viewport')

// videoScrollTexts.forEach((text, index)=> {
//   const textStyles = getComputedStyle(text);
//   const heights = textStyles.height;
//   console.log(heights, index);
//
//   window.addEventListener('scroll', (e)=> {
//     let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
//     if (scrollTop > heights) {
//       text.classList.add('is-moving-out');
//       text.classList.remove('in-viewport');
//     } else {
//       text.classList.remove('is-moving-out');
//       text.classList.add('in-viewport');
//     }
//   });
//
// });

// window.addEventListener('scroll', (e)=> {
//   videoScrollTexts.forEach((text, index)=> {
//     if (text.scrollTop === element.clientHeight) {
//       text.classList.remove('is-moving-out');
//     } else {
//       text.classList.add('is-moving-out');
//     }
//   });
// });

videoScrollTexts.forEach((text, index)=> {
  // text[0].classList.add('is-visible');
  // document.addEventListener('scroll', ()=> {
  //   if (isInViewport(text)) {
  //     text.classList.add('is-visible');
  //   } else {
  //     text.classList.remove('is-visible');
  //   }
  // });
});

// console.error()
// console.assert(p.classList.contains('ouch'), 'You are incorrect sir!');
// console.info()
// console.dir()
// console.count()

// console.time('fetching data');
  // your code
// console.timeEnd('fetching data');
// monitorEvents(elm , ['click']);

// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
