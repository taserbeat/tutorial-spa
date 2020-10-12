import React from 'react';
import { AxiosResponse } from 'axios';

import * as QuestionAPI from './QuestionAPI';

export const APIRequestHandleContext = React.createContext({
    execRequest: (f: () => Promise<AxiosResponse<QuestionAPI.IGetQuestions>>, ...args: any[]) => { },
    isRequesting: false
});

export const APIRequestHandleContextProvider = () => {
    const [isRequesting, setIsRequesting] = React.useState<boolean>(false);
    //const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

    const execRequest = async (requestFunc: () => Promise<AxiosResponse<QuestionAPI.IGetQuestions>>, ...args: any[]) => {
        setIsRequesting(true);
        const response = await requestFunc();
        setIsRequesting(false);

        return response;
    }

    return (
        <APIRequestHandleContext.Provider
            value={
                {
                    isRequesting,
                    execRequest
                }
            }
        />
    )
}