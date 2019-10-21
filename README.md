# Manage design tokens with TypeScript and styled-components

This repository contains the code I talked about in my blog-post [Manage design tokens with TypeScript and styled-components](https://www.erikverweij.dev/blog/manage-design-tokens-with-typescript-and-styled-components).

Feel free to clone this repo and adjust it to your needs.

## tsdx

This repo was created with the help of [tsdx: Zero-config CLI for TypeScript package development](https://github.com/jaredpalmer/tsdx)

## Getting Started

### 1. Adjust / complement the `theme.ts` file to your needs

Let's say you wanted to add box-shadow's:

```ts
// theme.ts

/**
 * A. Add tokens to your theme
 */
const theme = {
  // colors, spaces, ...etc

  shadow: {
    light: "1px 1px 1px 1px rgba(0, 0, 0, 0.1)",
    normal: "1px 1px 3px 1px rgba(0, 0, 0, 0.2)",
    strong: "1px 1px 5px 1px rgba(0, 0, 0, 0.3)"
  }
};

export default theme;

export type Theme = typeof theme;
export type ThemeProps = { theme?: Theme };

/**
 * B. Create a type from each token
 */

export type Shadow = keyof Theme["shadow"];
```

### 2. Create a 'getter'

```ts
// getters.ts

import { ThemeProps, Shadow } from "./theme";

function getTheme(props: ThemeProps) {
  return props.theme && props.theme.colors ? props.theme : defaultTheme;
}

export function getShadow(shadow: Shadow, props: ThemeProps) {
  return getTheme(props).shadow[shadow];
}
```

### 3. Create a 'selector'

```ts
// selectors.ts

import { ThemeProps } from "./theme";
// import the getter we've just created
import { getShadow } from "./getters";

// implementation skipped for brevity
function createSelector {};

export const shadow = createSelector(getShadow);
```

### 4. Complement the hook

```ts
// useTheme.tsx

// import the getter we've just created
import { getShadow } from "./getters";

export default function useTheme() {
  const theme = useContext(ThemeContext);

  return useMemo(() => {
    const themeProps = { theme };

    return {
      // other selectors here...

      shadow: partialGetter(getShadow, themeProps)
    };
  }, [theme]);
}
```

## Usage

### styled-components

```tsx
import * as React from "react";
import * as ReactDOM from "react-dom";
import styled, { ThemeProvider } from "styled-components";
import { defaultTheme, theme } from "@company/theme";

const Test = styled.div`
  color: ${theme.color("grey", 9)};
  margin-top: ${theme.space(2)};
  box-shadow: ${theme.shadow("normal")};
`;

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Test>Theme with styled-components!!!</Test>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

### Hook

```tsx
import * as React from "react";
import { useTheme } from "@company/theme";

function Test() {
  const theme = useTheme();

  return (
    <div
      style={{
        color: theme.color("grey", 9),
        marginTop: theme.space(2),
        boxShadow: theme.shadow("normal")
      }}
    >
      Theme with hooks!!!
    </div>
  );
}
```
