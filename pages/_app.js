import '../styles/globals.css';
import { Provider } from "react-redux";
import store from "../components/store/store";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps }}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default App;
