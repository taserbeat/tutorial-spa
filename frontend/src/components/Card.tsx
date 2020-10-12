import React from 'react';
import styled from 'styled-components';

type Props = {
    questionText: string,
    pubDate: string,
}

const Wrapper = styled.div`  
  width: 150px;  
  margin-top: 10px;  
  margin-right: 10px;  
  padding: 3px;  
  font-size: 1em;  
  border: solid 1px lightsteelblue;  
  text-align: center;  
  float: left;  
`

const TitleLabel = styled.div`  
  font-size: 1.2em;  
  line-height: 1.5em;  
  margin-top: 2px;  
  background-color: royalblue;
  color: #fff;  
`

const DateLabel = styled.div` 
  background-color: royalblue; 
  font-size: 1.2em;  
  line-height: 1.5em;  
  margin-top: 2px;  
  color: #fff;  
`

const Card: React.FC<Props> = (props: Props) => {
    return (
        <div className={'card'}>
            <Wrapper>
                <TitleLabel>{props.questionText}</TitleLabel>
                <DateLabel>{props.pubDate}</DateLabel>
            </Wrapper>
        </div>
    )
}

export default Card;