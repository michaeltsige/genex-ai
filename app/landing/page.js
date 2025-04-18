'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function LandingPage() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // TODO: replace with real auth token logic
    axios
      .get('http://localhost:5000/protected', { withCredentials: true })
      .then((res) => setUserData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Genex AI</h1>
      {userData ? (
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(userData, null, 2)}
        </pre>
      ) : (
        <p>Loading your data…</p>
      )}
    </div>
  );
}
