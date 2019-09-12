import React, { Component } from "react";
import Item from "./Item";

class Gallery extends Component {
  state = {
    media: [
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
    ]
  };

  render() {
    return (
      <div className="gallery">
        {this.state.media.map((item, key) => {
          return (
            <Item key={key} id={item._id} thumbnailUrl={item.thumbnailUrl} />
          );
        })}
      </div>
    );
  }
}

export default Gallery;
