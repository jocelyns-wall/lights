input.onButtonPressed(Button.A, function () {
    effect_number += 1
    effect_number = effect_number % 6
    basic.showNumber(effect_number)
})
input.onButtonPressed(Button.B, function () {
    jC_Lights.sendWallCommand(jC_Lights.doSpecialEffect(effect_number))
})
let effect_number = 0
jC_Lights.setWallConnection()
effect_number = 6
