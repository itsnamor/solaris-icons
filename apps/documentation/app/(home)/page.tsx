import { IconsExplorer } from '$/components/icons-explorer';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <IconsExplorer />
      </Suspense>
    </div>
  );
}
