// Test cases for REPORT command
const Pacman = require('../src/Pacman')

test('should not report before valid place', () => {
    const pacman = new Pacman()
    expect(pacman.initialized).toBe(false)
    const output = pacman.processCommand('REPORT')
    expect(output).toBeUndefined()
})

test('should report correct position', () => {
    const pacman = new Pacman()
    const x = 0
    const y = 0
    const f = 'NORTH'
    pacman.processCommand(`PLACE ${x},${y},${f}`)
    const output = pacman.processCommand('REPORT')
    expect(output).toBe(`${x},${y},${f}`)
})
