import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import User from './User';

interface LogoutProps {

}

const Logout: React.FC<LogoutProps> = () => {
    useEffect(() => {
        const logout = async () => {
            await User.logout();
        }

        logout();
    }, []);

    return (
        <>
            <Container className="center">
                <Row className="justify-content-md-center">
                    <div>
                        <h2>ログアウトしました</h2>
                        <div className="text-center">
                            <Link to="/login">ログイン画面へ</Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Logout;