import React, { useState } from 'react'
import styled from 'styled-components'
import { Icon } from './icon'

import { centerFlex } from './mixin'
import { Color, themeColor, themeFontSize, themeSpace } from './theme'

const delay = (ms: number) => new Promise(r => setTimeout(r, ms))

export type SensorControlState = 'active' | 'inactive' | 'processing'

export interface SensorControlProps {
  state?: SensorControlState
  title?: string
  onClick?(): void
}

const backgrounds: Record<SensorControlState, Color> = {
  active: 'success',
  inactive: 'warning',
  processing: 'info'
}

const headerBackgrounds: Record<SensorControlState, Color> = {
  active: 'success',
  inactive: 'warning',
  processing: 'info'
}

const SensorControlContainer = styled.div<SensorControlProps>`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  cursor: pointer;

  background: ${({ state }) => themeColor(backgrounds[state])};
  transition: background-color 1s ease;
`

const Header = styled.div`
  ${centerFlex};
  flex-direction: column;
  border-radius: 8px 8px 0 0;

  background: ${themeColor('primary')};
`
const Body = styled.div`
  ${centerFlex};
  flex: 1;
  flex-direction: column;
`

const Content = styled.div`
  ${centerFlex};
  flex-direction: column;
`

const Text = styled.span`
  color: ${themeColor('primary')};
  font-size: ${themeFontSize('large')};
  font-weight: bold;
`

const Title = styled.span`
  color: ${themeColor('textPrimaryInverse')};
  font-weight: bold;
  font-size: ${themeFontSize('medium')};
`

async function toggleSensor(
  state: SensorControlState,
  setState: React.Dispatch<React.SetStateAction<SensorControlState>>
) {
  if (state === 'processing') return

  if (state === 'active') {
    setState('processing')
    await delay(2000)
    setState('inactive')
  }

  if (state === 'inactive') {
    setState('processing')
    await delay(2000)
    setState('active')
  }
}

export const SensorControl = ({ title, state, onClick }: SensorControlProps) => {
  const [sensor, setSensor] = useState('inactive' as SensorControlState)

  return (
    <SensorControlContainer state={sensor} onClick={() => toggleSensor(sensor, setSensor)}>
      <Header>{title && <Title>{title}</Title>}</Header>

      <Body>
        {sensor === 'active' && (
          <Content>
            <Icon.CheckOutlined size="5em" />
            <Text>Active</Text>
          </Content>
        )}
        {sensor === 'inactive' && (
          <Content>
            <Icon.CloseOutlined size="5em" />
            <Text>Inactive</Text>
          </Content>
        )}
        {sensor === 'processing' && (
          <Content>
            <Icon.LoadingOutlined size="5em" />
            <Text>Processing...</Text>
          </Content>
        )}
      </Body>
    </SensorControlContainer>
  )
}
