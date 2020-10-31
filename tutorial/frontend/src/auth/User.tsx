const isLoggedInKey = 'isLoggedIn';

class User {
    isLoggedIn = () => {
        return this.get(isLoggedInKey) === 'true';
    };

    set = (key: string, value: string) => {
        localStorage.setItem(key, value)
    };

    get = (key: string) => {
        return this.getLocalStorage(key)
    };

    getLocalStorage = (key: string) => {
        const value = localStorage.getItem(key);

        // hack: valueをそのままreturnでもよい
        if (value) {
            return value;
        }
        return null;
    };

    login = async (email: string, password: string) => {
        // todo: ログイン処理を細かく実装する
        // ログイン処理
        // ログインエラー時には、falseを返してもいいし、returnを別の用途で利用したかったら
        // 例外を出しして呼び出し元でcatchしてもいいかと思います。

        this.set(isLoggedInKey, 'true');

        return true;
    };

    logout = async () => {
        if (this.isLoggedIn()) {
            this.set(isLoggedInKey, 'false');

            // ログアウト処理
            //　他に必要な処理があるのならこちら
        }
    };
}

export default new User();
