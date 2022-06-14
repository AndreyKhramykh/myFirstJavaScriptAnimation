let text = document.getElementById('txt');

let p1 = 'Wake up, Neo...'

let p2 = 'The Matrix has you...'

let p3 = 'Do you want to know how deep is the Rabbit Hole?.. yes/no'

let empty = '';

// поиграться со значениями --animeTime и таймера в setTimeout для отладки корректной работы анимации


function dialog() {
	text.innerHTML = p1;

	setTimeout( () => {
		text.innerHTML = empty;
    }, 12000);

    setTimeout( () => {
        text.innerHTML = p2;
        text.style.setProperty('--width', '280px');
        text.style.setProperty('--animeTime', '10s')
    }, 14000);

    setTimeout( () => {
        text.innerHTML = empty;
    }, 22000);

    setTimeout( () => {
        text.style.setProperty('--animeTime', '20s')
        text.innerHTML = p3;
        text.style.setProperty('--width', '760px');
        text.style.setProperty('--animeSteps', 'steps(50)')
        // text.style.setProperty('--animeDelay', '0s')
    }, 24000)
}

dialog()