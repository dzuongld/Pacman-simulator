const directions = ['NORTH', 'WEST', 'SOUTH', 'EAST']
const LOWER_BOUND = 0
const UPPER_BOUND = 4
const uninitializedError = 'Pacman not initialized!\n'

class Pacman {
    constructor() {
        this.initialized = false // if pacman has been placed correctly
        this.x = -1 // X coordinate
        this.y = -1 // Y coordinate
        this.f = null // facing direction
    }

    // handle PLACE X,Y,F command
    place(command) {
        if (!this.validatePlaceCommand(command))
            return console.error('Invalid PLACE command. Please try again.\n')

        // initialize Pacman and assign values to x,y,f after a valid PLACE command
        const [x, y, f] = this.validatePlaceCommand(command)
        this.initialized = true
        this.x = x
        this.y = y
        this.f = f
        console.log(`Pacman has been placed at [${x},${y}] and facing ${f}\n`)
    }

    // helper function for place()
    validatePlaceCommand(command) {
        // check if argument parsed in has the right format
        if (!command) return null
        const commandArgs = command.split(',')
        if (commandArgs.length !== 3) return null

        // check if x,y,f have acceptable values
        const x = Number.parseInt(commandArgs[0])
        const y = Number.parseInt(commandArgs[1])
        const f = commandArgs[2].toUpperCase()

        const invalidX =
            Number.isNaN(x) ||
            !Number.isInteger(x) ||
            x > UPPER_BOUND ||
            x < LOWER_BOUND
        const invalidY =
            Number.isNaN(y) ||
            !Number.isInteger(y) ||
            y > UPPER_BOUND ||
            y < LOWER_BOUND
        const invalidF = !directions.includes(f)

        if (invalidX || invalidY || invalidF) return null
        return [x, y, f]
    }

    // handle MOVE command
    move() {
        if (!this.initialized) return console.error(uninitializedError)

        const direction = this.f
        let hasMoved = true

        // change coordinates if possible
        if (direction === 'NORTH' && this.y < UPPER_BOUND) this.y++
        else if (direction === 'WEST' && this.x > LOWER_BOUND) this.x--
        else if (direction === 'SOUTH' && this.y > LOWER_BOUND) this.y--
        else if (direction === 'EAST' && this.x < UPPER_BOUND) this.x++
        else hasMoved = false

        if (hasMoved) console.log(`Pacman is now at [${this.x},${this.y}]\n`)
        else console.error('Pacman cannot move!\n')
    }

    // handle LEFT and RIGHT commands
    turn(isLeft) {
        if (!this.initialized) return console.error(uninitializedError)

        // find index of current direction in the array
        let fIndex = directions.indexOf(this.f)
        // assign new index depending on turning side
        fIndex = isLeft ? fIndex + 1 : fIndex - 1
        // wrap around if out of bound
        if (fIndex > 3) fIndex = 0
        if (fIndex < 0) fIndex = 3

        // assign new direction based on new index
        const direction = directions[fIndex]
        this.f = direction
        console.log(`Pacman is now facing ${direction}\n`)
    }

    // handle REPORT command
    report() {
        if (!this.initialized) return console.error(uninitializedError)

        const position = `${this.x},${this.y},${this.f}`
        console.log(position + '\n')
        return position
    }

    // to be called externally
    processCommand(line) {
        const command = line.trim().split(' ')
        const commandName = command[0].toUpperCase()

        switch (commandName) {
            case 'PLACE':
                this.place(command[1])
                break
            case 'MOVE':
                this.move()
                break
            case 'LEFT':
                this.turn(true)
                break
            case 'RIGHT':
                this.turn(false)
                break
            case 'REPORT':
                return this.report() // retrieve the string output
            default:
                console.log(`Invalid command. Please try again.\n`)
                break
        }
    }
}

module.exports = Pacman
