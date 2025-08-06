import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="mt-8 container mx-auto p-4">
        <h2 className="text-xl font-bold">Welcome to AI Builders</h2>
        <p className="mt-4">Explore the world of AI builders and learn how they can help you create amazing applications.</p>
      </main>
    </div>
  );
};

export default Home;