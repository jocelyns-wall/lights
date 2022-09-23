/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

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
    //% block="send command string to Jocelyn's wall: %command"
    export function sendWallCommand(command: string): void {
        radio.sendString(command)
        serial.writeLine(command)
    }

    /**
     * A command string to send to Jocelyn's wall.
     * 0 = Rainbow
     * 1 = Rainbow with Glitter
     * 2 = Confetti
     * 3 = Moving Dot
     * 4 = Moving Stripes
     * 5 = Juggling Dots
     */
    //% help=choose an effect number to send as a string command
    //% block="EFFECT:%num"
    export function doSpecialEffect(num: number) {
        return "EFFECT:" + num
    }
}
