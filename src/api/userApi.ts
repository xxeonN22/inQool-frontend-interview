import BaseApi from '@/api/baseApi';
import { User, UserForm } from '@/types/users';

const USERS_PREFIX = '/users';

async function getSingle(id: string) {
  return BaseApi.getSingle<User>(`${USERS_PREFIX}/${id}`);
}

async function getAll() {
  return BaseApi.getAll<User>(USERS_PREFIX);
}

async function createSingle(payload: UserForm) {
  return BaseApi.postSingle<User>(USERS_PREFIX, payload);
}

async function updateSingle(id: string, payload: UserForm) {
  return BaseApi.patchSingle<User>(`${USERS_PREFIX}/${id}`, payload);
}

async function deleteSingle(id: string) {
  return BaseApi.deleteSingle(`${USERS_PREFIX}/${id}`);
}

const UsersApi = {
  getSingle,
  getAll,
  createSingle,
  updateSingle,
  deleteSingle,
};

export default UsersApi;
