module.exports = {
  run: function(creep){
        var target = creep.pos.findClosestByRange(FIND_SOURCES_ACTIVE);
        var storage = creep.pos.findClosestByRange(FIND_MY_SPAWNS);
        var total = _.sum(creep.carry);

        if(total >= creep.carryCapacity){
            for(var resourceType in creep.carry) {
            	if(creep.transfer(storage, resourceType) === ERR_NOT_IN_RANGE){
            	    creep.moveTo(storage);
            	}
            }
        }else if(target) {
            if(creep.harvest(target) === ERR_NOT_IN_RANGE) {
                creep.moveTo(target);
            }
        }

  }
};
