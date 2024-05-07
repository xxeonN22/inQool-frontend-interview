import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://inqool-interview-api.vercel.app/api',
});

async function getAll<T>(path: string) {
  const response = await axiosInstance.get<T[]>(path);
  return response.data;
}

async function getSingle<T>(path: string) {
  const response = await axiosInstance.get<T>(path);
  return response.data;
}

async function postSingle<T>(path: string, payload: unknown) {
  const response = await axiosInstance.post<T>(path, payload);
  return response.data;
}

async function patchSingle<T>(path: string, payload: unknown) {
  const response = await axiosInstance.patch<T>(path, payload);
  return response.data;
}

async function deleteSingle<T>(path: string) {
  const response = await axiosInstance.delete<T>(path);
  return response.data;
}

const BaseApi = {
  get: axiosInstance.get,
  getAll,
  getSingle,
  post: axiosInstance.post,
  postSingle,
  put: axiosInstance.put,
  patchSingle,
  delete: axiosInstance.delete,
  deleteSingle,
};

export default BaseApi;
