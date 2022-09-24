/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

/**
 * JC lights blocks
 */
//% groups=['Messages', 'Constants']
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
    //% block="send message %message to Jocelyn's wall"
    export function sendWallCommand(message: string): void {
        radio.sendString(message)
        serial.writeLine(message)
    }

    /**
     * A message string to send to Jocelyn's wall.
     */
    //% group="Messages"
    //% num.min=0 num.max=5 num.defl=3
    //% block="EFFECT:$effect"
    //% effect.shadow="effectNumber"
    export function doSpecialEffect(effect: number) {
        return "EFFECT:" + effect
    }

    /**
      * The currently available lighting effects
      * @param effect eg: 0
      */
    //% blockId=effectNumber block="$effect"
    //% blockHidden=true
    //% colorSecondary="#FFFFFF"
    //% effect.fieldEditor="numberdropdown" effect.fieldOptions.decompileLiterals=true
    //% effect.fieldOptions.data='[["Rainbow", 0], ["Rainbow Glitter", 1], ["Confetti", 2], ["Moving Dot", 3], ["Moving Stripes", 4], ["Juggling Dots", 5]]'
    export function __effectNumber(effect: number): number {
        return effect;
    }

    //% group="Constants"
    //% block="$effect"
    //% effect.shadow="effectNumber"
    export function setScore(effect: number): number {
        return effect;
    }
}
