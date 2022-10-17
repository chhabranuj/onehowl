import Head from "next/head";
import LoginLayout from "../components/loginLayout/loginLayout";

const Login = () => {

    return (
        <div>
            <Head>
                <title>Login</title>
            </Head>
            <LoginLayout />
        </div>
    );
}

export default Login;