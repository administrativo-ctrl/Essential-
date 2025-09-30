"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const nav = [
  { href: "/", label: "Início" },
  { href: "/services", label: "Serviços" },
  { href: "/cases", label: "Cases" },
  { href: "/about", label: "Sobre" },
  { href: "/content", label: "Conteúdos" },
  { href: "/contact", label: "Contato" },
  { href: "/portal/login", label: "Portal do Cliente" }
];

export default function Header(){
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-essential-gray100">
      <a href="#main" className="skip-link">Pular para o conteúdo</a>
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3" aria-label="Grupo Essential - Home">
          <Image src="/logo.svg" alt="Grupo Essential" width={160} height={32} />
        </Link>
        <nav aria-label="Principal" className="hidden md:flex gap-3">
          {nav.map(item => (
            <Link key={item.href} href={item.href}
              className={`px-3 py-2 rounded-lg hover:bg-essential-gray100 ${path===item.href?'bg-essential-gray100':''}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <details>
            <summary className="cursor-pointer px-3 py-2 rounded-lg border">Menu</summary>
            <div className="mt-2 flex flex-col gap-2 bg-white p-2 rounded-lg border">
              {nav.map(item => (
                <Link key={item.href} href={item.href} className="px-3 py-2 rounded-lg hover:bg-essential-gray100">{item.label}</Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
