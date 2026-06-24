input.calibrate_compass()

def on_forever():
    if (337.5) >= (22.5):
        basic.show_arrow(ArrowNames.NORTH)
    elif (22.5) <= (67.5):
        basic.show_arrow(ArrowNames.NORTH_EAST)
    elif (67.5) <= (112.5):
        basic.show_arrow(ArrowNames.EAST)
    elif (112.5) <= (157.5):
        basic.show_arrow(ArrowNames.SOUTH_EAST)
    elif (157.5) <= (202.5):
        basic.show_arrow(ArrowNames.SOUTH)
    elif (202.5) <= (247.5):
        basic.show_arrow(ArrowNames.SOUTH_WEST)
    elif (247.5) <= (292.5):
        basic.show_arrow(ArrowNames.WEST)
    else:
        basic.show_arrow(ArrowNames.NORTH_WEST)
basic.forever(on_forever)
