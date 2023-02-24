import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  console.log(request);
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return NextResponse.json({ data });
}
