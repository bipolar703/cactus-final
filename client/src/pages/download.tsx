import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Code, GitBranch, Package, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

export default function DownloadPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [downloadReady, setDownloadReady] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    setIsGenerating(true);

    try {
      // Call the source package generation API
      const response = await fetch('/api/download-source', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Create blob from response
        const blob = await response.blob();

        // Create download link
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cactus-media-source-code.zip';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);

        setDownloadReady(true);
        toast({
          title: 'Download Started',
          description: 'Your source code package is being downloaded.',
        });
      } else {
        // Get error details from response
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        console.error('Server error:', errorData);
        throw new Error(errorData.error || 'Failed to generate package');
      }
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: 'Download Failed',
        description:
          error.message || 'There was an error generating the source package. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const features = [
    {
      icon: <Code className="h-4 w-4" />,
      title: 'Complete Source Code',
      description: 'Full React + TypeScript frontend and Express.js backend',
    },
    {
      icon: <FileText className="h-4 w-4" />,
      title: 'Comprehensive Documentation',
      description: 'Detailed README, development guide, and inline comments',
    },
    {
      icon: <Package className="h-4 w-4" />,
      title: 'Production Ready',
      description: 'Optimized build process and deployment configurations',
    },
    {
      icon: <GitBranch className="h-4 w-4" />,
      title: 'Version Control Ready',
      description: 'Git-friendly structure with proper .gitignore',
    },
  ];

  const techStack = [
    { name: 'React 18', color: 'bg-blue-100 text-blue-800' },
    { name: 'TypeScript', color: 'bg-blue-100 text-blue-800' },
    { name: 'Tailwind CSS', color: 'bg-cyan-100 text-cyan-800' },
    { name: 'Framer Motion', color: 'bg-purple-100 text-purple-800' },
    { name: 'Express.js', color: 'bg-green-100 text-green-800' },
    { name: 'Vite', color: 'bg-yellow-100 text-yellow-800' },
    { name: 'shadcn/ui', color: 'bg-gray-100 text-gray-800' },
    { name: 'Drizzle ORM', color: 'bg-emerald-100 text-emerald-800' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="h-4 w-4" />
            Source Code Download
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cactus Media Group
            <span className="text-emerald-600 block">Complete Source Code</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Download the complete, production-ready source code with comprehensive documentation,
            clean architecture, and everything you need to continue development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5 text-emerald-600" />
                  What's Included
                </CardTitle>
                <CardDescription>
                  Complete development package with everything you need
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-emerald-600 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="font-medium text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Technology Stack</CardTitle>
                <CardDescription>
                  Modern, scalable technologies for robust development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <Badge key={index} variant="secondary" className={tech.color}>
                      {tech.name}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Package Size</span>
                    <span className="font-medium">~2-5 MB</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Files Included</span>
                    <span className="font-medium">100+ files</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">License</span>
                    <span className="font-medium">Development Use</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Ready to Download?</CardTitle>
              <CardDescription>Get the complete source code package instantly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {downloadReady && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Download completed successfully!</span>
                </motion.div>
              )}

              <Button
                onClick={handleDownload}
                disabled={isGenerating}
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating Package...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Download Source Code
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 leading-relaxed">
                By downloading, you agree to use this code for development and educational purposes.
                The Cactus Media Group brand and assets remain proprietary.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start Guide</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">
                1
              </div>
              <h3 className="font-semibold mb-2">Extract & Install</h3>
              <p className="text-sm text-gray-600">
                Extract the ZIP file and run{' '}
                <code className="bg-gray-100 px-1 rounded">npm install</code>
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">
                2
              </div>
              <h3 className="font-semibold mb-2">Start Development</h3>
              <p className="text-sm text-gray-600">
                Run <code className="bg-gray-100 px-1 rounded">npm run dev</code> to start the
                development server
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-sm font-bold mb-3">
                3
              </div>
              <h3 className="font-semibold mb-2">Build & Deploy</h3>
              <p className="text-sm text-gray-600">
                Use <code className="bg-gray-100 px-1 rounded">npm run build</code> for production
                builds
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
