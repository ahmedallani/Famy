import React from "react"
import axios from "axios"
class Maincharacter extends React.Component {
    constructor(props){
        super(props)
        this.state={
          character:0,
          Id:0,
          name:"",
          FD:0,
         FU:0,
         FL:0,
         FR:0,
         face:[{D0:"./chars/char[0]/char[0]fd/char[0]fd0.png",D1:"./chars/char[0]/char[0]fd/char[0]fd1.png",D2:"./chars/char[0]/char[0]fd/char[0]fd2.png",
         R0:"./chars/char[0]/char[0]fR/char[0]fR0 (1).png",R1:"./chars/char[0]/char[0]fR/char[0]fR1.png",R2:"./chars/char[0]/char[0]fR/char[0]fR2.png",L0:"./chars/char[0]/char[0]fL/char[0]fL0.png",L1:"./chars/char[0]/char[0]fL/char[0]fL1.png",
         L2:"./chars/char[0]/char[0]fL/char[0]fL2.png",u0:"./chars/char[0]/char[0]fu/char[0]fu0.png",u1:"./chars/char[0]/char[0]fu/char[0]fu1.png",u2:"./chars/char[0]/char[0]fu/char[0]fu2.png"}],
         currentP:"./chars/char[0]/char[0]fd/char[0]fd0.png",
         positionX:0,
         positionY:0,
        }
        this.mouveView=this.mouveView.bind(this)
    }
    
    mouveView (e){
      console.log("work")
      var charN=this.state.character
      var x=e.keyCode
      var PX=e.target
      if(x===87){//top
        this.setState({FU:this.state.FU+1})
        if(this.state.FU%3===0){
          this.setState({currentP:this.state.face[charN]["u2"]})
        }else if(this.state.FU%2===0){
          this.setState({currentP:this.state.face[charN]["u1"]})
        }else{this.setState({currentP:this.state.face[charN]["u0"]})}
          this.setState({positionX:this.state.positionX-10})

        if(this.state.positionX-10-100>0){
          axios({
            method: 'post',
            url: '/position',
            data: {
            positionX:this.state.positionX-10,positionY:this.state.positionY,name:this.state.name,id:this.state.Id,Face:'top'
            }
          }).then(data=>{
            if(data.data.move){
             
            }
          })
        }
          
      }if(x===65){//left
        this.setState({FL:this.state.FL+1})
                if(this.state.FL%3===0){
                  this.setState({currentP:this.state.face[charN]["L2"]})
                }else if(this.state.FL%2===0){
                  this.setState({currentP:this.state.face[charN]["L1"]})
                }else{this.setState({currentP:this.state.face[charN]["L0"]})}
                  this.setState({positionY:this.state.positionY-10})

          if(this.state.positionY-10-80>0){
            axios({
              method: 'post',
              url: '/position',
              data: {
              positionX:this.state.positionX,positionY:this.state.positionY-10,name:this.state.name,id:this.state.Id,Face:'left'
              }
            }).then(data=>{
              if(data.data.move){
                
              }
            })
          }
      }if(x===68){//right
        this.setState({FR:this.state.FR+1})
        if(this.state.FR%3===0){
          this.setState({currentP:this.state.face[charN]["R2"]})
        }else if(this.state.FR%2===0){
          this.setState({currentP:this.state.face[charN]["R1"]})
        }else{this.setState({currentP:this.state.face[charN]["R0"]})}
          this.setState({positionY:this.state.positionY+10})
        if(this.state.positionY+10-80<380){
          axios({
            method: 'post',
            url: '/position',
            data: {
            positionX:this.state.positionX,positionY:this.state.positionY+10,name:this.state.name,id:this.state.Id,Face:'right'
            }
          }).then(data=>{
            if(data.data.move){
           
            }
          })
        }
          
      }if(x===83){//down
        this.setState({FD:this.state.FD+1})
        if(this.state.FD%3===0){
          this.setState({currentP:this.state.face[charN]["D2"]})
        }else if(this.state.FD%2===0){
          this.setState({currentP:this.state.face[charN]["D1"]})
        }else{this.setState({currentP:this.state.face[charN]["D0"]})}
          this.setState({positionX:this.state.positionX+10})

        if(this.state.positionX+10-100<280){
          axios({
            method: 'post',
            url: '/position',
            data: {
            positionX:this.state.positionX+10,positionY:this.state.positionY,name:this.state.name,id:this.state.Id,Face:'Down'
            }
          }).then(data=>{
            if(data.data.move){
              
            }
          })
        }
      }
    }

    render() {
      return <div>
        <img src={this.state.currentP} onKeyDown={this.mouveView} tabIndex="0" style={{"top":this.state.positionX+"px","left":this.state.positionY+"px"}} id="main"/>
        </div>
      
    }
  }

  export default Maincharacter