import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PeopleService } from 'services/http/people';

const getPeople = () => {
  const response = PeopleService.getAll().then((response) => {
    if (response.status === 404) {
      notFound();
    }

    return response.data.results;
  });

  return response;
};

export default async function People() {
  const people = await getPeople();

  // notFound();
  // throw new Error('asasasas as as a s');

  return (
    <>
      <h2 className="text-fuchsia-400">People</h2>

      <Link href="/" className="py-2">
        Home
      </Link>

      {people?.map((people) => (
        <div key={people.cell}>{people.name.first}</div>
      ))}
    </>
  );
}
