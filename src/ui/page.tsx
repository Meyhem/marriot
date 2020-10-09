import { Layout, Menu, Tooltip } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts'

import { Sider, Content } from './layout'
import { themeSpace } from './theme'
import { Icon } from './icon'
import { centerFlex } from './mixin'
import { Title1 } from './typography'

const StyledBrand = styled.div`
  ${centerFlex}
  padding: ${themeSpace(3)};
`

const StyledLayout = styled(Layout)`
  height: 100%;
`

const StyledContent = styled(Content)`
  padding: ${themeSpace(5)};
`

export interface PageProps extends React.PropsWithChildren<{}> {
  title?: string
}

export const Page = ({ title, children }: PageProps) => {
  return (
    <StyledLayout>
      <Sider>
        <StyledBrand>
          <Icon.BarChartOutlined color="textPrimaryInverse" size="4em" />
        </StyledBrand>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<Icon.BarChartOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<Icon.SettingOutlined />}>
            Settings
          </Menu.Item>
          <Menu.Item key="3" icon={<Icon.UserOutlined />}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <StyledContent>
        {title && <Title1>{title}</Title1>}
        {children}
      </StyledContent>
    </StyledLayout>
  )
}
