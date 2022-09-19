/**
 * Different effects that can happen on Jocelyn's wall
 */
enum SpecialEffect {
    Rainbow,
    //% block="Rainbow with Glitter"
    RainbowWithGlitter,
    Confetti,
    //% block="Sweeping Dot"
    Sweepingdot,
    //% block="Pulsing Stripes"
    PulsingStripes,
    //% block="Juggling Dots"
    JugglingDots,
}

function effectStr(effect: SpecialEffect): string {
    switch (effect) {
        case SpecialEffect.Rainbow: return "RAINBOW";
        case SpecialEffect.RainbowWithGlitter: return "RAINBGL";
        case SpecialEffect.Confetti: return "CONFETT";
        case SpecialEffect.Sweepingdot: return "SWEEPDT";
        case SpecialEffect.PulsingStripes: return "PSTRIPE";
        case SpecialEffect.JugglingDots: return "JUGGDOT";
    }
}

/**
 * lights blocks
 */
//% weight=1000 color=#f9ae00 icon=""
namespace jC_Lights {

    /**
     * Sets up a bluetooth radio connection with another
     * microbit within the wall.
     * The microbit communicates with a raspberry pi
     * which communicates in turn with an arduino!
     */
    //% block="Set up a connection with Jocelyn's wall"
    export function setWallConnection():void {
        radio.setGroup(111)
        serial.redirectToUSB()
    }

    /**
     * Sends a special effect to Jocelyn's wall
     * over bluetooth and serial channels
     */
    //% block="send a %effect special effect to Jocelyn's wall || for %duration seconds"
    export function specialEffect(effect: SpecialEffect, duration: number=0): void {
        const message = "EFFECT:" + effectStr(effect) + ":" + duration
        radio.sendString(message)
        serial.writeLine(message)
    }
}
