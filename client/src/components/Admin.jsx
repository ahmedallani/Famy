import React, { Component } from 'react'

export class Admin extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="admin" >
        
      <h1 id="ban"  >Admin Interface</h1>
      <div id="userBann">
          <h1>Banned Accounts</h1>
      <input  type="username" placeholder="Username" />
      <input  placeholder="reason"/>
      
      <input type = "date"/>
      <br></br>
      <button >Validate</button>
      </div>
      
      <div id="repo">
      <h1 id="repN">Reports</h1>
      <div id="reposes">    
      </div>
      <br></br>
      <div id="reposes">  
      </div>
      <br></br>
      <div id="reposes">  
      </div>
      <br></br>
      <div id="reposes">  
      </div>
      <br></br>
      <div id="reposes">  
      </div>

      </div>
    </div>
        )
    }
}

export default Admin
