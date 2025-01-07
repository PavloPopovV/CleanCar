export function fontFace(
  name,
  src,
  fontWeight = "normal",
  fontStyle = "normal"
) {
  return `
        @font-face{
            font-family: "${name}";
            src: url(${src}) format("woff"),
            font-style: ${fontStyle};
            font-weight: ${fontWeight};
            font-display: swap;
        }
    `;
}
