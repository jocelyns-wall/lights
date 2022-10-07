input.onButtonPressed(Button.A, function () {
    jC_Lights.sendWallCommand(jC_Lights.setHSV(220, 255, 255, led2))
    led2 += 1
})
input.onButtonPressed(Button.B, function () {
    jC_Lights.sendWallCommand(jC_Lights.setHSV(0, 0, 0))
})
let led2 = 0
jC_Lights.setWallConnection()
led2 = 0
