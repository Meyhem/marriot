import { Layout, Menu } from 'antd'
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons'
import React from 'react'
import styled from 'styled-components'

import { Sider, Content } from '../ui/layout'
import { themeSpace } from '../ui/theme'

const StyledHome = styled.div``

export const HomePage = () => {
  return (
    <StyledHome>
      <Layout>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Content>234</Content>
      </Layout>
    </StyledHome>
  )
}
