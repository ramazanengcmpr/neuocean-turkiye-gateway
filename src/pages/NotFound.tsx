import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6 px-4">
        <div className="gradient-primary bg-clip-text text-transparent">
          <h1 className="text-8xl font-bold">404</h1>
        </div>
        <h2 className="text-3xl font-semibold">Sayfa Bulunamadı</h2>
        <p className="text-xl text-muted-foreground max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <Button asChild size="lg" className="gradient-primary">
          <Link to="/">
            <Home className="mr-2 h-5 w-5" />
            Ana Sayfaya Dön
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
