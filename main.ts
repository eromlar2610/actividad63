let b = 0
basic.forever(function () {
    b = 225 - input.lightLevel()
    led.setBrightness(255)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
