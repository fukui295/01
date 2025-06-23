let 動作時間 = 0
basic.forever(function () {
    動作時間 = input.runningTime()
    serial.writeLine("" + (動作時間))
})
