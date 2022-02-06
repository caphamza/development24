import React, { ReactChild } from 'react'

// assets
import { myColors } from '../../styles/colors'
import styles from './Paragraph.style'

// components
import { Text } from 'react-native'

interface Props {
  size?: string,
  children: ReactChild,
  style?: {
    [key: string]: any
  },
  color?: string
}

const Paragraph = ({
  size = 'sm',
  children,
  style,
  color = 'white'
}: Props) => {
  return (
    <Text
      style={[
        styles.paragraph,
        { color: myColors[color] },
        styles[size],
        style
      ]}
    >
      {children}
    </Text>
  )
}

export default Paragraph