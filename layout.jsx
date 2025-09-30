import Link from "next/link";

export default function PortalLayout({ children }){
  return (
    <section className="container py-8">
      <nav className="flex flex-wrap gap-3 mb-6">
        <Link className="badge" href="/portal/dashboard">Dashboard</Link>
        <Link className="badge" href="/portal/briefings">Briefings</Link>
        <Link className="badge" href="/portal/approvals">Aprovações</Link>
        <Link className="badge" href="/portal/reports">Relatórios</Link>
        <Link className="badge" href="/portal/courses">Cursos</Link>
        <Link className="badge" href="/portal/profile">Perfil</Link>
      </nav>
      {children}
    </section>
  );
}
