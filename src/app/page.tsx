'use client';

export default function Home() {
  const handleButtonClick = () => {
    alert('Hello! You clicked the blue button!');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-8">
          Hello
        </h1>

        <button
          onClick={handleButtonClick}
          className="px-8 py-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
        >
          Click Me
        </button>
      </div>
    </main>
  );
}