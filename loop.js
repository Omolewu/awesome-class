// For Loop Sytax
// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// let i = 0;
// for (; ;) {
//     if (i == 10) {
//         break;
//     }
//     document.getElementById("loop").innerHTML += i + "<br>";
//     i++
// }

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < nums.length; i++) {
//     if (i == 3) {
//         document.getElementById("loop").innerHTML += 'Unlucky number' + "<br>";

//     }
//     else {
//         document.getElementById("loop").innerHTML += nums[i] + "<br>";
//     }
// }

// Skip Odd Numbers

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 != 0) {
//         continue;
//         //  document.getElementById("loop").innerHTML += i + "<br>";
//     }
//     else {
//         document.getElementById("loop").innerHTML += i + "<br>";
//     }
// }
// Arrays inside arrays
// const names = [['John', 'Doe'], ['Mary', 'Jane'], ['Bob', 'Smith'], ['Sue', 'Jones']];
// for (let i = 0; i < names.length; i++) {
//     document.getElementById("loop").innerHTML += names[i] + "<br>";
//     for (let k = 0; k < names[i].length; k++) {
//         document.getElementById("loop").innerHTML += names[i][k] + "<br>";
//     }
// }

const playlist = {
    author: "Samuel",
    title: "javascript songs",
    songs: [
        { title: 'ayo', artists: ['Big Wiz', 'Davido'], duration: 3.9 },
        { title: 'Ade', artists: ['yello'], duration: 5.9 },
        { title: 'Ojo', artists: ['orange', 'pepper'], duration: 5.9 },


    ]
}
let totalduration = 0;
let totalartists = 0;
let text = "";
// for (let i = 0; i < playlist['songs'].length; i++) {
//     totalduration += playlist['songs'][i]['duration']
//     // console.log(playlist['songs'][i]['duration'])
// }
for (let i in playlist['songs']) {
    totalduration += playlist['songs'][i]['duration'];
    totalartists += playlist['songs'][i]['artists'].length;
    text += playlist['songs'][i]['artists'].toString() + " ";
}
console.log(totalduration);
console.log(totalartists);
console.log(text)

// console.log(playlist.songs)
//console.log(playlist['songs'])