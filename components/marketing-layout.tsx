import { Header } from "./layout/header";
import { Footer } from "./layout/footer";
import { FloatingCTA } from "./ui/floating-cta";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="relative min-h-screen bg-background">
      <Header />
      
      <main>
        {children}
      </main>
      
      <Footer />
      <FloatingCTA />
    </div>
  );
}