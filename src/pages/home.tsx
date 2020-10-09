import React from 'react'
import styled from 'styled-components'
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts'
import _ from 'lodash'
import { Divider } from 'antd'

import { Page } from '../ui/page'
import { Title2 } from '../ui/typography'
import { SensorControl, SensorControlState } from '../ui/sensor-control'
import { centerXFlex } from '../ui/mixin'
import { themeSpace } from '../ui/theme'

const data = _.times(50, i => ({
  name: `Day ${i}`,
  temp1: Math.sin(i * ((2 * Math.PI) / 50)) * 100 + 50,
  temp2: Math.cos(i * ((2 * Math.PI) / 50)) * 100 + 50
}))

const Label = ({ x, y, stroke, value }) => (
  <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
    {Math.round(value)}
  </text>
)

const SectionContainer = styled.div`
  /* ${centerXFlex}; */
`

const SensorButtons = styled.div`
  display: flex;
  & > * {
    margin: 0 ${themeSpace(1)};
  }
`

export const HomePage = () => {
  return (
    <Page>
      <Title2>Sensor temperature</Title2>
      <SectionContainer>
        <LineChart width={800} height={400} data={data} margin={{ top: 50, right: 20, left: 10, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Temperature', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={v => `${Math.round(Number(v))} °C`} />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="temp1" stroke="#ff7300" strokeWidth={2} label={Label} />
          <Line type="monotone" dataKey="temp2" stroke="#6176ff" strokeWidth={2} label={Label} />
        </LineChart>
      </SectionContainer>
      <Divider />
      <Title2>Sensor control</Title2>
      <SectionContainer>
        <SensorButtons>
          <SensorControl title="Temperature" />
          <SensorControl title="Radiation" />
          <SensorControl title="Humidity" />
        </SensorButtons>
      </SectionContainer>
    </Page>
  )
}
