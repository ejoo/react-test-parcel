import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Todo from "../Todo";
import TodoItem from "../TodoItem";

describe("<Todo /> Component", () => {
  it("<Todo /> renders without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Todo />, div);
  });

  it("=> should have empty `todos` state.", () => {
    //
  });

  it("=> should render h1", () => {
    const todo = shallow(<Todo />);
    expect(todo.find("h1").length).toBeGreaterThan(0);
  });

  it("=> should render h2", () => {
    const todo = shallow(<Todo />);
    expect(todo.find("h2").length).toEqual(1);
  });

  it("=> should render <TodoITem />", () => {
    const todo = shallow(<Todo />);
    expect(todo.find(<TodoItem />).length).toEqual(1);
  });
});
