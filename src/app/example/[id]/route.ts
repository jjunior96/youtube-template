import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  redirect('https://www.devjuniorplus.com.br/');
}
