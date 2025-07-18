// app/[username]/page.tsx
import React from 'react';

export default function UserPage({
  params,
}: {
  params: { username: string };
}) {
  return <div>Profile page for {params.username}</div>;
}
