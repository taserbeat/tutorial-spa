import axios from 'axios';

export default class BaseAPIClient {
    // fix: リクエスト先のURLを開発/テスト/本番の各環境に柔軟に切り替えるような設定に変更
    static readonly baseUrl =
        process.env.NODE_ENV === 'production' ? '/api/1.0' : 'http://localhost:8000/api/1.0';

    protected static client = axios.create({
        baseURL: BaseAPIClient.baseUrl
    })
}