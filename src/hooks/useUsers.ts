/* eslint-disable @typescript-eslint/return-await */
import { useQuery } from '@tanstack/react-query';
import UsersApi from '@/api/userApi';

const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => UsersApi.getAll(),
  });
};

export default useUsers;
