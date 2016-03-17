
var playBtn = document.getElementById('play');
var stopBtn = document.getElementById('stop');

var playSound = function() {
  audio.play();
};

//segundo sonido - play

playBtn.addEventListener('click', playSound, false);
stopBtn.addEventListener('click', function(){song.pause()}, false);



  $(document).ready(function () {
          var songElement = document.createElement('song');
          audioElement.setAttribute('src', 'wakenbake.mp3');
          audioElement.setAttribute('autoplay:false', 'autoplay');
          //audioElement.load code above. if you take out :false from the code the file will auto play than everythin works the same after that()
          $.get();
          songElement.addEventListener("load", function () {
              songElement.play();
          }, true);


          $(document).keypress(function (e) {
              if (e.which == 13) { //press enter the audio will play
                  songElement.play();

              } else if (e.which == 32) { //press spacebar the audio will                             pause play
                  songElement.pause();
              }
          });

// the code below wil allow you to click the play and stop button with the mouse
          $('.play-button').click(function () { 
              songElement.play();
          });


          $('.pause').click(function () {
              songElement.pause();
          });
      });