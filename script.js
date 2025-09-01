// Ship class
function Ship(length) {
    return {
        length: length,
        hits: 0,
        hassunk: false,

        hit() {
            this.hits++;
        },

        isSunk() {
            return this.hits == this.length;
        },
    };
}

// Gameboard class (need to write tests, setup jest and script.test.js files)
