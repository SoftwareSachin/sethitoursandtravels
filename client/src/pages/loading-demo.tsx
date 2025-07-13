import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner, FullScreenLoader, InlineLoader } from "@/components/ui/loading-spinner";
import { RajasthaniLoadingSpinner, RajasthaniMandalaaSpinner, RajasthaniPalaceSpinner, RajasthaniTextSpinner } from "@/components/rajasthani-loading-spinner";

export default function LoadingDemo() {
  const [showFullScreen, setShowFullScreen] = useState(false);

  const spinnerVariants = [
    { name: "Default Rajasthani", component: RajasthaniLoadingSpinner, variant: "default" },
    { name: "Mandala Pattern", component: RajasthaniMandalaaSpinner, variant: "mandala" },
    { name: "Palace Silhouette", component: RajasthaniPalaceSpinner, variant: "palace" },
    { name: "Text with Spinner", component: RajasthaniTextSpinner, variant: "text" },
  ];

  const sizes = ["sm", "md", "lg", "xl"] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text mb-4">
            Rajasthani Loading Spinners
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Custom loading spinners inspired by Rajasthani art, culture, and architectural elements
          </p>
        </div>

        {/* Individual Spinner Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {spinnerVariants.map((spinner, index) => (
            <Card key={index} className="border-2 border-orange-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-semibold text-orange-800">
                  {spinner.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-8">
                <div className="flex flex-wrap justify-center gap-8">
                  {sizes.map((size) => (
                    <div key={size} className="flex flex-col items-center space-y-2">
                      <div className="p-4 bg-white rounded-lg shadow-inner">
                        {spinner.variant === "text" ? (
                          <RajasthaniTextSpinner text={`Loading ${size}...`} />
                        ) : (
                          <spinner.component size={size} />
                        )}
                      </div>
                      <span className="text-sm text-gray-500 capitalize">{size}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Unified LoadingSpinner Component */}
        <Card className="border-2 border-pink-200 shadow-lg mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-pink-800">
              Unified LoadingSpinner Component
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {spinnerVariants.map((spinner, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <h3 className="font-medium text-gray-700">{spinner.name}</h3>
                  <div className="p-6 bg-white rounded-lg shadow-inner">
                    <LoadingSpinner variant={spinner.variant as any} size="lg" />
                  </div>
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                    variant="{spinner.variant}"
                  </code>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Inline Loaders */}
        <Card className="border-2 border-red-200 shadow-lg mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-red-800">
              Inline Loaders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-inner">
                <InlineLoader variant="default" size="md" />
                <p className="text-center text-sm text-gray-500 mt-2">Default</p>
              </div>
              <div className="bg-white rounded-lg shadow-inner">
                <InlineLoader variant="mandala" size="md" />
                <p className="text-center text-sm text-gray-500 mt-2">Mandala</p>
              </div>
              <div className="bg-white rounded-lg shadow-inner">
                <InlineLoader variant="palace" size="md" />
                <p className="text-center text-sm text-gray-500 mt-2">Palace</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Full Screen Loader Demo */}
        <Card className="border-2 border-yellow-200 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-yellow-800">
              Full Screen Loader
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              onClick={() => setShowFullScreen(true)}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 text-lg font-semibold"
            >
              Show Full Screen Loader
            </Button>
            <p className="text-gray-600 mt-4">
              Click to preview the full screen loading overlay
            </p>
          </CardContent>
        </Card>

        {/* Code Examples */}
        <Card className="border-2 border-green-200 shadow-lg mt-12">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-semibold text-green-800">
              Usage Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 mb-2">Basic Usage</h3>
                <pre className="text-sm text-gray-600 overflow-x-auto">
{`import { LoadingSpinner } from "@/components/ui/loading-spinner";

// Different variants
<LoadingSpinner variant="default" size="md" />
<LoadingSpinner variant="mandala" size="lg" />
<LoadingSpinner variant="palace" size="xl" />
<LoadingSpinner variant="text" text="Loading..." />`}
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 mb-2">Full Screen Loader</h3>
                <pre className="text-sm text-gray-600 overflow-x-auto">
{`import { FullScreenLoader } from "@/components/ui/loading-spinner";

<FullScreenLoader text="Loading Rajasthan Tours..." />`}
                </pre>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-medium text-gray-700 mb-2">Inline Loader</h3>
                <pre className="text-sm text-gray-600 overflow-x-auto">
{`import { InlineLoader } from "@/components/ui/loading-spinner";

<InlineLoader variant="mandala" size="sm" />`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Full Screen Loader Overlay */}
      {showFullScreen && (
        <FullScreenLoader text="Loading Beautiful Rajasthan..." />
      )}

      {/* Auto-hide full screen loader after 3 seconds */}
      {showFullScreen && setTimeout(() => setShowFullScreen(false), 3000)}
    </div>
  );
}