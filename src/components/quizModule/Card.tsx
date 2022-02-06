import React, { useMemo } from 'react'

// assets
import { myColors } from '../../styles/colors'
import styles from './Card.style'

// components
import { TouchableOpacity, Text } from 'react-native'
import Paragraph from '../common/Paragraph'

interface Props {
  data: string,
  color?: string,
  txtColor?: string,
  disable?: boolean,
  style?: {
    [key: string]: any
  },
  onClick?: () => void
}

const Card = ({
  data,
  color = 'white',
  txtColor = 'secondaryDark',
  disable = false,
  style,
  onClick,
  
}: Props) => {
  const MemoizedCard = useMemo(() => {
    return (
      <TouchableOpacity
        onPress={onClick}
        disabled={disable}
        style={[
          styles.container,
          { backgroundColor: myColors[color] },
          disable && { opacity: 0.5 },
          style
        ]}
      >
        <Paragraph color={txtColor}>{data}</Paragraph>
      </TouchableOpacity>
    )
  }, [data, color, txtColor, disable])
  return MemoizedCard
}

export default Card
