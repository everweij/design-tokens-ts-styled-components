import "jest-styled-components";
import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme, defaultTheme } from "../src";

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("theme", () => {
  it("renders a styled component correctly", () => {
    const Component = styled.div<{ moreMargin: boolean }>`
      color: ${theme.color("grey", 9)};
      font-size: ${theme.fontSize(0)};
      line-height: ${theme.lineHeight("spaced")};
      margin-top: ${props => theme.space(props.moreMargin ? 5 : 2, props)};
    `;

    const tools = render(
      <Component
        theme={defaultTheme}
        moreMargin
        data-testid="styled-component"
      />
    );

    const element = tools.getByTestId("styled-component");

    expect(element).toHaveStyleRule(
      "color",
      defaultTheme.colors.grey[9].replace(/\s/g, "")
    );
    expect(element).toHaveStyleRule(
      "font-size",
      defaultTheme.fontSize.get(0) + "px"
    );
    expect(element).toHaveStyleRule(
      "line-height",
      defaultTheme.lineHeight.spaced.toString()
    );
    expect(element).toHaveStyleRule("margin-top", defaultTheme.space[5] + "px");
  });

  it("works with ThemeProvider", () => {
    const Component = styled.div<{ moreMargin: boolean }>`
      color: ${theme.color("primary", 0)};
    `;

    const tools = render(
      <ThemeProvider
        theme={{
          ...defaultTheme,
          colors: {
            ...defaultTheme.colors,
            primary: ["pink", ...defaultTheme.colors.primary.slice(1)]
          }
        }}
      >
        <Component moreMargin data-testid="styled-component" />
      </ThemeProvider>
    );

    const element = tools.getByTestId("styled-component");

    expect(element).toHaveStyleRule("color", "pink");
  });
});
