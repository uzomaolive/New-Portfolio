"use client";

import Loader from "@/components/Loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Loader />
      {children}
    </>
  );
}
