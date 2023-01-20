import { AxiosError } from 'axios';

export type PeopleProps = {
  id: {
    value: string;
  };
  location: {
    city: string;
  };
  gender: string;
  name: {
    first: string;
    last: string;
  };
  email: string;
  cell: string;
  nat: string;
};

export type ReturnPeopleProps = {
  results: PeopleProps[];
};

export type ErrorProps = {
  data: {
    error: string;
  };
  status: number;
} & AxiosError;
