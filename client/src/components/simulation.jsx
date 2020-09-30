import React from "react"
import Maincharacter from "./Mainchar.jsx"
import axios from "axios"
import socketIOClient from "socket.io-client"
import { id } from "../../../db/schema.js"
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
    static getDerivedStateFromProps(nextprops){
      alert("work")
      console.log(nextprops.data.Id)
      return {
    id:nextprops.data.Id
      }

    }
    componentDidMount(){
      var idSend=true
      const socket=socketIOClient(Endpoint)
      socket.on("Simulationdata",data=>{
        if(idSend){
          socket.emit('id',this.state.id)
        }
        console.log(data)
        idSend=false
      })
    }
    render() {
      return <div id="map"> 
             <Maincharacter/>
      </div>
    }
  }

  export default Simulation