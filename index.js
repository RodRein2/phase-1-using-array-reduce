const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = Object.values(batteryBatches).reduce(function (batteryType, currentCount) {
    return batteryType + currentCount;
  }, 0);
  
  console.log(totalBatteries);