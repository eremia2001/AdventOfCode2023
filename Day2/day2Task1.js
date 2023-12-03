const fs = require('fs');

let gameList ;
fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    const maxRed = 12 ; 
const maxGreen = 13 ; 
const maxBlue = 14 ;
    gameList = processFileContent(data);
    

    const toDeleteGames = gameList.filter((game) => {
       return  game.moves.some((move) => {
             if(move.blue > maxBlue)
             {
                return true
             }
             if(move.red > maxRed)
             {
                return true
             }
             if(move.green > maxGreen)
             {
                return true
             }
        })

        

    
})

const result = gameList.filter((game) => {
    return !toDeleteGames.find((toDelete) => game.gameId == toDelete.gameId )
})
//console.log(sumId(result))


     
});

function sumId(data)
{
    let sum = 0 ; 
    data.map(game => sum += parseInt(game.gameId))
    return sum
}

 






function processFileContent(data) {
    const lines = data.split('\n'); // Teilt den Text in Zeilen
    const games = lines.map(line => {
        const normalizedData = line.replace(/\r/g, ''); // Entfernt alle \r Zeichen
        if (line.trim() === '') return null; // Leerzeilen überspringen
        const parts = normalizedData.split(': '); // Trennt Spiel-ID und Daten
        const gameId = parts[0].split(' ')[1]; // Extrahiert die Spiel-ID
        const cubesData = parts[1].split('; '); // Teilt die Daten in einzelne Züge
        const moves = cubesData.map(move => {
            const cubeCounts = move.split(', ');
            const cubes = {};
            cubeCounts.forEach(cubeCount => {
                const [count, color] = cubeCount.split(' ');
                cubes[color] = parseInt(count, 10);
            });
            return cubes;
        });
        return { gameId, moves };
    }).filter(game => game !== null);
    return games;
}
module.exports = { processFileContent };



