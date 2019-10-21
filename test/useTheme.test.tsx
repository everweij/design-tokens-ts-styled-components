import * as React from "react";
import { useTheme, defaultTheme } from "../src";

import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

describe("theme", () => {
  it("styles the component correctly", () => {
    function Test() {
      const theme = useTheme();

      return (
        <div
          data-testid="styled-component"
          style={{
            color: theme.color("grey", 9),
            fontSize: theme.fontSize(0),
            lineHeight: theme.lineHeight("spaced"),
            marginTop: theme.space(2)
          }}
        />
      );
    }

    const tools = render(<Test />);

    const element = tools.getByTestId("styled-component");

    expect(element.style.color!.replace(/\s/g, "")).toEqual(
      defaultTheme.colors.grey[9].replace(/\s/g, "")
    );
    expect(element.style.fontSize).toEqual(defaultTheme.fontSize.get(0) + "px");
    expect(element.style.lineHeight).toEqual(
      defaultTheme.lineHeight.spaced.toString()
    );
    expect(element.style.marginTop).toEqual(defaultTheme.space[2] + "px");
  });
});
