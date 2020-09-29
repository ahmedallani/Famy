import React from "react"
import ReactDOM from 'react-dom'
import Login from "./components/login.jsx"
import Signup from "./components/signup.jsx"
import Shop from "./components/shop.jsx"
import Simulation from "./components/simulation.jsx"
import NavBar from "./components/navbar.jsx"
import Logo from "./components/logo.jsx"
import Signup0 from "./components/signup0.jsx"
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
          ID:"",
          userdata:{},
          displaynavbar:false,
          displaylogin:false,
          displaysignup:true,
          displayshop:false,
          displaySimulation:false,
          displaylogo:true,
          displaySignup0:false
        }
        this.UpdateData=this.UpdateData.bind(this)
        this.selectCharId=this.selectCharId.bind(this)
        this.startS=this.startS.bind(this)
    }
    UpdateData(data){
     this.setState({userdata:data})
    }
    selectCharId(id){
      this.setState({ID:id,displaySignup0:true,displaysignup  :false})
    }
    startS(){
      this.setState({displaySimulation:true,displaySignup0:false,displaylogo:false,displaynavbar:true,displaylogin:false})
    }
    render() {
      return <div>
          {this.state.displaynavbar?<NavBar />:null}
          {this.state.displaylogo?<Logo/>:null}
          {this.state.displaysignup?<Signup IdS={this.selectCharId}/>:null}
          {this.state.displayshop?<Shop/>:null}
          {this.state.displaylogin?<Login start={this.startS}/>:null}
          { this.state.displaySimulation?<Simulation/>:null}
          {this.state.displaySignup0?<Signup0 id={this.state.ID} start={this.startS}/>:null}
            </div>
    }
  }

  ReactDOM.render(<App/>,document.getElementById("App"))
