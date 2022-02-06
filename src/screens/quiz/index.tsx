import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'

// assets
import styles from './index.styles'

// components
import { SafeAreaView, View, Text } from 'react-native'
import Paragraph from '../../components/common/Paragraph'
import Card from '../../components/quizModule/Card'
import Button from '../../components/common/Button'
import EnglishText from '../../components/quizModule/EnglishText'
import GermanText from '../../components/quizModule/GermanText'
import { myColors } from '../../styles/colors'

// utils
import { quizScreen as constants} from '../../utils/contants'

const Quiz = () => {
  const [data, setdata] = useState<any>([])
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [qNumber, setQNumber] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [cardProperties, setCardProperties] = useState({
    disable: false,
    textColor: 'secondaryDark',
    cardColor: 'white'
  })
  const [btnProperties, setBtnProperties] = useState({
    disable: true,
    btnText: 'continue',
    btnColor: 'white',
    btnViewBackgroundColor: 'secondaryDark'
  })

  useEffect(() => {
    const subscriber = firestore()
      .collection('languageQuiz')
      .onSnapshot((documentSnapshot: any) => {
        console.log('Q', documentSnapshot)
        setdata(documentSnapshot.docs)
      });

    return () => subscriber();
  }, [])

  const reset = () => {
    setSelectedAnswer('')
    setSubmitted(false)
    setCardProperties({
      disable: false,
      textColor: 'secondaryDark',
      cardColor: 'white'
    })
    setBtnProperties({
      disable: true,
      btnText: 'continue',
      btnColor: 'white',
      btnViewBackgroundColor: 'secondaryDark'
    })
    setQNumber(qNumber + 1)
  }

  const submit = () => {
    const isCorrect = selectedAnswer === data[qNumber]?._data.answer
    setBtnProperties({
      ...btnProperties,
      btnText: 'continue',
      btnColor: 'white',
      btnViewBackgroundColor: isCorrect ? 'primaryLight' : 'warningLight'
    })
    setCardProperties({
      disable: true,
      textColor: 'white',
      cardColor: isCorrect ? 'primaryLight' : 'warningLight'
    })
    setSubmitted(true)
  }
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={{ paddingHorizontal: 42 }}>
            <Paragraph size='sm' style={styles.txt1}>{constants.heading}</Paragraph>
            <View style={styles.engTranslationView}>
              {data[qNumber]?._data.english.map((val: string, index: number) => (
                <EnglishText
                  key={index} text={val}
                  question={data[qNumber]._data.question}
                />
              ))}
            </View>
            <View style={styles.gerTranslationView}>
              {data[qNumber]?._data.german.map((val: string, index: number) => (
                <GermanText
                  key={index}
                  text={val}
                  color={cardProperties.cardColor}
                  txtColor={cardProperties.textColor}
                  answer={data[qNumber]?._data.answer}
                  selectedAnswer={selectedAnswer}
                />
              ))}
            </View>
            <View style={styles.optionCardsView}>
              {data[qNumber]?._data.options.map((val: string, index: number) => (
                <Card
                  key={index}
                  data={val}
                  disable={cardProperties.disable}
                  color={val === selectedAnswer ? 'secondaryLight' : 'white'}
                  style={{ marginBottom: 12, marginLeft: 12 }}
                  onClick={() => {
                    setBtnProperties({
                      ...btnProperties,
                      disable: false,
                      btnText: 'check Answer',
                      btnColor: 'primaryLight'
                    })
                    setSelectedAnswer(val)
                  }}
                />
              ))}
            </View>
          </View>
          <View
            style={[
              styles.btnView,
              { backgroundColor: myColors[btnProperties.btnViewBackgroundColor]},
            ]}>
            <Paragraph size='md' style={styles.txt4}>
              {submitted ? selectedAnswer === data[qNumber]?._data.answer ? 'Great Job' : `Answer: ${data[qNumber]?._data.answer}` : '' }
            </Paragraph>
            <Button
              color={btnProperties.btnColor}
              textColor={btnProperties.btnColor !== 'white' ? 'white' : 'info'}
              onClick={() => submitted ? reset() : submit()}
              disable={btnProperties.disable}
            >
              {btnProperties.btnText}
            </Button>          
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Quiz