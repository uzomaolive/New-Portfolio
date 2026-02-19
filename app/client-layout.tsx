"use client";

import { useEffect, useState } from 'react';
import Loader from "@/components/Loader";
import { Navigation } from "@/components/Navigation";
import { AnimatePresence } from 'motion/react';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navigation />
          {children}
        </>
      )}
    </>
  );
}
