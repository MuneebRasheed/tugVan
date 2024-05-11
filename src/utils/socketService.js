import io from 'socket.io-client'
const IP_ADDRESS="192.168.34.168"

const SOCKET_URL = `http://${IP_ADDRESS}:8080`
const SOCKET_URL_BIDING = `http://192.168.34.168:8080/v2/biding`
export const socketBiding = io(SOCKET_URL_BIDING)
const SOCKET_URL_BOOKING = `http://192.168.34.168:8080/v2/booking`
export const socketBooking = io(SOCKET_URL_BOOKING)

class WSService {

    initializeSocket = async () => {
        try {

            this.socket = io(SOCKET_URL, {
                transports: ['websocket']
            })
            console.log("initializing socket", this.socket)

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

