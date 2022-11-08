let luz = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    luz = input.lightLevel()
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() > 75) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
