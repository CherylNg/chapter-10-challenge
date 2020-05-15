function Game () {
    if (Pattern == 0) {
        edubitRgbBit.setPixelColor(0, 0xff0000)
        edubitRgbBit.setPixelColor(1, 0x00ff00)
        edubitRgbBit.setPixelColor(2, 0x0000ff)
        edubitRgbBit.setPixelColor(3, 0xffff00)
    } else if (Pattern == 1) {
        edubitRgbBit.setPixelColor(0, 0xffff00)
        edubitRgbBit.setPixelColor(1, 0x0000ff)
        edubitRgbBit.setPixelColor(2, 0x00ff00)
        edubitRgbBit.setPixelColor(3, 0xff0000)
    } else if (Pattern == 2) {
        edubitRgbBit.setPixelColor(0, 0xff0000)
        edubitRgbBit.setPixelColor(1, 0xffff00)
        edubitRgbBit.setPixelColor(2, 0x00ff00)
        edubitRgbBit.setPixelColor(3, 0x0000ff)
    } else if (Pattern == 3) {
        edubitRgbBit.setPixelColor(0, 0x0000ff)
        edubitRgbBit.setPixelColor(1, 0x00ff00)
        edubitRgbBit.setPixelColor(2, 0xffff00)
        edubitRgbBit.setPixelColor(3, 0xff0000)
    } else if (Pattern == 4) {
        edubitRgbBit.setPixelColor(0, 0xff0000)
        edubitRgbBit.setPixelColor(1, 0x00ff00)
        edubitRgbBit.setPixelColor(2, 0x0000ff)
        edubitRgbBit.setPixelColor(3, 0xffff00)
    } else if (Pattern == 5) {
        edubitRgbBit.setPixelColor(0, 0xffff00)
        edubitRgbBit.setPixelColor(1, 0x00ff00)
        edubitRgbBit.setPixelColor(2, 0x0000ff)
        edubitRgbBit.setPixelColor(3, 0xff0000)
    } else if (Pattern == 6) {
        edubitRgbBit.setPixelColor(0, 0x0000ff)
        edubitRgbBit.setPixelColor(1, 0x00ff00)
        edubitRgbBit.setPixelColor(2, 0xff0000)
        edubitRgbBit.setPixelColor(3, 0xffff00)
    } else if (Pattern == 7) {
        edubitRgbBit.setPixelColor(0, 0x0000ff)
        edubitRgbBit.setPixelColor(1, 0xff0000)
        edubitRgbBit.setPixelColor(2, 0x00ff00)
        edubitRgbBit.setPixelColor(3, 0xffff00)
    } else {
        edubitRgbBit.setPixelColor(0, 0xffff00)
        edubitRgbBit.setPixelColor(1, 0xff0000)
        edubitRgbBit.setPixelColor(2, 0x00ff00)
        edubitRgbBit.setPixelColor(3, 0x0000ff)
    }
    basic.pause(Duration)
    edubitRgbBit.clear()
}
input.onButtonPressed(Button.A, function () {
    Score += 2
    basic.showNumber(Score)
})
input.onGesture(Gesture.TiltLeft, function () {
    Pattern = randint(0, 8)
    Game()
})
input.onButtonPressed(Button.B, function () {
    Game()
})
let Duration = 0
let Pattern = 0
let Score = 0
basic.showIcon(IconNames.Heart)
Score = 0
basic.forever(function () {
    Duration = pins.map(
    edubitPotentioBit.readPotValue(),
    0,
    1023,
    1000,
    10000
    )
})
