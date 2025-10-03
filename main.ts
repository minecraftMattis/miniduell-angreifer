input.onButtonPressed(Button.A, function () {
    if (_symbol > 0) {
        _symbol = _symbol - 1
    } else {
        _symbol = 2
    }
})
input.onButtonPressed(Button.B, function () {
    if (_symbol < 2) {
        _symbol = _symbol + 1
    } else {
        _symbol = 0
    }
})
let _symbol = 0
_symbol = 0
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
    } else {
        basic.showIcon(IconNames.No)
    }
})
