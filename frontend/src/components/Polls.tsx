import React, { useEffect } from "react";

import Button from './Button';
import * as QuestionAPI from '../api/QuestionAPI';
import Card from './Card';

interface PollsProps {

}

const Polls: React.FC<PollsProps> = () => {
    const [questions, setQuestions] = React.useState<QuestionAPI.TypeQuestion[]>([]);

    const fetchQuestions = () => {
        const promise = QuestionAPI.Client.getQuestions();
        promise.then((response) => {
            setQuestions(response.data.results);
        });
    }

    const clearQuestions = () => {
        setQuestions([]);
    }

    useEffect(() => {
        fetchQuestions();
    }, [setQuestions]);

    return (
        <div>
            polls
            <div>
                <Button onClick={fetchQuestions} className={"btn"} labelName={"fetch"} />
                <Button onClick={clearQuestions} className={"btn"} labelName={"clear"} />
                {
                    questions.map((question) => {
                        return <Card
                            key={question.id}
                            questionText={question.questionText}
                            pubDate={question.pubDate}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Polls;