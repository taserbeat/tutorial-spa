import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import * as QuestionAPI from '../api/QuestionAPI';

type Props = {
    question: QuestionAPI.TypeQuestion,
}

const Wrapper = styled.div`  
  width: 400px;  
  margin-top: 10px;  
  margin-right: 10px;  
  padding: 3px;  
  font-size: 1em;  
  border: solid 1px lightsteelblue;  
  background-color: royalblue;
  text-align: center;  
  float: left;  
`

const TitleLabel = styled.div`  
  font-size: 1.2em;  
  line-height: 1.5em;  
  margin-top: 2px;  
  color: #fff;  
`

const DateLabel = styled.div` 
  font-size: 0.8em;  
  line-height: 1.5em;  
  margin-top: 20px;  
  color: #fff;  
`

const formatDateString = (date: string) => {
    const formatted = moment(date).locale('ja').format('YYYY年MM月DD日(ddd) HH時mm分ss秒');
    return formatted;
}

const Card: React.FC<Props> = (props: Props) => {
    const [selectedChoiceId, setSelectedChoiceId] = React.useState<string>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedChoiceId(e.target.value);
    }

    const handleVote = () => {
        if (selectedChoiceId === undefined) return;
        const promise = QuestionAPI.Client.vote(selectedChoiceId);

        promise.then(res => {
            // todo: 投票APIのレスポンスを処理する
        })
    }

    return (
        <div className={'card'}>
            <Wrapper>
                <TitleLabel>{props.question.questionText}</TitleLabel>
                {
                    props.question.choices.map((choice) => {
                        const choiceId = choice.id.toString();

                        return <div>
                            <input type="radio"
                                key={choiceId}
                                id={choiceId}
                                value={choice.id}
                                checked={choiceId === selectedChoiceId}
                                onChange={handleChange} />
                            <label htmlFor={choiceId}>{`${choice.choiceText}   投票数: ${choice.votes}`}</label>
                        </div>
                    })
                }
                {
                    props.question.choices.length > 0 &&
                    <button className={'vote-btn'} onClick={handleVote}>投票</button>
                }
                <DateLabel>{formatDateString(props.question.pubDate)}</DateLabel>
            </Wrapper>
        </div>
    )
}

export default Card;