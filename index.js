// Write your code here!

let m1 = document.querySelector("main#main");
m1.remove();

let new_header = document.createElement('h1');
document.body.appendChild(new_header);
new_header.id = "victory";

;