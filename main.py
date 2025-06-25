動作時間 = 0
秒時間 = 0

def on_forever():
    global 動作時間, 秒時間
    動作時間 = input.running_time()
    秒時間 = int(動作時間 / 1000)
    basic.show_number(秒時間)
    serial.write_numbers([動作時間, 秒時間])
basic.forever(on_forever)
