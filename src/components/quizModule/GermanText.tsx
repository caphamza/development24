import React, { useMemo } from 'react'

import styles from './EnglishText.style'

// components
import Paragraph from '../common/Paragraph'
import Card from './Card'

interface Props {
  text: string,
  answer: string,
  selectedAnswer: string,
  color: string,
  txtColor: string
}

const GermanText = ({
  text,
  answer,
  selectedAnswer,
  color,
  txtColor
}: Props) => {
  const MemoizedText = useMemo (() => {
    return (
      <>
        {text !== answer
          ? (
            <Paragraph
              size='md'
              style={[ styles.txt ]}
            >
              {text}
            </Paragraph>
            )
          : selectedAnswer
            ? (
                <Card
                  data={selectedAnswer}
                  color={color}
                  txtColor={txtColor}
                  style={{ marginLeft: 12 }}
                />
              )
            : (
                <Paragraph style={styles.txt}>__________</Paragraph>
              )
        }
      </>
      
    )
  }, [text, selectedAnswer, color, txtColor])
  
  return MemoizedText
}

export default GermanText