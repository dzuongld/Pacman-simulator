// Test cases for LEFT and RIGHT commands
const Pacman = require('../src/Pacman')

test('should not turn before valid place', () => {
    const pacman = new Pacman()
    expect(pacman.initialized).toBe(false)
    pacman.processCommand('LEFT')
    expect(pacman.initialized).toBe(false)
})

test('should face WEST after turning LEFT when facing NORTH', () => {
    const pacman = new Pacman()
    const x = 0
    const y = 0
    const f = 'NORTH'
    pacman.processCommand(`PLACE ${x},${y},${f}`)
    pacman.processCommand('LEFT')

    // only f should change after turning LEFT
    expect(pacman.x).toBe(x)
    expect(pacman.y).toBe(y)
    expect(pacman.f).toBe('WEST')
})

test('should face SOUTH after turning RIGHT when facing EAST', () => {
    const pacman = new Pacman()
    const x = 0
    const y = 0
    const f = 'EAST'
    pacman.processCommand(`PLACE ${x},${y},${f}`)
    pacman.processCommand('RIGHT')

    // only f should change after turning RIGHT
    expect(pacman.x).toBe(x)
    expect(pacman.y).toBe(y)
    expect(pacman.f).toBe('SOUTH')
})
