import axios from 'axios';
import api from 'services/api';

import { PeopleProps, ReturnPeopleProps } from './types';

export const PeopleService = {
  getAll: async function () {
    // try {
    const response = await api.get<ReturnPeopleProps>('?results=20');

    // return response.data.results;
    return response;
    // } catch (err) {
    //   if (axios.isAxiosError(err) && err.response) {
    //     throw new Error(`Status: ${err.response.status} - ${err.message}`);
    //   }
    // }
  },
  getByGender: async function (
    gender: 'female' | 'male'
  ): Promise<PeopleProps[] | undefined> {
    try {
      const response = await api.get<ReturnPeopleProps>(`?gender=${gender}`);

      return response.data.results;
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        throw new Error(`Status: ${err.response.status} - ${err.message}`);
      }
    }
  }
};
