import {
  createVar,
  globalFontFace,
  globalStyle,
  style,
} from "@vanilla-extract/css";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { BASE_COLOR, BASE_COLOR_SHADOW } from "~/libs/constants";
import { HUBOT_SANS_B64, MONDA_SANS_B64 } from "~/libs/fonts";

export const primaryColor = createVar();
export const boxShadowValues = createVar();
export const shadowColor = createVar();
export const rounded = createVar();
export const baseColor = createVar();

const PRIMARY_FONT = "Mona Sans";
const SECONDARY_FONT = "Hubot Sans";

globalFontFace(PRIMARY_FONT, {
  src: `local("Mona Sans"), url(${MONDA_SANS_B64})`,
  fontWeight: "200 900",
  fontStretch: "75% 125%",
  fontDisplay: "swap",
});

globalFontFace(SECONDARY_FONT, {
  src: `local("Hubot Sans"), url(${HUBOT_SANS_B64})`,
  fontWeight: "200 900",
  fontStretch: "75% 125%",
  fontDisplay: "swap",
});

globalStyle("html, body, button, input, optgroup, select, textarea", {
  fontFamily: `"${PRIMARY_FONT}",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: `"${SECONDARY_FONT}","${PRIMARY_FONT}",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  marginTop: 0,
  marginBottom: 0,
  fontFeatureSettings: '"liga", "ss02"',
});

export const containerClass = style({ minHeight: "100dvh" });

export const flexClass = style({ display: "flex" });

export const flexColumnClass = style({ flexDirection: "column" });

export const flexRowClass = style({ flexDirection: "row" });

export const gapClass = recipe({
  base: {
    gap: "1rem",
  },
  variants: {
    size: {
      small: {
        gap: "0.5rem",
      },
      medium: {
        gap: "1rem",
      },
      large: {
        gap: "1.5rem",
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export const flexItemsClass = recipe({
  variants: {
    justify: {
      start: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
      end: {
        justifyContent: "flex-end",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
      evenly: {
        justifyContent: "space-evenly",
      },
    },
    align: {
      start: {
        alignItems: "flex-start",
      },
      center: {
        alignItems: "center",
      },
      end: {
        alignItems: "flex-end",
      },
      stretch: {
        alignItems: "stretch",
      },
      baseline: {
        alignItems: "baseline",
      },
    },
    flex: {
      1: {
        flex: 1,
      },
      auto: {
        flex: "auto",
      },
    },
  },
  defaultVariants: {
    justify: "start",
    align: "start",
    flex: "auto",
  },
});

export const buttonPaddingClass = style({ padding: "0.5rem 1rem" });

export const formClass = recipe({
  base: [
    flexClass,
    flexColumnClass,
    gapClass(),
    {
      vars: {
        [primaryColor]: `rgb(${BASE_COLOR})`,
        [boxShadowValues]: "0 0 10px 1px",
        [shadowColor]: `rgba(${BASE_COLOR_SHADOW}, 0.7)`,
        [rounded]: "6px",
        [baseColor]: "#181616",
      },
      margin: "0 auto",
      padding: "1rem",
      width: "100%",
      height: "100%",
    },
  ],
  variants: {
    size: {
      small: { maxWidth: 400 },
      medium: { maxWidth: 680 },
      large: { maxWidth: 1200 },
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export const fieldsetClass = style([
  flexClass,
  flexColumnClass,
  {
    vars: {},

    border: "none",
    gap: "0.25rem",
    padding: 0,
    margin: 0,
  },
]);

export const inputClass = style([
  buttonPaddingClass,
  {
    vars: {
      [baseColor]: "#18161666",
    },

    border: `1px solid ${baseColor}`,
    borderRadius: rounded,
    outline: "none",
    transition: "box-shadow 0.3s, border 0.3s",

    ":focus-within": {
      border: `1px solid ${primaryColor}`,
      boxShadow: `${boxShadowValues} ${shadowColor}`,
    },
  },
]);

export const labelClass = style({
  display: "block",
  fontSize: "0.9rem",
  fontWeight: 400,
  color: baseColor,
  transition: "color 0.3s, font-weight 0.1s",

  selectors: {
    [`${fieldsetClass}:has(${inputClass}:focus-within) &`]: {
      fontWeight: 600,
      color: primaryColor,
    },
  },
});

export const buttonPrimaryClass = style([
  buttonPaddingClass,
  {
    backgroundColor: primaryColor,
    borderRadius: rounded,
    color: "#fff",
    fontWeight: 500,
    border: `1px solid ${primaryColor}`,
  },
]);

export const errorMessageClass = style([
  {
    vars: {
      [baseColor]: "rgba(255, 0, 0)",
    },

    fontSize: "0.8125rem",
    color: baseColor,
    fontWeight: 600,
    margin: "0.5rem 0",
    textAlign: "center",
  },
]);

export const importantTitleClass = recipe({
  base: {
    lineHeight: 1.2,
  },
  variants: {
    position: {
      left: {
        textAlign: "left",
      },
      center: {
        textAlign: "center",
      },
      right: {
        textAlign: "right",
      },
    },
    weight: {
      600: {
        fontWeight: 600,
      },
      700: {
        fontWeight: 700,
      },
      800: {
        fontWeight: 800,
      },
    },
    margin: {
      0: {
        margin: 0,
      },
      auto: {
        margin: "1rem 0",
      },
    },
    size: {
      large: {
        fontSize: "1.5rem",
      },
      medium: {
        fontSize: "1.25rem",
      },
      small: {
        fontSize: "1rem",
      },
    },
  },
  defaultVariants: {
    position: "center",
    weight: 700,
    margin: "auto",
    size: "large",
  },
});

export const iconClass = recipe({
  base: {
    display: "inline-block",
    verticalAlign: "middle",
    fill: "currentColor",
    overflow: "hidden",
  },
  variants: {
    size: {
      small: {
        width: "0.8em",
        height: "0.8em",
      },
      medium: {
        width: "1em",
        height: "1em",
      },
      large: {
        width: "1.25em",
        height: "1.25em",
      },
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

export type IconsVariants = RecipeVariants<typeof iconClass>;
