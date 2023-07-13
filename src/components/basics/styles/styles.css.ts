import {
  createVar,
  globalFontFace,
  globalStyle,
  style,
} from "@vanilla-extract/css";

export const primaryColor = createVar();
export const primaryColorShadowValues = createVar();
export const borderColor = createVar();
export const rounded = createVar();
export const baseColor = createVar();

const PRIMARY_FONT = "Mona Sans";
const PRIMARY_FONT_FALLBACK = "Mona Sans Fallback";
const PRIMARY_FONT_HEADER_FALLBACK = "Mona Sans Header Fallback";
const SECONDARY_FONT = "Hubot Sans";

globalFontFace(PRIMARY_FONT, {
  src: 'local("Mona Sans"), url("/fonts/Mona-Sans.woff2") format("woff2 supports variations"), url("/fonts/Mona-Sans.woff2") format("woff2-variations")',
  fontWeight: "200 900",
  fontStretch: "75% 125%",
  fontDisplay: "swap",
});

globalFontFace(PRIMARY_FONT_FALLBACK, {
  src: "local(Arial)",
  sizeAdjust: "108.5%",
  ascentOverride: "82%",
});

globalFontFace(PRIMARY_FONT_HEADER_FALLBACK, {
  sizeAdjust: "102.7%",
  ascentOverride: "82%",
  src: "local(Arial Bold)",
});

globalFontFace(SECONDARY_FONT, {
  src: 'local("Hubot Sans"), url("/fonts/Hubot-Sans.woff2") format("woff2 supports variations"), url("/fonts/Hubot-Sans.woff2") format("woff2-variations")',
  fontWeight: "200 900",
  fontStretch: "75% 125%",
  fontDisplay: "swap",
});

globalStyle("html, body, button, input, optgroup, select, textarea", {
  fontFamily: `"${PRIMARY_FONT}", "${PRIMARY_FONT_FALLBACK}", -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
});

globalStyle("h1, h2, h3, h4, h5, h6", {
  fontFamily: `"${SECONDARY_FONT}", "${PRIMARY_FONT}", "${PRIMARY_FONT_HEADER_FALLBACK}", -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  marginTop: 0,
  marginBottom: 0,
  fontFeatureSettings: '"liga", "ss02"',
});

export const containerClass = style({ minHeight: "100dvh" });

export const flexClass = style({ display: "flex" });

export const flexColumnClass = style({ flexDirection: "column" });

export const flexRowClass = style({ flexDirection: "row" });

export const gapClass = style({ gap: "1.5rem" });

export const buttonPaddingClass = style({ padding: "0.5rem 1rem" });

export const formClass = style([
  flexClass,
  flexColumnClass,
  gapClass,
  {
    vars: {
      [primaryColor]: "rgb(0, 153, 255)",
      [primaryColorShadowValues]: "0 0 10px 1px",
      [rounded]: "6px",
      [baseColor]: "#1F2328",
    },

    justifyContent: "center",
    alignItems: "stretch",
    maxWidth: 400,
    margin: "auto",
    padding: "1rem",
    width: "100%",
    height: "100%",
  },
]);

export const fieldsetClass = style([
  flexClass,
  flexColumnClass,
  {
    vars: {
      [borderColor]: "rgba(0, 153, 255, 0.4)",
    },

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
      boxShadow: `${primaryColorShadowValues} ${borderColor}`,
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
      color: primaryColor,
      fontWeight: 500,
    },
  },
});

export const buttonPrimaryClass = style([
  buttonPaddingClass,
  {
    vars: {
      [primaryColor]: "rgb(0, 153, 255)",
    },

    backgroundColor: primaryColor,
    border: "none",
    borderRadius: rounded,
    color: "#fff",
    fontWeight: 500,
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
    margin: 0,
    textAlign: "center",
  },
]);

export const importantTitleClass = style({
  fontSize: "1.5rem",
  fontWeight: 600,
  textAlign: "center",
  margin: "1rem 0",
  lineHeight: 1.2,
});
