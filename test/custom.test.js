// Test cases for any combination of commands
const Pacman = require('../src/Pacman')

test('Test 1', () => {
    const pacman = new Pacman()
    pacman.processCommand('PLACE 0,0,NORTH')
    pacman.processCommand('MOVE')
    const output = pacman.processCommand('REPORT')
    expect(output).toBe('0,1,NORTH')
})

test('Test 2', () => {
    const pacman = new Pacman()
    pacman.processCommand('PLACE 0,0,NORTH')
    pacman.processCommand('LEFT')
    const output = pacman.processCommand('REPORT')
    expect(output).toBe('0,0,WEST')
})

test('Test 3', () => {
    const pacman = new Pacman()
    pacman.processCommand('PLACE 1,2,EAST')
    pacman.processCommand('MOVE')
    pacman.processCommand('MOVE')
    pacman.processCommand('LEFT')
    pacman.processCommand('MOVE')
    const output = pacman.processCommand('REPORT')
    expect(output).toBe('3,3,NORTH')
})
