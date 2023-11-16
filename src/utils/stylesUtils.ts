import { IndentsType, TextSizesType, ColorsType } from '../constants/constants';
import { ThemeType } from '../theme';

export const getFontProp = (size: TextSizesType, theme: ThemeType) => {
  return `
  font-size: ${theme.fontSizes[size].size};
  line-height: ${theme.fontSizes[size].lineHeight};
  font-weight: ${theme.fontSizes[size].weight};
  letter-spacing: ${theme.fontSizes[size].letterSpacing};
  `;
};

export const getThemeColor = (color: ColorsType, theme: ThemeType) => {
  if (Object.keys(theme.colors).includes(color)) {
    return theme.colors[color];
  } else {
    return color;
  }
};

export const getMargins = (
  theme: ThemeType,
  margins: {
    ml: IndentsType | undefined;
    mb: IndentsType | undefined;
    mt: IndentsType | undefined;
    mr: IndentsType | undefined;
  }
) => {
  const { ml, mb, mt, mr } = margins;
  let mar = '';
  if (ml) {
    mar += `margin-left: ${theme.indents[ml]};`;
  }
  if (mb) {
    mar += `margin-bottom: ${theme.indents[mb]};`;
  }
  if (mt) {
    mar += `margin-top: ${theme.indents[mt]};`;
  }
  if (mr) {
    mar += `margin-right: ${theme.indents[mr]};`;
  }
  return mar;
};

export const getPaddings = (
  theme: ThemeType,
  paddings: {
    l?: IndentsType;
    b?: IndentsType;
    t?: IndentsType;
    r?: IndentsType;
  }
) => {
  const { l, b, t, r } = paddings;
  let acc = '';

  if (l) acc += `padding-left: ${theme.indents[l]};`;
  if (b) acc += `padding-bottom: ${theme.indents[b]};`;
  if (t) acc += `padding-top: ${theme.indents[t]};`;
  if (r) acc += `padding-right: ${theme.indents[r]};`;

  return acc;
};

export const getFocusVisibleStyles = (theme: ThemeType, selector?: string) => {
  return `
  position: relative;
  :focus-visible {
    outline: none;
  }
  ${
    selector || ':focus-visible:after,&[data-focus-visible-added]:focus:after'
  } {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      outline: 2px solid ${theme.colors.accent};
      outline-offset: 4px;
      border-radius: inherit;
    }
  `;
};
