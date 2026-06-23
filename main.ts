basic.forever(function () {
    if ((337.5 as any) >= (22.5 as any)) {
        basic.showArrow(ArrowNames.North)
    } else if ((22.5 as any) <= (67.5 as any)) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if ((67.5 as any) <= (112.5 as any)) {
        basic.showArrow(ArrowNames.East)
    } else if ((112.5 as any) <= (157.5 as any)) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if ((157.5 as any) <= (202.5 as any)) {
        basic.showArrow(ArrowNames.South)
    } else if ((202.5 as any) <= (247.5 as any)) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if ((247.5 as any) <= (292.5 as any)) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.NorthWest)
    }
})
