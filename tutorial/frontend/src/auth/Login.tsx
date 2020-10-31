import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Alert, FormControl } from 'react-bootstrap';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import User from './User';

// https://qiita.com/taneba/items/b50078e1ac9d1971d413
interface LoginProps extends RouteComponentProps {

}

type LoginForm = {
    email: string
    password: string
    errMessage: string
}

const defaultLoginForm: LoginForm = {
    email: '',
    password: '',
    errMessage: ''
}

const useLoginForm = (initial: LoginForm = defaultLoginForm) => {
    const [loginForm, setLoginForm] = useState<LoginForm>(initial);
    const setErrorMsg = () => {
        setLoginForm({
            ...initial,
            errMessage: 'メールアドレスまたはパスワードが違います',
        });
    }

    return { loginForm, setLoginForm, setErrorMsg };
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
    const { loginForm, setLoginForm, setErrorMsg } = useLoginForm();

    // https://kamocyc.hatenablog.com/entry/2020/08/04/191543
    const handleChange = (e: React.ChangeEvent<typeof FormControl & HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
    }

    const click = async () => {
        try {
            await User.login(loginForm.email, loginForm.password);
            props.history.push({ pathname: 'polls' });
        } catch (e) {
            setErrorMsg();
        }
    }

    return (
        <Container className="center">
            <Row className="justify-content-md-center">
                <Form>
                    {loginForm.errMessage && (
                        <Alert variant="danger">{loginForm.errMessage}</Alert>
                    )}
                    <p>
                        <b>ログイン</b>
                    </p>
                    <Form.Group controlId="email">
                        <Form.Label>メールアドレス</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="メールアドレスを入力してください"
                            onChange={handleChange}
                            value={loginForm.email}
                        />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>パスワード</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="パスワードを入力してください"
                            onChange={handleChange}
                            value={loginForm.password}
                        />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={click}>
                        ログイン
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default withRouter(Login);