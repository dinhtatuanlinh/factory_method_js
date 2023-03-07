class Car {
    constructor(doors = 6, price = '100 000vnd', name= 'truck 10', customerInfo= {}){
        this.doors = doors
        this.price = price
        this.name = name
        this.customerInfo = customerInfo
    }
}

class ServiceLogictics{
    transportClass = Car
    getTransport = (customerInfo)=>{
        return new this.transportClass(customerInfo)
    }
}

const carService = new ServiceLogictics()
console.log(carService.getTransport({customerInfo: {name: "linh", cargoVolume: "100kg"}}));
// cach 1
class Truck {
    constructor({name = 'ford 2023', doors = 4, price = '10vnd', customerInfo= {}}){
        this.name = name
        this.doors = doors
        this.price = price
        this.customerInfo = customerInfo
    }
}

carService.transportClass = Truck
console.log(carService.getTransport({customerInfo: {name: "linh1", cargoVolume: "1000kg"}}));

// cach 2
class TruckService extends ServiceLogictics{
    transportClass = Truck
}


const truckService = new TruckService()
console.log(truckService.getTransport({customerInfo: {name: "linh2", cargoVolume: "10000kg"}}));

// ################################################
function Ship({name, load, price, customerInfo}){
    this.name = name ?? "ship"
    this.load = load ?? 1000
    this.price = price ?? '1000 000 vnd'
    this.customerInfo = customerInfo ?? {}
}
function Boat({name, load, price, customerInfo}){
    this.name = name ?? "boat"
    this.load = load ?? 100
    this.price = price ?? '100 000 vnd'
    this.customerInfo = customerInfo ?? {}
}

function SerLog(){
    this.vehical
    this.getTransport = function (customerInfo){
        return new this.vehical(customerInfo)
    }
}
const serLog = new SerLog()
// console.log(serLog.getTransport({customerInfo: {name: "linh", cargoVolume: "100kg"}}));

// cach 1
serLog.vehical = Boat
console.log(serLog.getTransport({customerInfo: {name: "linh", cargoVolume: "100kg"}}));
// cach 2
function BoatService(){
    SerLog.vehical = Boat
}
BoatService.prototype = new SerLog()
let BS = new BoatService()
console.log(BS.getTransport({customerInfo: {name: "linh", cargoVolume: "10kg"}}));