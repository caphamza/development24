// assets
import { myColors } from '../../styles/colors'

// components
import { StyleSheet } from 'react-native'

const style: { [key: string]: any } = StyleSheet.create({
  paragraph: {
    color: myColors.white
  },
  sm: {
    fontSize: 14
  },
  md: {
    fontSize: 16
  },
  lg: {
    fontSize: 18
  }
})

export default style