def on_forever():
    if (337.5) >= (22.5):
        basic.show_arrow(ArrowNames.NORTH)
basic.forever(on_forever)

def on_forever2():
    if (22.5) <= (67.5):
        basic.show_arrow(ArrowNames.NORTH_EAST)
basic.forever(on_forever2)

def on_forever3():
    if (67.5) <= (112.5):
        basic.show_arrow(ArrowNames.EAST)
basic.forever(on_forever3)

def on_forever4():
    if (112.5) <= (157.5):
        basic.show_arrow(ArrowNames.SOUTH_EAST)
basic.forever(on_forever4)

def on_forever5():
    if (157.5) <= (202.5):
        basic.show_arrow(ArrowNames.SOUTH)
basic.forever(on_forever5)

def on_forever6():
    if (202.5) <= (247.5):
        basic.show_arrow(ArrowNames.SOUTH_WEST)
basic.forever(on_forever6)

def on_forever7():
    if (247.5) <= (292.5):
        basic.show_arrow(ArrowNames.WEST)
basic.forever(on_forever7)

def on_forever8():
    if (292.5) <= (337.5):
        basic.show_arrow(ArrowNames.NORTH_WEST)
basic.forever(on_forever8)
