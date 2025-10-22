'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function QuizPage() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [router]);

  if (!user) return null;

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              📝 Quick Quiz
            </h1>
            <p className="text-gray-600">Test your knowledge with instant quizzes</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Quiz Feature Coming Soon!
            </h3>
            <p className="text-gray-600 mb-6">
              We're working on standalone quiz functionality. For now, you can take quizzes after learning topics.
            </p>
            <button 
              onClick={() => router.push('/learn')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Go to Learn Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}