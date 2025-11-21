import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("render hero image", () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    const heroImage = screen.getByAltText("Hero image");
    expect(heroImage).toBeInTheDocument();

    // because Jest cannot match the full image path
    expect(heroImage.src).toContain("homeHero.png");
  });
});
