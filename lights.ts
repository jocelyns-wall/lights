/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

/**
 * JC lights blocks
 */
//% groups=['Messages']
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
     * 0 = Rainbow
     * 1 = Rainbow with Glitter
     * 2 = Confetti
     * 3 = Moving Dot
     * 4 = Moving Stripes
     * 5 = Juggling Dots
     */
    //% group="Messages"
    //% num.min=0 num.max=5 num.defl=3
    //% block="EFFECT:%num"
    export function doSpecialEffect(num: number) {
        return "EFFECT:" + num
    }

    /**
      * Get the effect for a tennis effect
      * @param effect eg: 1
      */
    //% blockId=effectNumber block="$effect"
    //% blockHidden=true
    //% colorSecondary="#FFFFFF"
    //% effect.fieldEditor="numberdropdown" effect.fieldOptions.decompileLiterals=true
    //% effect.fieldOptions.data='[["Love", 1], ["15", 2], ["30", 3], ["40", 4], ["Game", 5]]'
    export function __effectNumber(effect: number): number {
        return effect;
    }

    /**
     * set game effect $effect
     */
    //% block="$effect"
    //% effect.shadow="effectNumber"
    export function setScore(effect: number): number {
        return effect;
    }

}
