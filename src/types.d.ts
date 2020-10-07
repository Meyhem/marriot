import { MarriotTheme } from './ui/theme'

type ThemeInterface = MarriotTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeInterface {}
}
