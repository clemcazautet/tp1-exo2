input.onButtonPressed(Button.A, function () {
    if (x == 0) {
        led.unplot(x, y)
        x += 5
        led.plot(x, y)
    }
    led.unplot(x, y)
    x += -1
    led.plot(x, y)
})
input.onButtonPressed(Button.B, function () {
    if (x == 4) {
        led.unplot(x, y)
        x += -5
        led.plot(x, y)
    }
    led.unplot(x, y)
    x += 1
    led.plot(x, y)
})
let x = 0
let y = 0
y = 0
y = 0
basic.forever(function () {
    led.plot(x, y)
    while (y > 0) {
        led.plot(x, y)
        basic.pause(1000)
        led.unplot(x, y)
        y += -1
        led.plot(x, y)
    }
    while (y < 4) {
        led.plot(x, y)
        basic.pause(1000)
        led.unplot(x, y)
        y += 1
        led.plot(x, y)
    }
})
