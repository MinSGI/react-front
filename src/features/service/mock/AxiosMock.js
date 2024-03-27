import CustomAxios from "../api/CustomAxios";
import MockAdapter from "axios-mock-adapter";

const AxiosMock = (url, axiosInstance) => {
    const mockAdapter = new MockAdapter(CustomAxios);
    mockAdapter.onGet()
}

export default AxiosMock;