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
    // fix: リクエスト先のURLを開発/テスト/本番の各環境に柔軟に切り替えるような設定に変更
    private static baseUrl =
        process.env.NODE_ENV === 'production' ? '/api/1.0' : 'http://localhost:8000/api/1.0';

    static getBaseUrl = () => {
        return Client.baseUrl;
    }

    // Questionリストを取得する
    static fetchQuestions = () => {
        const url = Client.baseUrl + '/questions/';
        const promise = axios.get<IGetQuestions>(url);

        return promise;
    }

    // 投票する
    static vote = (choiceId: string) => {
        const url = `${Client.baseUrl}/choices/${choiceId}/vote/`;
        const promise = axios.post<TypeChoice>(url);

        return promise;
    }
}