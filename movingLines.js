let running = true, speed = 50, decide = 0;
let notes = [261.625565, 293.66, 329.63, 349.23, 392,
             392, 349.23, 329.63, 293.66, 261.625565]

basic.forever(function () {
    input.onButtonPressed(Button.A, function () {
        speed = 100;
    })

    input.onButtonPressed(Button.B, function () {
        radio.sendNumber(0);
    })

    input.onButtonPressed(Button.AB, function () {
        running = false;
    })

    radio.onReceivedNumber(function (receivedNumber: number) {
        while (running) {
            led.enable(true);
            for (let j = 0; j <= 4; j++) {
                for (let i = 0; i <= 4; i++) {
                    basic.pause(speed);
                    led.toggle(i, j);
                }
                decide++;
                if (decide > 11) {
                    decide = 0;
                }
                music.ringTone(notes[decide]);

            }
            if (speed < 2) {
                speed = 50;
                running = false;
            }
            speed -= 2;
        }
        music.rest(20);
        led.enable(false);
        running = true;
    })
})
