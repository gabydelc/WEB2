
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

// the code below wil allow you to click the play and stop button with the mouse
          $('.play-button').click(function () { 
              songElement.play();
          });


          $('.pause').click(function () {
              songElement.pause();
          });
      });