import { createGlobalStyle, ThemedStyledProps, FlattenInterpolation } from 'styled-components'

export interface MarriotTheme {
  colors: {
    primary: string
    secondary: string

    info: string
    success: string
    warning: string
    danger: string

    bgPrimary: string
    bgSecondary: string

    borderPrimary: string
    borderSecondary: string

    textPrimary: string
    textSecondary: string
    textMuted: string

    textPrimaryInverse: string
    textSecondaryInverse: string
  }
  fontSizes: Record<'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge', string>
  breakpoints: [string, string, string]
  space: [string, string, string, string, string, string]
}

export type Color = keyof MarriotTheme['colors']
export type FontSizes = keyof MarriotTheme['fontSizes']
export type Spaces = 0 | 1 | 2 | 3 | 4 | 5
export type Breakpoints = 0 | 1 | 2

export const defaultTheme: MarriotTheme = {
  colors: {
    primary: '#0557b0',
    secondary: '#fec74a',

    info: '#17a2b8',
    success: '#28a745',
    warning: '#f08905',
    danger: '#dc3545',

    bgPrimary: '#f9f9f9',
    bgSecondary: '#E0E0E0',

    borderPrimary: '#CACACA',
    borderSecondary: '#CACACA',

    textPrimary: 'black',
    textSecondary: '#222222',
    textMuted: '#a2a2a2',
    textPrimaryInverse: 'white',
    textSecondaryInverse: 'white'
  },
  fontSizes: {
    extraSmall: '12px',
    small: '14px',
    medium: '24px',
    large: '32px',
    extraLarge: '40px'
  },
  breakpoints: ['768px', '1366px', '1920px'],
  space: ['0px', '8px', '16px', '24px', '32px', '40px']
}

export const GlobalStyle = createGlobalStyle`
  html, body, #react-app {
    margin: 0;
    padding: 0;
    font-size: ${(p: { theme: MarriotTheme }) => p.theme.fontSizes.small};
    width: 100%;
    height: 100%;
  }
`

export function themeColor(color: Color): (p: ThemedStyledProps<unknown, MarriotTheme>) => string {
  return ({ theme }) => theme.colors[color]
}

export function themeSpace(space: Spaces): (p: ThemedStyledProps<unknown, MarriotTheme>) => string {
  return ({ theme }) => theme.space[space]
}

export function themeFontSize(size: FontSizes): (p: ThemedStyledProps<unknown, MarriotTheme>) => string {
  return ({ theme }) => theme.fontSizes[size]
}

export function brkmin(min: Breakpoints, styles: FlattenInterpolation<ThemedStyledProps<unknown, MarriotTheme>>) {
  return `
    @media (min-width: ${defaultTheme.breakpoints[min]}) {
      ${styles}
    }
  `
}

export function brkmax(max: Breakpoints, styles: FlattenInterpolation<ThemedStyledProps<unknown, MarriotTheme>>) {
  return `
    @media (max-width: ${defaultTheme.breakpoints[max]}) {
      ${styles}
    }
  `
}

export function brkbt(
  min: Breakpoints,
  max: Breakpoints,
  styles: FlattenInterpolation<ThemedStyledProps<unknown, MarriotTheme>>
) {
  return `@media (min-width: ${defaultTheme.breakpoints[min]}) and (max-width: ${defaultTheme.breakpoints[max]}) { ${styles} }
  `
}

export const breakpoint = {
  mobile: (styles: FlattenInterpolation<ThemedStyledProps<unknown, MarriotTheme>>) => styles,
  tablet: (styles: FlattenInterpolation<ThemedStyledProps<unknown, MarriotTheme>>) => brkmin(0, styles),
  desktop: (styles: FlattenInterpolation<ThemedStyledProps<unknown, MarriotTheme>>) => brkmin(1, styles),
  wide: (styles: FlattenInterpolation<ThemedStyledProps<unknown, MarriotTheme>>) => brkmin(2, styles)
}
