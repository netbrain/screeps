var _ = require("lodash");
var harvesterRole = require("harvesterRole");

var WORKER_CREEP = [WORK,MOVE,CARRY];
var FAST_WORKER_CREEP = [WORK,MOVE,MOVE,CARRY];


_.each(Game.spawns, function(spawn){
    if(spawn.canCreateCreep(FAST_WORKER_CREEP) === OK){
        spawn.createCreep(FAST_WORKER_CREEP);
        console.log("Creating fast worker");
    }else if(spawn.canCreateCreep(WORKER_CREEP) === OK){
        spawn.createCreep(WORKER_CREEP);
        console.log("Creating normal worker");
    }
})

_.each(Game.creeps, function(creep){
  harvesterRole.run(creep);
});
