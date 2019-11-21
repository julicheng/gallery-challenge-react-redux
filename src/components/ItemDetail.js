import React, { Component } from "react";
import { Link } from "react-router-dom";

class ItemDetail extends Component {
  state = { title: "", description: "", url: "" };

  // fetch item from api that matches the id the user has selected
  componentDidMount() {
    const itemId = this.props.match.params.itemid;
    fetch(`http://185.121.204.130:8080/api/media/` + itemId)
      .then(response => response.json())
      .then(this.printItems)
      .catch(function() {
        console.log("Error getting items");
      });
  }

  // assign values fetched from api to data fields needed
  printItems = data => {
    this.setState({
      title: data.title,
      description: data.description,
      url: data.url
    });
  };

  render() {
    return (
      <div className="itemDetail">
        <div className="imageSection">
          <img
            src={this.state.url}
            alt={this.state.title}
            className="largeImage"
          />
        </div>
        <div className="descriptionSection">
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
          <h3>
            <Link to={"/"}>Back to gallery</Link>
          </h3>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
