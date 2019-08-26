let logo = document.querySelectorAll('#logo path');
//Determines the length of each path
for (let i = 0; i < logo.length; i++) {
    console.log(`${i} is ${logo[i].getTotalLength()} long`);

}