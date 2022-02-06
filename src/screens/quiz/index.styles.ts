// assets
import { myColors } from '../../styles/colors'

// components
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: myColors.info
  },
  contentContainer: {
    flex: 1,
    marginTop: '20%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: myColors.secondaryDark,
  },
  engTranslationView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 32
  },
  gerTranslationView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 68,
  },
  engTxt: {
    marginLeft: 5
  },
  optionCardsView: {
    marginTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  txt1: {
    marginTop: '10%',
    textAlign: 'center',
    marginBottom: 42
  },
  txt2: {
    textAlign: 'center',
    marginBottom: 32
  },
  txt3: {
    textAlign: 'center'
  },
  txt4: {
    paddingTop: 30,
    marginLeft: 32,
    marginBottom: 12,
    fontWeight: '700'
  },
  btnView: {
    width: '100%',
    position: 'absolute',
    backgroundColor: myColors.secondaryDark,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 150,
    bottom: 0
  }
})