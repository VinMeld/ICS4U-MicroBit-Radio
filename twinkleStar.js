// Highly inefficient and crafty code

basic.forever(function () {
    intro();
    aPart();
    aPart();
    intro();
})

let intro = function() {
    music.playTone(Note.C, 500);
    music.rest(40);
    music.playTone(Note.C, 500);
    music.rest(40);
    music.playTone(Note.G, 500);
    music.rest(40);
    music.playTone(Note.G, 500);
    music.rest(40);
    music.playTone(Note.A, 500);
    music.rest(40);
    music.playTone(Note.A, 500);
    music.rest(40);
    music.playTone(Note.G, 1000);
    music.rest(40);
    music.playTone(Note.F, 500);
    music.rest(40);
    music.playTone(Note.F, 500);
    music.rest(40);
    music.playTone(Note.E, 500);
    music.rest(40);
    music.playTone(Note.E, 500);
    music.rest(40);
    music.playTone(Note.D, 500);
    music.rest(40);
    music.playTone(Note.D, 500);
    music.rest(40);
    music.playTone(Note.C, 1000);
    music.rest(40);
}

let aPart = function () {
    music.playTone(Note.G, 500);
    music.rest(40);
    music.playTone(Note.G, 500);
    music.rest(40);
    music.playTone(Note.F, 500);
    music.rest(40);
    music.playTone(Note.F, 500);
    music.rest(40);
    music.playTone(Note.E, 500);
    music.rest(40);
    music.playTone(Note.E, 500);
    music.rest(40);
    music.playTone(Note.D, 1000);
    music.rest(40);
}
