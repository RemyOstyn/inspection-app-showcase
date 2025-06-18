import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { NoiseTexture } from "./ui/noise-texture";
import { MeshGradient } from "./ui/mesh-gradient";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative isolate min-h-screen bg-background">
      {/* High-quality gradient background */}
      <div className="fixed inset-0 -z-10">
        {/* Canvas-based mesh gradient for smooth rendering */}
        <MeshGradient className="absolute inset-0" />
        
        {/* SVG gradient with multiple stops for better quality */}
        <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <radialGradient id="top-gradient" cx="50%" cy="0%" r="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
              <stop offset="20%" stopColor="hsl(var(--primary))" stopOpacity="0.10" />
              <stop offset="40%" stopColor="hsl(var(--secondary))" stopOpacity="0.08" />
              <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              <stop offset="80%" stopColor="hsl(var(--secondary))" stopOpacity="0.02" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="bottom-gradient" cx="50%" cy="100%" r="100%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.12" />
              <stop offset="25%" stopColor="hsl(var(--secondary))" stopOpacity="0.08" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
              <stop offset="75%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100%" height="50%" fill="url(#top-gradient)" />
          <rect x="0" y="50%" width="100%" height="50%" fill="url(#bottom-gradient)" />
        </svg>
        
        {/* Noise texture overlay to prevent banding */}
        <NoiseTexture />
      </div>
      
      <Header />
      
      <main className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}