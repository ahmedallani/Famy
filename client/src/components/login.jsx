import React from "react"
class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    AxiosLogin(){
      axios({
          url: '/login',
          method: 'post',
          data:{name:this.state.username,password:this.state.password}
        }).then(data=>{data=data.data
          console.log(data)
        if(data.Registred){
          this.props.successful()
          this.props.getData(data.data)
        }else{
          this.setState({username:"",password:""})
         setTimeout(()=>{ alert("Check again")},100)
        }
        })
  }
  
    render() {
      return  <div className="body">
      <h1 className="LoginS">Login</h1>
      
      <div></div>
      <input type="username" placeholder="Username" required/>
      <br></br>
      <input type="password" placeholder="Password" required/>
      <button id="loginB">Login</button>
    </div>;
    }
  }

  export default Login