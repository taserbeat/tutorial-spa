import axios from 'axios';

export interface IGetQuestions {
    count: number,
    next: number | null,
    previous: number | null,
    results: {
        id: number,
        questionText: string,
        pubDate: string
    }[]
}

export type TypeQuestion = {
    id: number
    questionText: string
    pubDate: string
}

export class Client {
    private static baseUrl = 'http://localhost:8000/api/1.0/questions/';
    static getBaseUrl = () => {
        return Client.baseUrl;
    }

    static getQuestions = () => {
        const promise = axios.get<IGetQuestions>(Client.baseUrl);

        return promise;
    }
}