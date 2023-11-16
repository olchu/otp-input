import {
  colors,
  fontSizes,
  TextSizes,
  indent,
  ThemeColors,
  IndentsType,
  zindexes,
  shadows,
} from './constants/constants';

export const themeLight = {
  colors: {
    accent: colors.accentLight,
    warning: colors.warningLight,
    illustrationGray: colors.illustrationGray,
    darkGradient: colors.darkGradientConstant,
    primary: colors.primaryLight,
    secondary: colors.secondaryLight,
    border: colors.borderLight,
    background: colors.backgroundLight,
    transparence1: colors.transparenceLight1,
    transparence2: colors.transparenceLight2,
    fill: colors.fillLight,
    white: colors.whiteConstant,
    secondaryBackground: colors.secondaryBackgroundLight,
    backdrop: colors.backdropLight,
    darkGrey: colors.darkGreyConstant,
    globalBackground:
      'linear-gradient(254.93deg, #AFB224 9.3%, #15B481 48.25%, #00B6DE 90.35%)',
  },
};

export const themeDark = {
  colors: {
    accent: colors.accentDark,
    warning: colors.warningDark,
    illustrationGray: colors.illustrationGray,
    darkGradient: colors.darkGradientConstant,
    primary: colors.primaryDark,
    secondary: colors.secondaryDark,
    border: colors.borderDark,
    background: colors.backgroundDark,
    transparence1: colors.transparenceDark1,
    transparence2: colors.transparenceDark2,
    fill: colors.fillDark,
    white: colors.whiteConstant,
    secondaryBackground: colors.backgroundDark,
    backdrop: colors.backdropDark,
    darkGrey: colors.darkGreyConstant,
    globalBackground:
      'linear-gradient(254.93deg, #AFB224 9.3%, #15B481 48.25%, #00B6DE 90.35%)',
  },
};

export const theme = {
  indents: { ...indent },
  fontSizes: { ...fontSizes },
  zindexes: { ...zindexes },
  shadows: { ...shadows },
  background: 'grey',
  shadow: '0px 35px 64px -20px rgba(34, 60, 80, 0.1)',
  iframeLayout: false,
  Link: {
    color: ThemeColors.accent,
  },
  Cell: {
    padding: indent.xs,
    borderRadius: '16px',
    titleFont: TextSizes.l,
    titleColor: ThemeColors.primary,
    subTitleFont: TextSizes.m,
    subTitleColor: ThemeColors.secondary,
    leftIcon: ThemeColors.accent,
  },
  TextCell: {
    padding: `${indent.xs} 0`,
    borderRadius: '20px',
    titleFont: TextSizes.m,
    titleColor: ThemeColors.primary,
    subTitleFont: TextSizes.xs,
    subTitleColor: ThemeColors.secondary,
    icon: ThemeColors.secondary,
  },
  Bold: {
    color: ThemeColors.primary,
  },
  TextRow: {
    borderRadius: '20px',
    titleColor: ThemeColors.primary,
    subTitleColor: ThemeColors.secondary,
    statusColor: ThemeColors.warning,
    size: {
      m: {
        titleFont: TextSizes.l,
        subTitleFont: TextSizes.m,
        statusFont: TextSizes.xs,
      },
      l: {
        titleFont: TextSizes.xxl2,
        subTitleFont: TextSizes.m,
        statusFont: TextSizes.xs,
      },
    },
  },
  OfferLink: {
    font: TextSizes.xs,
  },
  Buttons: {
    PrimaryButton: {
      background: ThemeColors.accent,
      textColor: ThemeColors.white,
      iconColor: colors.secondaryDark as ThemeColors,
    },
    SecondaryButton: {
      background: ThemeColors.transparence2,
      textColor: ThemeColors.accent,
      iconColor: ThemeColors.secondary as ThemeColors,
    },
    WarningButton: {
      background: ThemeColors.warning,
      textColor: ThemeColors.white,
      iconColor: colors.secondaryDark as ThemeColors,
    },
    fontSize: TextSizes.s,
    borderRadius: '12px',
    height: '40px',
    short: {
      padding: '16px',
    },
    default: {
      padding: '11px 10px',
    },
  },
  LinkButton: {
    color: ThemeColors.accent,
    borderRadius: '12px',
    fontSize: TextSizes.m,
  },
  Illustration: {
    background: ThemeColors.transparence1,
  },
  DesktopContainerSide: {
    header: {
      padding: `0 ${indent.m} 0`,
      margin: `${indent.xs} 0 0 0`,
    },
    content: {
      padding: `0 ${indent.m} ${indent.m} ${indent.m}`,
    },
  },
  MobileContainer: {
    header: {
      padding: `${indent.xs} ${indent.s} 0 ${indent.s}`,
    },
    content: {
      padding: `0 ${indent.s} ${indent.s} ${indent.s}`,
    },
    bottomLogo: {
      padding: `0 0 ${indent.l} 0`,
    },
  },
  IframeContainer: {
    desktop: {
      content: {
        padding: `0`,
        textAlign: 'left',
      },
      bottom: {
        marginTop: indent.m,
      },
    },
    mobile: {
      content: {
        padding: `${indent.xs} 0 0`,
        textAlign: 'left',
      },
      bottom: {
        marginTop: indent.m,
      },
    },
  },
  TopBar: {
    titleFont: TextSizes.xl,
    titleColor: ThemeColors.primary,
    subtitleFont: TextSizes.m,
    subtitleColor: ThemeColors.secondary,
  },
  Input: {
    font: TextSizes.l,
    borderRadius: '12px',
    height: '56px',
  },
  CodeInput: {
    descriptionText: TextSizes.xs,
    descriptionColor: ThemeColors.secondary,
    errorText: TextSizes.xs,
    errorColor: ThemeColors.warning,
    label: TextSizes.xs,
    labelColor: ThemeColors.secondary,
  },
  Accordion: {
    title: {
      fontSize: TextSizes.l,
      color: ThemeColors.primary,
    },
    content: {
      color: ThemeColors.secondary,
      fontSize: TextSizes.m,
    },
  },
  GroupButtons: {
    marginBottomIndent: indent.xxs,
    marginRightIndent: indent.xxs,
  },
  Avatar: {
    color: ThemeColors.secondary,
    background: ThemeColors.fill,
    badgeBackground: ThemeColors.warning,
    badgeIcon: ThemeColors.white,
  },
  QrBox: {
    boxShadow: shadows.box,
    qr: {
      fill: ThemeColors.accent,
    },
    timerText: {
      color: colors.secondaryLight as ThemeColors,
      warningColor: ThemeColors.warning,
    },
    errorText: {
      color: ThemeColors.warning,
    },
    text: {
      color: colors.secondaryLight as ThemeColors,
    },
    repeatButton: {
      background: ThemeColors.accent,
    },
    byRequestText: {
      color: colors.primaryLight as ThemeColors,
    },
    default: {
      box: {
        height: '206px',
        width: '206px',
        padding: indent.xs,
      },
      qrBox: {
        padding: '32px 36px 0',
      },
      qr: {
        height: '134px',
        width: '134px',
      },
      timerText: {
        font: TextSizes.xs,
        bottomIndent: indent.s,
      },
      errorText: {
        font: TextSizes.xs,
        marginBottom: indent.xxs,
      },
      text: {
        font: TextSizes.xs,
      },
    },
    big: {
      box: {
        height: '320px',
        width: '320px',
        padding: '0 40px',
      },
      qrBox: {
        padding: '60px 60px 0',
      },
      qr: {
        height: '200px',
        width: '200px',
      },
      timerText: {
        font: TextSizes.m,
        bottomIndent: '22px',
      },
      errorText: {
        font: TextSizes.m,
        marginBottom: indent.xxs,
      },
      text: {
        font: TextSizes.m,
      },
    },
  },
  Popup: {
    titleFont: TextSizes.xxl,
    titleColor: ThemeColors.primary,
    subtitleFont: TextSizes.m,
    subtitleColor: ThemeColors.secondary,
    background: ThemeColors.secondaryBackground,
    edgeBlockBackground: ThemeColors.secondary,
  },
  Backdrop: {
    background: ThemeColors.backdrop,
  },
  Tabs: {
    Container: {
      background: ThemeColors.transparence2 as ThemeColors,
    },
    Tab: {
      activeTabBackground: colors.whiteConstant as ThemeColors,
      activeTabTextColor: colors.primaryLight as ThemeColors,
      unActiveTabTextColor: ThemeColors.secondary,
    },
  },
  TextField: {
    InputContainer: {
      hasLabel: {
        padding: {
          top: '26px',
          right: indent.s,
          bottom: '10px',
          left: indent.s,
        },
      },
      withoutLabel: {
        padding: {
          top: indent.s,
          right: indent.s,
          bottom: '20px',
          left: indent.s,
        },
      },
    },
    isDisabled: {
      opacity: 0.4,
    },
  },
  CoockieBanner: {
    descktop: {
      background: colors.transparenceDark2,
      textColor: colors.whiteConstant,
      closeIconColor: colors.primaryLight,
      closeIcon: {
        color: colors.whiteConstant,
        background: colors.transparenceDark2,
      },
    },
    mobile: {
      dark: {
        background: colors.transparenceDark2,
        textColor: colors.whiteConstant,
        closeIconColor: colors.primaryLight,
        closeIcon: {
          color: colors.whiteConstant,
          background: colors.transparenceDark2,
        },
      },
      light: {
        background: colors.backgroundDark,
        textColor: colors.whiteConstant,
        closeIconColor: colors.primaryLight,
        closeIcon: {
          color: colors.whiteConstant,
          background: colors.transparenceDark2,
        },
      },
    },
    padding: indent.s,
    borderRadius: '16px;',
    shadow: shadows.cardTop,
  },
  Tooltip: {
    dark: {
      background: colors.backgroundLight,
      color: colors.primaryLight,
    },
    light: {
      background: colors.backgroundDark,
      color: colors.primaryDark,
    },
  },
  Notification: {
    padding: indent.s,
    borderRadius: '16px',
    textFont: TextSizes.xs,
    textColor: ThemeColors.secondary,
  },
  Layout: {
    showSberIdLogo: true,
  },
  NotifyBanner: {
    padding: `${indent.s} ${indent.xs} ${indent.s} ${indent.s}`,
    textColor: ThemeColors.secondary,
    icon: {
      color: colors.redConstant,
    },
    closeIcon: {
      color: ThemeColors.secondary,
    },
    desktop: {
      borderRadius: indent.s,
      textSize: TextSizes.m,
      background: ThemeColors.background,
    },
    mobile: {
      textSize: TextSizes.xs,
      background: ThemeColors.fill,
    },
  },
  Substrate: {
    padding: `${indent.xs} 0`,
    borderRadius: indent.s,
  },
  Captcha: {
    height: '56px',
  },
};

export type BaseThemeType = typeof theme;
export type ColorsType = {
  accent?: string;
  warning?: string;
  illustrationGray?: string;
  darkGradient?: string;
  primary?: string;
  secondary?: string;
  border?: string;
  background?: string;
  transparence1?: string;
  transparence2?: string;
  fill?: string;
  white?: string;
  secondaryBackground?: string;
  backdrop?: string;
  darkGrey?: string;
  globalBackground?: string;
  warningDark?: string;
  greenBlueGradient?: string;
};
export type ColorThemeType = {
  colors: ColorsType;
};

export enum OSThemeTypes {
  light = 'light',
  dark = 'dark',
  auto = 'auto',
}

export type ThemeType = BaseThemeType & ColorThemeType;

export type PartialThemeType = Partial<BaseThemeType> & ColorThemeType;

export type MerchThemeType = Partial<
  BaseThemeType & { colors: Record<OSThemeTypes, ColorsType> }
>;

export type MarginsType = {
  mb?: IndentsType;
  mt?: IndentsType;
  ml?: IndentsType;
  mr?: IndentsType;
};
