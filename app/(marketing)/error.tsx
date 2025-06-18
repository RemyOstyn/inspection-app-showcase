'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function MarketingError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center space-y-8">
        <Card className="w-full max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl text-destructive">
              Oops! Something went wrong
            </CardTitle>
            <CardDescription className="text-lg">
              We&apos;re experiencing technical difficulties. Our team has been notified and is working to fix this issue.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {process.env.NODE_ENV === 'development' && (
              <div className="rounded-md bg-muted p-4 text-left">
                <p className="text-sm font-mono text-muted-foreground">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={reset} size="lg">
                Try again
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/'}
              >
                Return home
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="text-sm text-muted-foreground">
          <p>Need immediate assistance?</p>
          <p>
            Contact our support team at{' '}
            <a 
              href="mailto:support@inspection-platform.com" 
              className="text-primary hover:underline"
            >
              support@inspection-platform.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}