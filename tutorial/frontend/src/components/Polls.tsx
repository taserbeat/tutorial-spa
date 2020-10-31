import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Button from './Button';
import * as QuestionAPI from '../api/QuestionAPI';
import Card from './Card';
import Clock from './Clock';

interface PollsProps {

}

const useQuestions = (initial: QuestionAPI.TypeQuestion[] = []) => {
    const [questions, setQuestions] = useState<QuestionAPI.TypeQuestion[]>(initial);
    const clearQuestions = () => setQuestions([]);

    return { questions, setQuestions, clearQuestions } as const;
}

// todo: 投票ボタンの有効/無効のレンダリングを最適化する
const Polls: React.FC<PollsProps> = () => {
    const { questions, setQuestions, clearQuestions } = useQuestions([]);
    const [lastChangedQuestionId, setLastChangedQuestionId] = useState<number>();

    const fetchQuestions = () => {
        QuestionAPI.Client.fetchQuestions()
            .then(response => {
                setQuestions(response.data.results);
            });
    }

    useEffect(() => {
        const fetchQuestionsSync = async () => {
            const res = await QuestionAPI.Client.fetchQuestions();
            setQuestions(res.data.results);
        };
        fetchQuestionsSync();
    }, []);

    return (
        <div>
            polls
            <div>
                <Button onClick={fetchQuestions} className={"btn"} labelName={"fetch"} />
                <Button onClick={clearQuestions} className={"btn"} labelName={"clear"} />
                {
                    questions.map(q => {
                        return <Card
                            key={q.id}
                            question={q}
                            fetchQuestions={fetchQuestions}
                            lastChangedQuestionId={lastChangedQuestionId}
                            setLastChanagedQuestionId={setLastChangedQuestionId}
                        />
                    })
                }
            </div>
            <Clock />
            <Link to="/logout">ログアウト</Link>
        </div>
    )
}

export default Polls;