import React from "react"
class Token extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render(){
      return (<div>
          <img src="token.png" alt="" id="token"/>
          </div>
      )
  }
}
export default Token;
