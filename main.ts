input.onButtonPressed(Button.A, function () {
    effect = effect % 5
    basic.showNumber(effect)
    effect += 1
})
input.onButtonPressed(Button.B, function () {
    jC_Lights.sendWallCommand(jC_Lights.doSpecialEffect(effect))
})
let effect = 0
jC_Lights.setWallConnection()
effect = 0
