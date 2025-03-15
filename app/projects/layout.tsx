import React from "react";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col">
      <div className="container mx-auto max-w-7xl lg:max-w-screen-lg">
        {children}
      </div>
    </section>
  );
}
