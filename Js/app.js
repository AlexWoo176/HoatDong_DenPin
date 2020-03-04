let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        return this.energy;
    };
    this.decreaseEnergy =function () {
        if(this.energy > 0){
            this.energy--;
        }
    }
}
let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getInfoBattery = function () {
        return this.battery.getEnergy();
    };

    this.light = function () {
        if(this.status){
            alert("lighting");
        }else{
            alert("Not Lighting");
        }
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    }
}

let battery = new Battery();
battery.setEnergy(Math.floor(Math.random()*50)+50);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);
document.write("Battery info:" + flashLamp.getInfoBattery() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getInfoBattery() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();