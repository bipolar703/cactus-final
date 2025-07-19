import { Button } from '@/components/ui/button';

export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
    <div className="text-center p-8 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
      <p className="text-gray-300 mb-6 text-sm">{error.message}</p>
      <Button
        onClick={resetErrorBoundary}
        className="bg-jaded-green-600 hover:bg-jaded-green-700 px-6 py-3 rounded-lg font-medium transition-colors"
      >
        Try again
      </Button>
    </div>
  </div>
);
