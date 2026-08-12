import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "working on | vahrun",
  description:
    "Quit my job to focus on building side projects and making music. Building small tools, plugins, and experiments for people who make things.",
};

export default function WorkingOnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
