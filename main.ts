input.onButtonPressed(Button.B, function () {
	
})
let _symbol = 0
basic.forever(function () {
    if (_symbol == 0) {
        basic.showIcon(IconNames.Sword)
    } else if (_symbol == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            . # # # .
            . # # # .
            . . # . .
            `)
    } else if (_symbol == 2) {
        basic.showIcon(IconNames.Heart)
    }
})
