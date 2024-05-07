import BaseApi from './baseApi';
import { Animal, AnimalForm } from '@/types/animals';

const ANIMALS_PREFIX = '/animals';

async function getSingle(id: string) {
  return BaseApi.getSingle<Animal>(`${ANIMALS_PREFIX}/${id}`);
}

async function getAll() {
  return BaseApi.getAll<Animal>(ANIMALS_PREFIX);
}

async function createSingle(payload: AnimalForm) {
  return BaseApi.postSingle<Animal>(ANIMALS_PREFIX, payload);
}

async function updateSingle(id: string, payload: AnimalForm) {
  return BaseApi.patchSingle<Animal>(`${ANIMALS_PREFIX}/${id}`, payload);
}

async function deleteSingle(id: string) {
  return BaseApi.deleteSingle(`${ANIMALS_PREFIX}/${id}`);
}

const AnimalsApi = {
  getSingle,
  getAll,
  createSingle,
  updateSingle,
  deleteSingle,
};

export default AnimalsApi;
