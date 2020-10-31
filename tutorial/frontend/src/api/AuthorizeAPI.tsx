import BaseAPIClient from './BaseAPIClient'

export type AuthorizeSuccessResponse = {
    token: string
}

export type AuthorizeFailedResponse = {
    nonFieldErrors: string[]
}

export class AuthorizeClient extends BaseAPIClient {
    static login = (username: string, password: string) => {
        const url = '/auth/';
        const data = {
            username,
            password,
        };

        const promise = AuthorizeClient.client.post<AuthorizeSuccessResponse>(url, data);

        return promise;
    }
}