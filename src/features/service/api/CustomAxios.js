import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const httpConfig = {
    baseURL: BASE_URL,
    timeout: 45000,
    responseType: 'json',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
    },
    withCredentials: true,
};

const CustomAxios = axios.create(httpConfig)

// 요청 interceptor 추가
CustomAxios.interceptors.request.use(
    config => {
        // 요청을 보내기 전에 로딩 상태 표시 등 전처리 작업을 수행할 수 있음
        // 예시: 로딩 상태 표시
        // showLoadingIndicator();

        return config;
    },
    error => {
        // 요청이 실패한 경우 에러 처리
        return Promise.reject(error);
    }
);

// 응답 interceptor 추가
CustomAxios.interceptors.response.use(
    response => {
        // 응답을 받은 후 처리할 작업을 수행할 수 있음
        // 예시: 로딩 상태 숨기기
        // hideLoadingIndicator();

        return response;
    },
    error => {
        // 응답이 에러인 경우 에러 처리
        return Promise.reject(error);
    }
);

export default CustomAxios;