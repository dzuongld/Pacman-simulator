// Test cases for MOVE command
const Pacman = require('../src/Pacman')

test('should not move before valid place', () => {
    const pacman = new Pacman()
    expect(pacman.initialized).toBe(false)
    pacman.processCommand('MOVE')
    expect(pacman.initialized).toBe(false)
})

test('should move if possible', () => {
    const pacman = new Pacman()
    const x = 0
    const y = 0 // there is room to move NORTH
    const f = 'NORTH'
    pacman.processCommand(`PLACE ${x},${y},${f}`)
    pacman.processCommand('MOVE')

    // only y should change after moving NORTH
    expect(pacman.x).toBe(x)
    expect(pacman.y).toBe(y + 1)
    expect(pacman.f).toBe(f)
})

test('should not move off grid', () => {
    const pacman = new Pacman()
    const x = 0
    const y = 0 // there is no room to move WEST
    const f = 'WEST'
    pacman.processCommand(`PLACE ${x},${y},${f}`)
    pacman.processCommand('MOVE')

    // x,y,f should remain the same
    expect(pacman.x).toBe(x)
    expect(pacman.y).toBe(y)
    expect(pacman.f).toBe(f)
})
