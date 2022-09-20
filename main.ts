input.onButtonPressed(Button.A, function () {
    myhand += 1
    if (myhand == 4) {
        myhand = 3
    }
    if (myhand == rockindex) {
        rockimage.showImage(0)
    } else if (myhand == paperindex) {
        paperimage.showImage(0)
    } else if (myhand == scissorsindex) {
        scissorsimage.showImage(0)
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    myhand += -1
    if (myhand == 0) {
        myhand = 1
    }
    if (myhand == rockindex) {
        rockimage.showImage(0)
    } else if (myhand == paperindex) {
        paperimage.showImage(0)
    } else if (myhand == scissorsindex) {
        scissorsimage.showImage(0)
    } else {
    	
    }
})
input.onGesture(Gesture.Shake, function () {
    pickshape()
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1432, 2972, 130, 113, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
function pickshape () {
    let choice = 0
    myhand = choice
}
let myhand = 0
let scissorsimage: Image = null
let paperimage: Image = null
let rockimage: Image = null
let scissorsindex = 0
let paperindex = 0
let rockindex = 0
radio.setGroup(203)
rockindex = 1
paperindex = 2
scissorsindex = 3
rockimage = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
paperimage = images.createImage(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
scissorsimage = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)
basic.forever(function () {
	
})
