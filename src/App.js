import logo from './logo.svg';
import './App.css';
import {FormattedMessage} from "react-intl";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FormattedMessage id={'title'} />
        <FormattedMessage
            id="info"
            defaultMessage="메시지를 찾을 수 없습니다. (locale: {locale})"
            values={{ locale: localStorage.getItem("locale") }}
        />
      </header>
    </div>
  );
}

export default App;
