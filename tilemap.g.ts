// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010201020202010101010202020202010102010101020202010102010101010101020102010101010101020102020201010201020202010102010101020101010102010101010101020202010201010101010101010101010101010101010101010101010202020101010202020202010102020202010101010102010101010101010101010101010101020101010101010101020102020202010101020101010102020201020101010101010202020101010101010101020202020101010201010102020202010102010101020102010101020101010101010101020201020101010101010101010101010101010101`, img`
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
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark2], TileScale.Sixteen);
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
