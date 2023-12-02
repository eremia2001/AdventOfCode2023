const fs = require('fs');

fs.readFile('./data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    processFileContent(data);
});



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
    console.log(games)
}
