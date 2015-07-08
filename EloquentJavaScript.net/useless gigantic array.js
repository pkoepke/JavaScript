var uselessGiganticArray = [];
var iterations = 1000000;
for(var i = 0; i < iterations; i++) {
    uselessGiganticArray[i] = "This is a useless gigantic array " + i;
}

for(var i = 0; i < iterations; i++) {
    console.log(uselessGiganticArray[i]);
}