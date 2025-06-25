let 動作時間 = 0
let 秒時間 = 0
basic.forever(function () {
    動作時間 = input.runningTime()
    秒時間 = Math.trunc(動作時間 / 1000)
    basic.showNumber(秒時間)
    serial.writeNumbers([動作時間, 秒時間])
})
