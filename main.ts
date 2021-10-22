let a = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    a = pins.digitalReadPin(DigitalPin.P1)
    if (a) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
})
