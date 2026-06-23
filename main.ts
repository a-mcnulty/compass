basic.forever(function () {
    if ((337.5 as any) >= (22.5 as any)) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if ((67.5 as any) <= (112.5 as any)) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if ((22.5 as any) <= (67.5 as any)) {
        basic.showArrow(ArrowNames.NorthEast)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if ((112.5 as any) <= (157.5 as any)) {
        basic.showArrow(ArrowNames.SouthEast)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # #
            . . . . .
            `)
    }
})
basic.forever(function () {
    if ((157.5 as any) <= (202.5 as any)) {
        basic.showArrow(ArrowNames.South)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            # # . # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if ((247.5 as any) <= (292.5 as any)) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if ((202.5 as any) <= (247.5 as any)) {
        basic.showArrow(ArrowNames.SouthWest)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if ((292.5 as any) <= (337.5 as any)) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            . . . . .
            `)
    }
})
