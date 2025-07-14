'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Error({
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
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-destructive">
            Something went wrong
          </CardTitle>
          <CardDescription>
            We encountered an unexpected error. Please try again or contact support if the problem persists.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {process.env.NODE_ENV === 'development' && (
            <div className="rounded-md bg-muted p-4">
              <p className="text-sm font-mono text-muted-foreground">
                {error.message}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Button onClick={reset} className="w-full cursor-pointer">
              Try again
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.location.href = '/'}
              className="w-full cursor-pointer"
            >
              Go home
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}