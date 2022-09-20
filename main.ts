input.onButtonPressed(Button.A, function () {
    jC_Lights.sendWallCommand(jC_Lights.specialEffectCommand(SpecialEffect.Rainbow))
})
input.onButtonPressed(Button.B, function () {
    jC_Lights.sendWallCommand(jC_Lights.specialEffectCommand(SpecialEffect.Sweepingdot))
})
jC_Lights.setWallConnection()
