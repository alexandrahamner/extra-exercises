/* Number of People in the Bus */

function peopleOnBus (busStops){
    var people = 0;
    for(var x = 0; x < busStops.length; x++) {
        people += busStops[x][0];
        people -= busStops[x][1];
    } return people;
}

console.log("Number of People in the Bus");
console.log(peopleOnBus([[10,0],[3,5],[5,8]]));
console.log(peopleOnBus([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(peopleOnBus([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));


/* Get the Mean of an Array */

function getAverage(marks){
    var total = 0
    for (var i = 0; i < marks.length; i++) {
        total += marks[i]

    }
    return Math.floor(total / marks.length);
}

console.log("Get the Mean of an Array");
console.log(getAverage([2,2,2,2]));
console.log(getAverage([1,3,5,7,9,11,13,15,17,19]));
console.log(getAverage([1,1,1,1,1,1,1,2]));