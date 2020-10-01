import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <h1 className="avatar_name"> {this.props.avatar} </h1>
        <img className="avatar_image" src={this.props.image}></img>
        <h2 className="avatar_price">{this.props.price}</h2>
        <button className="btn">purchase</button>
      </div>
    )
  };
};

const character = [
  {
    avatar: "pokemon",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg',
    price : 10
  },
  {
    avatar: "heyy",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg',
    price : 5
  },
  {
    avatar: "heyy",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg',
    price : 10
  },
  {
    avatar: "heyy",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg',
    price : 5
  }
];

class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

    this.updateBalance = this.updateBalance.bind(this);
  }

updateBalance(){
  axios({
    url: '/shop',
    method: 'post',
    data:{
      balance:this.state.balance-this.props.price,
    }
  }).then((data)=>{
    console.log(data)
    })
}


  render() {
    return (
      <div className="row">
        <div className="column">
          {character.map((element, key) => {
            return (
              <Avatar key={key} avatar={element.avatar} image={element.image} />
            );
          })};
    </div>
      </div>
    )
  };
};

export default Shop