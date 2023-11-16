export const colors = {
  illustrationGray: '#8C9AA1',
  accentLight: '#148F2B',
  warningLight: '#E3621B',
  primaryLight: '#080808',
  secondaryLight: 'rgba(8, 8, 8, 0.5)',
  borderLight: 'rgba(8, 8, 8, 0.1)',
  backgroundLight: '#F8F8F8',
  transparenceLight2: 'rgba(8, 8, 8, 0.06)',
  transparenceLight1: 'rgba(8, 8, 8, 0.02)',
  fillLight: '#FFFFFF',
  secondaryBackgroundLight: '#F3F3F3',

  backdropLight: 'rgba(0, 0, 0, 0.1)',

  accentDark: '#24B23E',
  warningDark: '#FA6D20',
  primaryDark: '#FFFFFF',
  secondaryDark: 'rgba(255, 255, 255, 0.5)',
  borderDark: 'rgba(255, 255, 255, 0.1)',
  backgroundDark: '#444550',
  transparenceDark2: 'rgba(255, 255, 255, 0.12)',
  transparenceDark1: 'rgba(255, 255, 255, 0.06)',
  fillDark: 'rgba(255, 255, 255, 0.06)',
  greenBlueGradient:
    'linear-gradient(190deg, rgba(11, 148, 199, 0.09) 0%, rgba(65, 200, 73, 0.09) 100%)',

  backdropDark: 'rgba(0, 0, 0, 0.5)',

  whiteConstant: '#FFFFFF',
  redConstant: '#E35502',
  darkGreyConstant: '#303038',
  darkGradientConstant: 'linear-gradient(180deg, #444550 0%, #3F5663 100%)',
};

export enum ThemeColors {
  accent = 'accent',
  warning = 'warning',
  illustrationGray = 'illustrationGray',
  darkGradient = 'darkGradient',
  primary = 'primary',
  secondary = 'secondary',
  border = 'border',
  background = 'background',
  transparence1 = 'transparence1',
  transparence2 = 'transparence2',
  fill = 'fill',
  white = 'white',
  secondaryBackground = 'secondaryBackground',
  backdrop = 'backdrop',
  darkGrey = 'darkGrey',
  warningDark = 'warningDark',
  greenBlueGradient = 'greenBlueGradient',
}

export enum TextSizes {
  xxxs = 'xxxs',
  xxs = 'xxs',
  xs = 'xs',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
  xxl = 'xxl',
  xxl2 = 'xxl2',
  xxl3 = 'xxl3',
}

export const fontSizes = {
  xxxs: {
    size: '10px',
    lineHeight: '13px',
    weight: '500',
    letterSpacing: '-0.022em',
  },
  xxs: {
    size: '10px',
    lineHeight: '14px',
    weight: '500',
    letterSpacing: '-0.022em',
  },
  xs: {
    size: '12px',
    lineHeight: '16px',
    weight: '500',
    letterSpacing: '-0.022em',
  },
  s: {
    size: '14px',
    lineHeight: '16px',
    weight: '600',
    letterSpacing: '',
  },
  m: {
    size: '14px',
    lineHeight: '18px',
    weight: '500',
    letterSpacing: '-0.019em',
  },
  l: {
    size: '16px',
    lineHeight: '20px',
    weight: '500',
    letterSpacing: '-0.019em',
  },
  xl: {
    size: '16px',
    lineHeight: '20px',
    weight: '600',
    letterSpacing: '-0.019em',
  },
  xxl: {
    size: '18px',
    lineHeight: '24px',
    weight: '500',
    letterSpacing: '-0.025em',
  },
  xxl2: {
    size: '24px',
    lineHeight: '30px',
    weight: '600',
    letterSpacing: '',
  },
  xxl3: {
    size: '32px',
    lineHeight: '30px',
    weight: '600',
    letterSpacing: '',
  },
};

export const indent = {
  xxxs: '4px',
  xxs: '8px',
  xs: '12px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '48px',
  xxl: '64px',
} as const;

export const zindexes = {
  popupBackdrop: 100,
  popup: 101,
  popupHeader: 103,
  coockie: 999,
  tooltip: 10,
};

export const shadows = {
  cardDown: '0px 4px 7px rgba(116, 116, 116, 0.16)',
  box: '0px 12px 24px rgba(45, 73, 88, 0.15)',
  cardTop: '0px 6px 20px rgba(116, 116, 116, 0.12)',
  backButton: '0px 6px 16px rgba(45, 73, 88, 0.15)',
};

export type IndentsType = keyof typeof indent;
export type TextSizesType = keyof typeof TextSizes;
export type ColorsType = keyof typeof ThemeColors;

export const NOTIFICATION_SLOT_ANIMATION_DURATION = 350;
