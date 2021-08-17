class Jail {
    constructor(jailName) {
        this.jail = jailName;
        this.jailCellsList = [];
        this.prisonersCount = 100;
    }

    intro() {
        console.log(`Privet bratva, sveikiname atvykus i naujus namus ${this.jail} ^^`);
    }
    changeName(newJailName) {
        this.jail = newJailName;
        console.log(`Kalejimas pakeite varda i "${this.jail}".`);
    }

    addCell(beds, cellQuantity) {
        this.jailCellsList.push({ beds, cellQuantity })
    }
    addPrisoners(prisonersQuantity) {
        const freeSpace = this.freeSpace(false);

        if (prisonersQuantity > freeSpace) {
            console.log(`${this.jail} gali priimti tik ${freeSpace} nauju kaliniu.`);
        }


    }
    maxJailBeds(print = true) {
        let bedsCount = 0;

        for (const { beds, cellQuantity } of this.jailCellsList) {
            bedsCount += beds * cellQuantity;
        }

        if (print) {
            console.log(`Maksimalus kaliniu kiekis kalejime ${bedsCount}.`);
        }
        return bedsCount;
    }
    freeSpace(print = true) {
        const freeSpace = this.maxJailBeds(false) - this.prisonersCount;
        if (print) {
            console.log(`${this.jail} turi ${freeSpace} laisvu vietu.`);
        }
        return freeSpace;
    }

}
module.exports = Jail;