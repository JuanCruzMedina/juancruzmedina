import React from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-full lg:max-w-screen-lg text-start justify-center">
        {children}
      </div>
    </section>
  );
}
