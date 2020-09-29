import React from "react"
import Maincharacter from "./Mainchar.jsx"
import axios from "axios"
import socketIOClient from "socket.io-client"
const Endpoint="http://127.0.0.1:4001"

class Simulation extends React.Component {
    constructor(props){
        super(props)
        this.state={
          PsPositions:[],
          id:0,
          name:"",
          currentcharacter:""
        }
    }
    componentWillReceiveProps(){
      const socket=socketIOClient(Endpoint)
      socket.on("Simulationdata",data=>{
        socket.emit('id',this.state.id)
        console.log(data)
      })
    }
    render() {
      return <div id="map"> 
             <Maincharacter/>

      </div>
    }
  }

  export default Simulation