import { fetchWrapper } from 'functions';

type PostProps = {
  id: number;
  title: string;
};

export default async function UsersPage() {
  const { data } = await fetchWrapper<{ data: PostProps[] }>('/example', {
    method: 'GET'
  });

  console.log(data);

  return (
    <>
      <h2>Users</h2>
    </>
  );
}
