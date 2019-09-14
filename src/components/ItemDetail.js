import React, { Component } from "react";

class ItemDetail extends Component {
  state = { title: "", description: "", url: "" };

  componentDidMount() {
    const itemId = this.props.match.params.itemid;
    fetch(
      `http://axielldevtest.eastus2.cloudapp.azure.com:3000/api/media/` + itemId
    )
      .then(response => response.json())
      .then(this.printItems)
      .catch(function() {
        console.log("Error getting items");
      });
  }

  printItems = data => {
    this.setState({
      title: data.title,
      description: data.description,
      url: data.url
    });
  };

  render() {
    return (
      <div>
        <div>
          <img src={this.state.url} alt={this.state.title} />
        </div>
        <div>
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
