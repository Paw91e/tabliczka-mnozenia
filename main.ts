let A = 0
let mz = 0
let B = 0
input.onButtonPressed(Button.A, function () {
    A = randint(1, 10)
    basic.showNumber(A)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    music.play(music.stringPlayable("C C5 D B E A F G ", 500), music.PlaybackMode.UntilDone)
    mz = A * B
    basic.showNumber(mz)
})
input.onButtonPressed(Button.B, function () {
    B = randint(1, 10)
    basic.showNumber(B)
})
