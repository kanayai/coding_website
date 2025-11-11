import { getSortedPostsData } from '@/lib/posts';
import { NextResponse } from 'next/server';

export async function GET() {
  const allPostsData = await getSortedPostsData();
  return NextResponse.json(allPostsData);
}
