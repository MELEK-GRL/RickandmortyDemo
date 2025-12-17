'use client';

import Lottie from 'lottie-react';

import loading from '@/assets/lottie/loading.json';

export default function LottieLoading() {
    return (
        <div className="flex h-full items-center justify-center">
            <div className="w-40">
                <Lottie animationData={loading} loop />
            </div>
        </div>
    );
}
