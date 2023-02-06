import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Weather from "../WeatherComponent.vue";

describe("WeatherComponent", () => {
  it("renders properly", () => {
    const wrapper = mount(Weather);
    expect(wrapper).toBeTruthy();
  });
});
