/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

/**
 * JC lights blocks
 */
//% groups=['Effects Messages', 'Lights Messages']
//% weight=1000 color=#f9ae00 icon=""
namespace jC_Lights {

    /**
     * Sets up a radio connection on to a microbit
     * in the wall to communicate to a raspbery pi
     */
    //% block="Set up a connection with Jocelyn's wall"
    export function setWallConnection(): void {
        radio.setGroup(111)
    }

    /**
     * Sends a command to Jocelyn's wall
     */
    //% block="send message %message to Jocelyn's wall"
    export function sendWallCommand(message: string): void {
        radio.sendString(message)
    }

    /**
     * A message string to send to Jocelyn's wall.
     * Choose an effect number from 0 to 5
     * Translates to escaped JSON
     */
    //% group="Effects Messages"
    //% num.min=0 num.max=5 num.defl=3
    //% block="Effect:$effect"
    //% effect.shadow="effectNumber"
    export function doSpecialEffect(effect: number) {
        return "E" + effect
    }

    /**
     * A message string to send to Jocelyn's wall.
     * This command starts the effects demo
     * The demo cycles though all the different effects
     */
    //% group="Effects Messages"
    //% block="Effects Demo"
    export function doEffectDemo() {
        return "D"
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

    //% group="Effects Messages"
    //% block="$effect"
    //% effect.shadow="effectNumber"
    function setEffect(effect: number): number {
        return effect;
    }

    /**
     * A message string to send to Jocelyn's wall.
     */
    //% group="Lights Messages"
    //% block="Set Brightness:%brightness"
    //% brightness.min=0 brightness.max=255
    export function setBrightness(brightness: number): string {
        return "B" + brightness
    }

    /**
     * A message string to send to Jocelyn's wall.
     */
    //% group="Lights Messages"
    //% block="Set LED(s) with hue=%h saturation=%s brightness=%v||on led=$led"
    //% hue.min=0 hue.max=255
    //% saturation.min=0 saturation.max=255
    //% brightness.min=0 brightness.max=255
    //% led.min=0 led.max=29
    //% led.shadow="allOfThem"
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    export function setHSV(hue: number, saturation: number, brightness: number, led: number): string {
        return "L" + hue + 100 + saturation + 100 + brightness + 100 + toHex(led)
    }

    //% blockId=leaveUnchanged
    //% group="Lights Messages"
    //% color=#c1c1c1
    //% block="no change"
    export function unchanged(): number {
        return 666
    }

    //% blockId=allOfThem
    //% group="Lights Messages"
    //% color=#97ef98
    //% block="all of them"
    export function all(): number {
        return 255
    }

    /**
     * Convert a Number to Hexadecimal
     * Given an integer, write an algorithm to 
     * convert it to hexadecimal. For negative 
     * integer, two's complement method is used. 
     *
     * Time Complexity: O(log(n))
     * Space Complexity: O(log(n))
     *
     * toHex(26) // "1a"
     * toHex(4)  // "4"
     * toHex(-1) // "ffffffff"
     */
    function toHex(num: number): string {
        const map = "0123456789abcdef";
        let hex = num === 0 ? "0" : "";
        while (num !== 0) {
            hex = map[num & 15] + hex;
            num = num >>> 4;
        }
        return hex;
    }
}
