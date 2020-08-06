import Typography from "typography"

let bodyFontFamily = ["Quicksand", "Helvetica", "Arial", "sans-serif"]; // Upd
let linkFontFamily = ["Nunito Sans", "Helvetica", "Arial", "sans-serif"]; // Update with your real font stack
let headerFontFamily = bodyFontFamily;

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1,
  omitGoogleFont: true,
  headerFontFamily: headerFontFamily,
  bodyFontFamily: bodyFontFamily,
  linkFontFamily: linkFontFamily
})
export default typography