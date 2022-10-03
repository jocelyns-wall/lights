input.onButtonPressed(Button.A, function () {
    do_brightness = true
})
input.onButtonPressed(Button.B, function () {
    do_brightness = false
})
let do_brightness = false
jC_Lights.setWallConnection()
do_brightness = false
loops.everyInterval(100, function () {
    if (do_brightness == true) {
        jC_Lights.sendWallCommand(jC_Lights.setBrightness(Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 255)))
    }
})
