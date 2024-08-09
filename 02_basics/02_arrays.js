const heros = ["alis", "piyush", "urvashi"]

const heros1 = ["hetakshi", "tushar", "bhavika"]

//heros.push(heros1)
// console.log(heros)
// console.log(heros[4][1])

//next method //

// const allheros = heros.concat(heros1) //this is a concat method
// console.log(allheros)

// const all_new_heros = [...heros, ...heros1] // (...) this is spread ,method
// console.log(all_new_heros)

const newarray = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]
let myrealarray = newarray.flat(Infinity)
console.log(myrealarray)

console.log(Array.isArray("alis")) // to check alis is there or not .isarray
console.log(Array.from("alis")) //convert a array .from
console.log(Array.from({name: "alis"})) //phela ene kevu padse kai value convert karve che nakar empty array print tase imp for interview //

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // Array.of this method is used to add multiple array//

