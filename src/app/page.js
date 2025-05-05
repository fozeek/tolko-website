import Link from "next/link";
import './page.scss';

export default function Home() {
  return (
    <div className="home">
      <main>
        <Link href="/form">J&apos;estime mon projet</Link>
      </main>
      <footer>
        &copy; 2025 Tolko
      </footer>
    </div>
  );
}
