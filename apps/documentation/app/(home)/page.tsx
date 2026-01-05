import { IconsExplorer } from '$/components/icons-explorer';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1">
      <h1 className="text-2xl font-bold mb-4">Welcome to Solaris Icons</h1>
      <Link href="/docs" className="font-medium underline">
        Documentation
      </Link>

      <IconsExplorer />
    </div>
  );
}
