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