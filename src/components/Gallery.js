import React, { Component } from "react";
import Item from "./Item";
import Filter from "./Filter";

class Gallery extends Component {
  // state = { filter: "none", filteredItems: [], allItems: [] };
  state = {
    filter: "none",
    allItems: [
      {
        tags: ["art", "watercolour"],
        _id: "5d5d59ff4431ba89d176b567",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        thumbnailUrl: "https://via.placeholder.com/150/92c952"
      },
      {
        tags: ["abstract", "impressionism"],
        _id: "5d5d59ff4431ba89d176b568",
        title: "reprehenderit est deserunt velit ipsam",
        thumbnailUrl: "https://via.placeholder.com/150/771796"
      },
      {
        tags: ["art"],
        _id: "5d5d59ff4431ba89d176b569",
        title: "officia porro iure quia iusto qui ipsa ut modi",
        thumbnailUrl: "https://via.placeholder.com/150/24f355"
      },
      {
        tags: ["art", "realism"],
        _id: "5d5d59ff4431ba89d176b56a",
        title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        thumbnailUrl: "https://via.placeholder.com/150/d32776"
      },
      {
        tags: ["watercolour", "painting"],
        _id: "5d5d59ff4431ba89d176b56b",
        title: "natus nisi omnis corporis facere molestiae rerum in",
        thumbnailUrl: "https://via.placeholder.com/150/f66b97"
      },
      {
        tags: ["modern", "impressionism"],
        _id: "5d5d59ff4431ba89d176b56c",
        title: "accusamus ea aliquid et amet sequi nemo",
        thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
      },
      {
        tags: ["impressionism", "painting"],
        _id: "5d5d59ff4431ba89d176b56e",
        title: "aut porro officiis laborum odit ea laudantium corporis",
        thumbnailUrl: "https://via.placeholder.com/150/54176f"
      },
      {
        tags: ["painting", "modern"],
        _id: "5d5d59ff4431ba89d176b56f",
        title: "qui eius qui autem sed",
        thumbnailUrl: "https://via.placeholder.com/150/51aa97"
      },
      {
        tags: ["impressionism", "abstract"],
        _id: "5d5d59ff4431ba89d176b570",
        title: "beatae et provident et ut vel",
        thumbnailUrl: "https://via.placeholder.com/150/810b14"
      },
      {
        tags: ["abstract", "watercolour"],
        _id: "5d5d59ff4431ba89d176b571",
        title: "nihil at amet non hic quia qui",
        thumbnailUrl: "https://via.placeholder.com/150/1ee8a4"
      },
      {
        tags: ["realism", "impressionism"],
        _id: "5d5d59ff4431ba89d176b573",
        title: "repudiandae iusto deleniti rerum",
        thumbnailUrl: "https://via.placeholder.com/150/197d29"
      },
      {
        tags: ["art", "modern"],
        _id: "5d5d59ff4431ba89d176b574",
        title: "est necessitatibus architecto ut laborum",
        thumbnailUrl: "https://via.placeholder.com/150/61a65"
      }
    ],
    filteredItems: [],
    item: {
      tags: ["art", "modern"],
      _id: "5d5d59ff4431ba89d176b574",
      title: "est necessitatibus architecto ut laborum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://via.placeholder.com/600/61a65",
      thumbnailUrl: "https://via.placeholder.com/150/61a65",
      __v: 1
    }
  };

  // componentDidMount() {
  //   fetch(`http://axielldevtest.eastus2.cloudapp.azure.com:3000/api/media`)
  //     .then(response => response.json())
  //     .then(this.getItems)
  //     .catch(function() {
  //       console.log("Error getting items");
  //     });
  // }

  // getItems = data => {
  //   this.setState(
  //     {
  //       allItems: data.media
  //     },
  //     () => {
  //       this.getFilteredItems();
  //     }
  //   );
  // };

  handleChange = event => {
    this.setState({ filter: event }, () => {
      this.getFilteredItems();
    });
  };

  getFilteredItems = () => {
    let filter = this.state.filter;
    if (filter === "none") {
      this.setState({ filteredItems: this.state.allItems });
    } else {
      let newFilteredItems = this.state.allItems.filter(item => {
        return item.tags.includes(filter);
      });
      this.setState({ filteredItems: newFilteredItems });
    }
  };
  render() {
    return (
      <>
        <Filter handleChange={this.handleChange} filter={this.state.filter} />
        <div className="gallery">
          {this.state.filteredItems.map((item, key) => {
            return <Item key={key} id={item._id} item={item} />;
          })}
        </div>
      </>
    );
  }
}

export default Gallery;
