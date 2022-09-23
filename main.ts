input.onButtonPressed(Button.A, function () {
    effect += 1
    if (effect > 6) {
        effect = 1
    }
    if (effect == 1) {
        command = jC_Lights.specialEffectCommand(SpecialEffect.Rainbow)
    } else if (effect == 2) {
        command = jC_Lights.specialEffectCommand(SpecialEffect.RainbowWithGlitter)
    } else if (effect == 3) {
        command = jC_Lights.specialEffectCommand(SpecialEffect.Confetti)
    } else if (effect == 4) {
        command = jC_Lights.specialEffectCommand(SpecialEffect.Sweepingdot)
    } else if (effect == 5) {
        command = jC_Lights.specialEffectCommand(SpecialEffect.PulsingStripes)
    } else if (effect == 6) {
        command = jC_Lights.specialEffectCommand(SpecialEffect.JugglingDots)
    }
    basic.showString("" + (effect))
})
input.onButtonPressed(Button.B, function () {
    jC_Lights.sendWallCommand(command)
})
let command = ""
let effect = 0
jC_Lights.setWallConnection()
effect = 0
