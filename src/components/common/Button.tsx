import React, { ReactChild } from 'react'

// assets
import { myColors } from '../../styles/colors'
import styles from './Button.style'

// components
import { TouchableOpacity } from 'react-native'
import Paragraph from './Paragraph'

interface Props {
  disable?: boolean,
  color?: string,
  style?: {
    [key: string]: any
  },
  textColor?: string,
  onClick: () => void
  children: ReactChild
}

const Button = ({
  color = 'white',
  style,
  textColor = 'info',
  disable = false,
  onClick,
  children
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onClick}
      style={[
        { backgroundColor: myColors[color] },
        styles.btnContainer,
        { ...style }
      ]}
    >
      <Paragraph size='md' style={styles.btnTxt} color={textColor}>
        {children}
      </Paragraph>
    </TouchableOpacity>
  )
}

export default Button
