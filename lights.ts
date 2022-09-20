/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

/**
 * Different special effects that can happen on Jocelyn's wall
 */
enum SpecialEffect {
    Rainbow,
    //% block="Rainbow with Glitter"
    RainbowWithGlitter,
    //% block="Confetti"
    Confetti,
    //% block="Sweeping Dot"
    Sweepingdot,
    //% block="Pulsing Stripes"
    PulsingStripes,
    //% block="Juggling Dots"
    JugglingDots
}


/**
 * JC lights blocks
 */
//% weight=1000 color=#f9ae00 icon=""
namespace jC_Lights {

    /**
     * A serial connection and a bluetooth connection
     * are both set up to allow the microbit to
     * communicate to a raspbery pi in the wall.
     */
    //% block="Set up a connection with Jocelyn's wall"
    export function setWallConnection():void {
        radio.setGroup(111)
        serial.setBaudRate(BaudRate.BaudRate9600)
    }

    /**
     * Sends a command to Jocelyn's wall
     * over bluetooth and serial channels
     */
    //% help=functions/command
    //% block="send a command to Jocelyn's wall: %command"
    export function sendWallCommand(command: string): void {
        radio.sendString(command)
        serial.writeLine(command)
    }

    /**
     * Translates a special effect into a command string
     */
    //% help=functions/specialEffect
    //% block="show a %effect special effect"
    export function specialEffectCommand(effect: SpecialEffect): string {
        switch (effect) {
            case SpecialEffect.Rainbow: return "EFFECT:RAINBOW";
            case SpecialEffect.RainbowWithGlitter: return "EFFECT:RAINBGL";
            case SpecialEffect.Confetti: return "EFFECT:CONFETT";
            case SpecialEffect.Sweepingdot: return "EFFECT:SWEEPDT";
            case SpecialEffect.PulsingStripes: return "EFFECT:PSTRIPE";
            case SpecialEffect.JugglingDots: return "EFFECT:JUGGDOT";
        }
    }
}
