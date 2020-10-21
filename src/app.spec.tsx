import React from "react"

import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"

import { App } from "./app"

Enzyme.configure({ adapter: new Adapter() })

describe("App", () => {
  it("should have show the app name in a h1 header", () => {
    const comp = mount(<App />)
    expect(comp.containsMatchingElement(<h1>rotortastic</h1>)).toBeTruthy()
  })
})
