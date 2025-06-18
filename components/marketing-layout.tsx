import { Header } from "./layout/header";
import { Footer } from "./layout/footer";

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
    </div>
  );
}