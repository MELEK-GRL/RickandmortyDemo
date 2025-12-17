'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { ReactNode, useState } from 'react';

type ProvidersProps = {
    children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <NuqsAdapter>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </NuqsAdapter>
    );
}
