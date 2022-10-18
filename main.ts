basic.showIcon(IconNames.Happy)
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.pause(4000)
basic.clearScreen()
basic.forever(function () {
    basic.pause(100)
    basic.showIcon(IconNames.Angry)
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(1000)
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(750)
})
