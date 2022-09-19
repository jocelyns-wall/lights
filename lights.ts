
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

/**
 * Different things that can happen on Jocelyn's wall
 */
enum Happening {
    //% block="rainbow"
    "Rainbow",
    //% block="stripes"
    "Stripes"
}

/**
 * lights blocks
 */
//% weight=100 color=#f9ae00 icon=""
namespace jC_Lights {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string): String {
        return "Hello"
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
