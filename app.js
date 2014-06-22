
/*var bleacon = require('bleacon');
var Estimote = require('bleacon').Estimote;
console.log(bleacon);

Estimote.discover(function(estimote){
    console.log(estimote);
});

estimote.connect(function(event) {
    console.log(event)
});

estimote.discoverServicesAndCharacteristics(function(event) {

});

estimote.readDeviceName(function(deviceName){
    console.log(deviceName);
});

var deviceName = 'estimote';
estimote.writeDeviceName(deviceName, callback);

estimote.readBatteryLevel(callback(batteryLevel));

estimote.readFirmwareRevision(callback(firmwareRevision));

estimote.readHardwareRevision(callback(hardwareRevision));
*/
 
var Bleacon = require('bleacon');

/*
var uuid = 'e2c56db5dffb48d2b060d0f5a71096e0';
var major = 0; // 0 - 65535
var minor = 0; // 0 - 65535
var measuredPower = -59; // -128 - 127 (measured RSSI at 1 meter)
Bleacon.startAdvertising(uuid, major, minor, measuredPower);
*/

Bleacon.startScanning();

console.log(Bleacon);

Bleacon.on('discover', function(bleacon) {
    console.log(bleacon);
});
