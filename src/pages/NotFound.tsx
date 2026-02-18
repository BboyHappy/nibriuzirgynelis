
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-serif text-6xl font-bold text-primary mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Puslapis nerastas. Grįžkite į pagrindinį puslapį.
          </p>
          <Button asChild variant="default" size="lg">
            <Link to="/" className="inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Grįžti į pradžią
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
