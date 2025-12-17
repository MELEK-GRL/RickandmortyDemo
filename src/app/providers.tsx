'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';
import { Suspense, useState } from 'react';
type ProvidersProps = {
    children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <NuqsAdapter>
            <QueryClientProvider client={queryClient}>
                <Suspense fallback={null}>{children}</Suspense>
            </QueryClientProvider>
        </NuqsAdapter>
    );
}
