import axios from 'axios';

// IGetQuestions
export type TypeChoice = {
    id: number,
    question: number,
    choiceText: string,
    votes: number,
}

export type TypeQuestion = {
    id: number,
    questionText: string,
    pubDate: string,
    choices: TypeChoice[],
}


export interface IGetQuestions {
    count: number,
    next: number | null,
    previous: number | null,
    results: TypeQuestion[]
}


export class Client {
    private static baseUrl = 'http://localhost:8000/api/1.0/questions/';
    static getBaseUrl = () => {
        return Client.baseUrl;
    }

    // Questionリストを取得する
    static fetchQuestions = () => {
        const promise = axios.get<IGetQuestions>(Client.baseUrl);

        return promise;
    }

    // 投票する
    static vote = (choiceId: string) => {
        const url = `http://localhost:8000/api/1.0/choices/${choiceId}/vote/`;
        const promise = axios.post<TypeChoice>(url);

        return promise;
    }
}