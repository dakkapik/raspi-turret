let piblaster
if(process.platform === 'linux') piblaster = require("pi-blaster.js")

const { io } = require("socket.io-client")


const socket = io ("http://192.168.0.210:5000")

socket.on("connect",() => {
    socket.emit("purpose", "turret")
})

// piblaster 180 degree for servo is 0.06 - 0.24
socket.on("turret-pos", ( pos ) => {
    // pin 4 is yaw
    piblaster.setPwm(4, pos.x)
    // pin 17 is roll
    // piblaster.setPwm(17)
})