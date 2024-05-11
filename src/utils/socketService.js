import io from 'socket.io-client'
// let IP_ADDRESS="10.135.9.84"
import AppConfig from './config'
let IP_ADDRESS=AppConfig().apiUrl

const SOCKET_URL = `${IP_ADDRESS}`
let SOCKET_URL_BIDING = `${IP_ADDRESS}v2/biding`
export const socketBiding = io(SOCKET_URL_BIDING)
let SOCKET_URL_BOOKING = `${IP_ADDRESS}v2/booking`
export const socketBooking = io(SOCKET_URL_BOOKING)

class WSService {

    initializeSocket = async () => {
        try {

            this.socket = io(SOCKET_URL, {
                transports: ['websocket']
            })
            console.log("initializing socket")

            this.socket.on('connect', (data) => {
                console.log("=== socket connected ====")
            })

            this.socket.on('disconnect', (data) => {
                console.log("=== socket disconnected ====")
            })
            // this.socket.on("connect_error", (error) => {
            //     console.log("Socket Error", error);
            //   });
            this.socket.on('error', (data) => {
                console.log("socekt error", data)
            })

        } catch (error) {
            console.log("scoket is not inialized", error)
        }
    }

    emit(event, data = {}) {
        this.socket.emit(event, data)
    }
    
    on(event, cb) {
        this.socket.on(event, cb)
    }

    removeListener(listenerName) {
        this.socket.removeListener(listenerName)
    }

}


export const socketServcies = new WSService()

