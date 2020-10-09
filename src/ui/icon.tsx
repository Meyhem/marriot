import {
  BarChartOutlined,
  SettingOutlined,
  UserOutlined,
  CheckOutlined,
  CloseOutlined,
  LoadingOutlined
} from '@ant-design/icons'
import styled from 'styled-components'
import { Color, themeColor } from './theme'

function styledIcon(IconComponent: React.ComponentType) {
  return styled(IconComponent)<{ color?: Color; size?: number | string }>`
    color: ${({ color }) => themeColor(color || 'textPrimaryInverse')};
    font-size: ${({ size }) => size || 'initial'};
  `
}

export const Icon = {
  BarChartOutlined: styledIcon(BarChartOutlined),
  SettingOutlined: styledIcon(SettingOutlined),
  UserOutlined: styledIcon(UserOutlined),
  CheckOutlined: styledIcon(CheckOutlined),
  CloseOutlined: styledIcon(CloseOutlined),
  LoadingOutlined: styledIcon(LoadingOutlined)
}
