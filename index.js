// Code your solution in this file!
function distanceFromHqInBlocks(location){
  const hq = 42
  const noOfBlock = location<42 ? hq - location : location - hq;
  return noOfBlock
}
function distanceFromHqInFeet(location){
const feetperBlock = 264
const noOfFeet = distanceFromHqInBlocks(location) * feetperBlock
return noOfFeet
}
function distanceTravelledInFeet(start, end){
    const feetperBlock = 264
    const distanceInFeet = end < start ? (start - end) * feetperBlock : (end - start) * feetperBlock
   return distanceInFeet;
}
function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start,destination)
    if(feet < 400){
        return 0
    }
    else if (feet >=400 && feet <=2000){
        const newFeet = feet -400;
        const cents = 0.02
        const price = newFeet * cents
        return price
    }
    else if (feet >2000 && feet <2500){
        const dollars = 25
        return dollars 
    }
    else if (feet >2500){
        return 'cannot travel that far'
    }
}