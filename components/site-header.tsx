import Link from "next/link";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-content">
        <Link className="wordmark" href="/" aria-label="Harbor Health home">Harbor Health</Link>
        <nav aria-label="Primary navigation">
          <ul className="navigation-list">
            {navigation.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
}