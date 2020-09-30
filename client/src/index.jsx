import React from "react"
import ReactDOM from 'react-dom'
import Login from "./components/login.jsx"
import Signup from "./components/singup.jsx"
import Shop from "./components/shop.jsx"
import Simulation from "./components/simulation.jsx"
import NavBar from "./components/navbar.jsx"

class App extends React.Component {
    constructor(props){
        super(props)
        this.state={
          balance : 100,
          Id : 10,
          displaynavbar:false,
          displaylogin:false,
          displaysignup:false,
          displayshop:true,
          displaySimulation:false,
        }
    }
    render() {
      return (
      <div>
        {this.state.displaySimulation?<Signup/>:null}
        {this.state.displayshop?<Shop Id={this.state.Id} balance={this.state.balance}/>:null}
        {this.state.displaylogin?<Login/>:null}
        {this.state.displaySimulation?<Simulation/>:null}
        {this.state.displaynavbar?<NavBar/>:null}
    </div>
    )};
  }

  ReactDOM.render(<App/>,document.getElementById("App"))
