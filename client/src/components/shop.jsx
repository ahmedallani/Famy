import React from "react";

class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <img className="avatar_image" src={this.props.image}></img>
        <h1 className="avatar_name"> {this.props.avatar} </h1>
        <button className="btn">purchase</button>
      </div>
    )
  };
};

const character = [
  {
    avatar: "pokemon",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg'
  },
  {
    avatar: "heyy",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg'
  },
  {
    avatar: "heyy",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg'
  },
  {
    avatar: "heyy",
    image: 'https://fr.web.img2.acsta.net/r_640_360/newsv7/19/11/20/17/13/0883987.jpg'
  }
];

class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="row">
        <img src=""></img>
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