const readline = require('readline')
const Pacman = require('./Pacman')

// read user input and display output on terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter command for Pacman: '
})

// Pacman instance to be used in the program
const pacman = new Pacman()

// initial call to start the prompt
rl.prompt()

// infinite stream of prompt until program is terminated
rl.on('line', (line) => {
    pacman.processCommand(line)
    rl.prompt()
}).on('close', () => {
    console.log('\nExiting...')
    process.exit(0)
})
