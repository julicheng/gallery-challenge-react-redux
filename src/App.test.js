import React from "react";
import { shallow, mount, render } from "enzyme";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Filter from "./components/Filter";
import Item from "./components/Item";
import App from "./App";

// console.log(component.debug());

// const setUp = (props={}) => {
//   const component = shallow(He)
// }

describe("Header Component", () => {
  it("Should render without errors", () => {
    const component = shallow(<Header />);
    const wrapper = component.find("header img.logo");
    expect(wrapper.length).toBe(1);
  });
});

// describe("Footer Component", () => {
//   it("Should render without errors", () => {
//     const component = shallow(<Footer />);
//     const wrapper = component.find("footer h3");
//     expect(wrapper.length).toBe(1);
//   });
// });

// describe("Filter Component", () => {
//   it("Should render without errors", () => {
//     const props = {
//       filter: "abstract",
//       handleFilterChange: "#"
//     };
//     const component = shallow(<Filter props={props} />);
//     console.log(component.debug());
//     const wrapper = component.find("select");
//     expect(wrapper.length).toBe(1);
//   });
// });

// describe("Item Component", () => {
//   it("It should render without errors", () => {
//     const component = shallow(<Item />);
//     console.log(component.debug());
//     const wrapper = component.find("div");
//     expect(wrapper.length).toBe(1);
//   });
// });
