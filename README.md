# IE Code Challenge

---

### Specifications

-   The program is a Pacman simulator where different commands are used to place Pacman at a specific location, move, turn and report current position on the grid.
-   The grid is of size **5x5** where [0,0] represents SOUTHWEST corner and [4,4] represents NORTHEAST corner.
-   Implementation is in **JavaScript** with **Node.js**, and **Jest** is used for unit testing.

### Code structure

-   `src/index.js`: implementation of main program
-   `src/Pacman.js`: implementation of Pacman class
-   `tests` directory: contains unit tests

### How to run

-   Have **Node.js** installed (tested with version 12.13).
-   Extract contents to the same directory.
-   Use a Command Line Terminal (such as Command Prompt on Windows) and navigate to that directory.
-   Run `npm i` to install required Node components.
-   Run `npm start` to start the program, and press `Ctrl+C` to stop.
-   Run `npm test` to perform unit testing.

### Commands

-   `PLACE X,Y,F` places Pacman on the grid, where `X,Y` are integers in range `[0,4]` and `F` is facing direction - one of `NORTH`, `WEST`, `SOUTH` and `EAST`. All commands cannot work until a valid `PLACE` command has been executed. Any subsequent valid `PLACE` command will place Pacman at specified location instead of creating a new Pacman instance.
-   `MOVE` moves Pacman 1 unit horizontally or vertically depending on facing direction. Any movement that can cause Pacman to fall off grid is prevented.
-   `LEFT` turns Pacman to the left without changing coordinates.
-   `RIGHT` is similar to `LEFT` but to the right instead.
-   `REPORT` prints and returns Pacman's current position in `X,Y,F` format.
-   Extra arguments are ignored.
-   Commands are case insensitive.
