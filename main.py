heading = 0

def on_forever():
    global heading
    heading = input.compass_heading()
    if heading < 23 or heading >= 338:
        basic.show_arrow(ArrowNames.NORTH)
    elif heading < 68:
        basic.show_arrow(ArrowNames.NORTH_EAST)
    elif heading < 113:
        basic.show_arrow(ArrowNames.EAST)
    elif heading < 158:
        basic.show_arrow(ArrowNames.SOUTH_EAST)
    elif heading < 203:
        basic.show_arrow(ArrowNames.SOUTH)
    elif heading < 248:
        basic.show_arrow(ArrowNames.SOUTH_WEST)
    elif heading < 293:
        basic.show_arrow(ArrowNames.WEST)
    else:
        basic.show_arrow(ArrowNames.NORTH_WEST)
basic.forever(on_forever)
