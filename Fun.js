let freak = true;
let speed = 1;
let acc = 0;
let counter = 0

basic.forever(function () {
    input.onButtonPressed(Button.A, function () {
        speed = 1;
    })

    input.onButtonPressed(Button.B, function () {
        radio.sendNumber(0);
    })
    
    radio.onReceivedNumber(function (receivedNumber: number) {
        while (freak) {
            for (let j = 0; j <= 4; j++) {
                for (let i = 0; i <= 4; i++) {
                    basic.pause(speed);
                    led.toggle(i, j);
                }
                counter++;
            }
            if (speed > 50) {
                speed = 0;
                freak = false;
            }
            speed++;
        }
        led.enable(false);
    })
})
