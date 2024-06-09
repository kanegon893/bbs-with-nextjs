import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BBSData } from '../types/types';
import Link from 'next/link';

interface BBSDataProps{
  bbsData: BBSData;
}

const BBSCard = ({bbsData}:BBSDataProps) => {
  const {id, title, content, createdAt, username } = bbsData;

  return (
    <div>
      <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>
        {content}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${id}`}>
          <span className='text-blue-500 cursor-pointer'>Read More</span>
        </Link>
      </CardFooter>
    </Card>
    </div>
  )
}

export default BBSCard
