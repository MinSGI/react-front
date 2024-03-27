import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {IntlProvider} from "react-intl";
import enUsMsg from "./locale/en-US.json";
import koMsg from "./locale/ko.json";
import zhMsg from "./locale/zh.json";

const root = ReactDOM.createRoot(document.getElementById('root'));

const locale = localStorage.getItem("locale") ?? "ko";
const messages = { "en-US": enUsMsg, ko: koMsg, zh: zhMsg }[locale];

root.render(
  <IntlProvider locale={locale} messages={messages}>
    <App />
  </IntlProvider>
);