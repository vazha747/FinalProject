import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/header"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <Header />
    </main>
  );
}
