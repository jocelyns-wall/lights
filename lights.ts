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
     * Choose an effect number from 0 to 5
     * Translates to escaped JSON
     */
    //% group="Effects Messages"
    //% num.min=0 num.max=5 num.defl=3
    //% block="EFFECT:$effect"
    //% effect.shadow="effectNumber"
    export function doSpecialEffect(effect: number) {
        return "{\"command\"\:\"effect\", \"id\"\:\"" + effect + "\"}"
    }

    /**
     * A message string to send to Jocelyn's wall.
     * This command starts the effects demo
     * The demo cycles though all the different effects
     */
    //% group="Effects Messages"
    //% block="EFFECT:DEMO"
    export function doEffectDemo() {
        return "{\"command\":\"effect\", \"id\":demo\"}"
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
    //% block="SET BRIGHTNESS:%brightness"
    //% brightness.min=0 brightness.max=255
    export function setBrightness(brightness: number): string {
        return "{\"command\":\"brightness\", \"value\":\"" + brightness + "\"}"
    }

    /**
     * A message string to send to Jocelyn's wall.
     */
    //% group="Lights Messages"
    //% block="SET HSV:hue=%h saturation=%s brightness=%v||on LED=$led on strip=$strip"
    //% hue.min=0 hue.max=255
    //% saturation.min=0 saturation.max=255
    //% brightness.min=0 brightness.max=255
    //% led.min=0 led.max=29 led.defl=0 
    //% strip.min=0 strip.max=4 strip.defl=0
    //% expandableArgumentMode="enabled"
    //% inlineInputMode=inline
    export function setHSV(hue: number, saturation: number, brightness: number, led: number = 100, strip: number = 100): string {
        return "SET HSV:" + hue + " " + saturation + " " + brightness + " " + led + " " + strip + " "
        return "{\"command\":\"hsv\", \"hue\":\"" + hue + "\"saturation\":\"" + saturation + "\"brightness\":\"" + brightness + "\"led\":\"" + led + "\"strip\":\"" + strip + "\"}"
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
    //% block="all"
    export function all(): number {
        return 666
    }
}
