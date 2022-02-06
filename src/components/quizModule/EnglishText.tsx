import React, { useMemo } from 'react'

// assets
import styles from './EnglishText.style'

// components
import Paragraph from '../common/Paragraph'

interface Props {
  text: string,
  question: string
}

const EnglishText = ({
  text,
  question
}: Props) => {
  const MemoizedText = useMemo (() => {
    return (
      <Paragraph
        size='md'
        style={[
          styles.txt,
          question === text && styles.questionText
      ]}
      >
        {text}
      </Paragraph>
    )
  }, [text])
  
  return MemoizedText
}

export default EnglishText