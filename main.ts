basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.lightLevel() > 75) {
        basic.showIcon(IconNames.Yes)
        music.playMelody("C5 - G E A E - E ", 120)
        basic.showString("Si")
    } else {
        basic.showIcon(IconNames.No)
        basic.showString("No")
    }
})
