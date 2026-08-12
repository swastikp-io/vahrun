import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "work with me | vahrun",
  description:
    "Get in touch with vahrun for music production, mixing, mastering, remixing, and audio collaborations.",
};

export default function WorkWithMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
