import React, { Component } from 'react';
import axios from "axios";

export class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            reason: "",
            date: ""
        }
        this.AxiosBann = this.AxiosBann.bind(this);

    }
    AxiosBann() {
        axios({
            url: '/ban',
            method: 'post',
            data: { username: this.state.username, reason: this.state.reason, date: this.state.date }
        })
    }

    render() {
        return (
            <div id="admin" >
                {this.state.displayFeedback}
                <h1 id="ban"  >Admin Interface</h1>
                <div id="userBann">
                    <h1>Banned Accounts</h1>
                    <input type="username" placeholder="Username" onChange={(e) => { this.setState({ username: e.target.value }) }} required />
                    <input type="text" placeholder="reason" onChange={(e) => { this.setState({ reason: e.target.value }) }} required />

                    <input type="date" onChange={(e) => { this.setState({ date: e.target.value }) }} required />
                    <br></br>
                    <button onClick={this.AxiosBann} >Validate</button>
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
