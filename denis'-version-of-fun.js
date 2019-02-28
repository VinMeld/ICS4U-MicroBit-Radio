let speed = 0;
let freak = false;
let acc = 0;
let counter = 0;
acc = 0;
freak = true;
speed = 50;
basic.forever(function () {
    input.onButtonPressed(Button.A, function () {
        speed = 50;
    })
    input.onButtonPressed(Button.B, function () {
        radio.sendNumber(0);
    })
    radio.onReceivedNumber(function (receivedNumber: number) {
        while (freak) {
            led.enable(true);
            for (let j = 0; j <= 4; j++) {
                for (let i = 0; i <= 4; i++) {
                    basic.pause(speed);
                    led.toggle(i, j);
                }
                counter++;
            }
            if (speed < 0.01) {
                speed = 50;
                freak = false;
            }
            speed = speed/1.2;
        }
        led.enable(false);
        freak = true;
    })
})
