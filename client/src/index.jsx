import React from "react"
import ReactDOM from 'react-dom'
import Login from "./components/login.jsx"
import Signup from "./components/singup.jsx"
import Shop from "./components/shop.jsx"
import Simulation from "./components/simulation.jsx"
import NavBar from "./components/navbar.jsx"
import Logo from "./components/logo.jsx"
class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
          displaynavbar:false,
          displaylogin:false,
          displaysignup:false,
          displayshop:false,
          displaySimulation:false,
          displaylogo:false
        }
    }
    render() {
      return <div>
          {this.state.displaylogo?<Logo/>:null}
          {this.state.displaysignup?<Signup/>:null}
          {this.state.displayshop?<Shop/>:null}
          {this.state.displaylogin?<Login/>:null}
          {this.state.displaySimulation?<Simulation/>:null}
          {this.state.displaynavbar?<NavBar/>:null}
      </div>;
    }
  }

  ReactDOM.render(<App/>,document.getElementById("App"))
