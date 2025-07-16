import React, { useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';
import FullScreenLoader from '@/components/FullScreenLoader';

const LoadingDemo: React.FC = () => {
  const [showFullScreen, setShowFullScreen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-600 mb-4 font-serif">
            राजस्थानी लोडिंग स्पिनर डेमो
          </h1>
          <p className="text-xl text-gray-700">
            Rajasthani Loading Spinner Demo
          </p>
        </div>

        {/* Spinner Variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-orange-200 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Default</h3>
            <LoadingSpinner variant="default" size="lg" />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-pink-200 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Mandala</h3>
            <LoadingSpinner variant="mandala" size="lg" />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-yellow-200 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Palace</h3>
            <LoadingSpinner variant="palace" size="lg" />
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-red-200 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Lotus</h3>
            <LoadingSpinner variant="lotus" size="lg" />
          </div>
        </div>

        {/* Size Variations */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-orange-200 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Size Variations</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Small</p>
              <LoadingSpinner variant="mandala" size="sm" />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Medium</p>
              <LoadingSpinner variant="mandala" size="md" />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Large</p>
              <LoadingSpinner variant="mandala" size="lg" />
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Extra Large</p>
              <LoadingSpinner variant="mandala" size="xl" />
            </div>
          </div>
        </div>

        {/* Full Screen Demo */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-orange-200 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Full Screen Loader</h2>
          <p className="text-gray-600 mb-6">
            Click the button below to see the full screen loading experience
          </p>
          <button
            onClick={() => setShowFullScreen(true)}
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 border-2 border-orange-300 shadow-lg"
          >
            Show Full Screen Loader
          </button>
        </div>

        {/* Usage Examples */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-orange-200 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Usage Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Basic Usage</h3>
              <code className="text-sm text-gray-600">
                {`<LoadingSpinner variant="mandala" size="md" />`}
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">With Custom Message</h3>
              <code className="text-sm text-gray-600">
                {`<LoadingSpinner 
  variant="palace" 
  size="lg"
  message="डेटा लोड हो रहा है..." 
/>`}
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Full Screen</h3>
              <code className="text-sm text-gray-600">
                {`<FullScreenLoader 
  variant="lotus"
  message="पृष्ठ लोड हो रहा है..." 
/>`}
              </code>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">In Components</h3>
              <code className="text-sm text-gray-600">
                {`{isLoading && <LoadingSpinner variant="default" />}`}
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Loader */}
      {showFullScreen && (
        <div className="relative">
          <FullScreenLoader variant="mandala" />
          <button
            onClick={() => setShowFullScreen(false)}
            className="fixed top-4 right-4 z-50 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default LoadingDemo;