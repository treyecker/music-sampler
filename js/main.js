
let albums = document.querySelectorAll(".cover");
let play = document.querySelectorAll(".player");

function hideAll() {
  play.forEach(function(el) {
    el.style.display = 'none';
  });
}

hideAll();

albums.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();

    switch (e.target.getAttribute('id')) {
      case 'lesson-cover':
        document.querySelector('#lesson-audio')
        	.style.display = 'block';
        break;
      case 'elephant-cover':
        document.querySelector('#elephant-audio')
        	.style.display = 'block';
        break;
      case 'champ-cover':
        document.querySelector('#champ-audio')
        .style.display = 'block';
        break;
      case 'forcefield-cover':
        document.querySelector('#forcefield-audio')
        .style.display = 'block';
        break;
    } // switch end

    let players = document.querySelectorAll('audio'); 
      players.forEach(function(el) {
        el.pause();
        el.currentTime = 0;
    }); //players function end

  } // click function end

}); // forEach() end
