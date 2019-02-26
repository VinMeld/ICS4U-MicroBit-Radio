let counter = 0;
let acc = 0;
let speed = 1;
basic.forever(function () {

    for (let j = 0; j < 5; j++) {
        for (let i = 0; i < 5; i++) {
            basic.pause(speed);
            led.toggle(i, j);
        }
    }
    speed++;

    input.onButtonPressed(Button.A, function () {
        speed = 1;
    })

})
