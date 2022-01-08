import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
import getToken from "./getToken";
export interface NetworkError {
  status: number;
  message: null | string;
}
const ApiContainer = (instance: AxiosInstance) => {
  instance.interceptors.request.use(async (config) => {
    const authorization = await getToken();
    if (config?.headers) {
      config.headers["content-type"] = "application/json; charset=utf-8";
      config.headers["X-Requested-With"] = "XMLHttpRequest";
      config.headers["Accept"] = "*/*";
      if (authorization) config.headers["authorization"] = authorization;
    }
    return config;
  });

  const getError = (error: AxiosError): NetworkError => {
    return {
      status: error.response?.status || 0,
      message:
        error.response?.statusText || error.response?.data.message || null,
    };
  };

  const get = async <T = any>(
    url: string,
    option: AxiosRequestConfig = {}
  ): Promise<{ status: number; data: T }> => {
    try {
      const { status, data } = await instance.get<T>(url, { ...option });
      return {
        status,
        data,
      };
    } catch (error) {
      throw getError(error as AxiosError);
    }
  };

  const post = async <T = any, D = any>(
    url: string,
    data?: D,
    option: AxiosRequestConfig = {}
  ) => {
    try {
      const { status, data: resData } = await instance.post<
        T,
        AxiosResponse<T>,
        D
      >(url, data, { ...option });
      return {
        status,
        data: resData,
      };
    } catch (error) {
      throw getError(error as AxiosError);
    }
  };
  return {
    get,
    post,
  };
};

export default ApiContainer;
