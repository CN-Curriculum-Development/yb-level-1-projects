// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030303030303030303030303030203020202030303030202020202030302030303020202030302030303030303020302030303030303020302020203030203020202030302030303020303030302030303030303020202030203030301010101010101010101010101010101010101010202020101010202020202010102020202010101010102010101010101010101010101010101020101010101010101020102020202010101020101010102020201020101010101010202020104040404040404020202020404040204040402020202040402040404020402040404020404040404040404020204020404040404040404040404040404040404`, img`
. . . . . . . . . . . . . . . . 
. 2 . 2 2 2 . . . . 2 2 2 2 2 . 
. 2 . . . 2 2 2 . . 2 . . . . . 
. 2 . 2 . . . . . . 2 . 2 2 2 . 
. 2 . 2 2 2 . . 2 . . . 2 . . . 
. 2 . . . . . . 2 2 2 . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . 2 2 2 . . . 2 2 2 2 2 . 
. 2 2 2 2 . . . . . 2 . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . 2 . 2 2 2 2 . . . 2 . . . 
. 2 2 2 . 2 . . . . . . 2 2 2 . 
. . . . . . . 2 2 2 2 . . . 2 . 
. . 2 2 2 2 . . 2 . . . 2 . 2 . 
. . 2 . . . . . . . . 2 2 . 2 . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark2,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.darkGroundNorthWest1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
