// Test cases for PLACE command
const Pacman = require('../src/Pacman')

test('should not place with invalid arguments', () => {
    const pacman = new Pacman()
    expect(pacman.initialized).toBe(false)
    pacman.processCommand('PLACE abc,1.5,')
    expect(pacman.initialized).toBe(false)
})

test('should not place with invalid coordinates', () => {
    const pacman = new Pacman()
    expect(pacman.initialized).toBe(false)
    pacman.processCommand('PLACE -1,-1,NORTH')
    expect(pacman.initialized).toBe(false)
})

test('should place with valid arguments', () => {
    const pacman = new Pacman()
    expect(pacman.initialized).toBe(false)
    pacman.processCommand('PLACE 0,0,SOUTH')
    expect(pacman.initialized).toBe(true)
})
