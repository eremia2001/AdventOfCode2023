const fs = require('fs');
const { processFileContent } = require('./day2Task1'); // Ersetzen Sie 'pfad-zur-datei' mit dem tatsächlichen Pfad


let gameList ;
fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    gameList = processFileContent(data);

   const powerColors =  gameList.map((game) => {
        let maxBlue  = 0; 
        let maxRed = 0; 
        let maxGreen = 0; 

            // maxBlue =   game.moves.find((cube) => cube.blue ? cube.blue > maxBlue : false )
            // maxGreen +=   game.moves.find((cube) => cube.green > maxGreen )
            // maxBlue +=   game.moves.find((cube) => cube.red > maxRed )

            game.moves.map((move) => {
              maxBlue =   move.blue ? move.blue > maxBlue ? move.blue : maxBlue : maxBlue
              maxGreen =   move.green ? move.green > maxGreen ? move.green : maxGreen : maxGreen
              maxRed =   move.red ? move.red > maxRed ? move.red : maxRed : maxRed
            })

            return ( {
                power : maxBlue * maxGreen * maxRed
         
            })

    })

    let result = 0;
    powerColors.map((game) => result += game.power)
    console.log(result)

})
