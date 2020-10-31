import BaseAPIClient from './BaseAPIClient'

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


export interface IFetchQuestions {
    count: number,
    next: number | null,
    previous: number | null,
    results: TypeQuestion[]
}


export class Client extends BaseAPIClient {

    // Questionリストを取得する
    static fetchQuestions = () => {
        const url = '/questions/';
        const promise = Client.client.get<IFetchQuestions>(url);

        return promise;
    }

    // 投票する
    static vote = (choiceId: string) => {
        const url = `/choices/${choiceId}/vote/`;
        const promise = Client.client.post<TypeChoice>(url);

        return promise;
    }
}