const Jail = require('./Jail');

const kalejimas = new Jail('Lukiskes')

kalejimas.intro() //metodai is mazosios!!!
//Sveiki atvyke i Zona!

kalejimas.changeName('Uola')
//Kalejimas pakeite varda i "Uola"
kalejimas.changeName('Lukiskes')
//Kalejimas pakeite varda i "Uola"

kalejimas.addCell(1, 10)
kalejimas.addCell(3, 10)
kalejimas.addCell(8, 20)

kalejimas.maxJailBeds()
kalejimas.freeSpace()

kalejimas.addPrisoners(200)

// console.log(kalejimas);