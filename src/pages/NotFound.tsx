import { Link } from "react-router-dom";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <main className="relative grid min-h-screen place-items-center overflow-hidden px-6">
    <div aria-hidden="true" className="absolute inset-0 -z-10 aurora-bg" />
    <div aria-hidden="true" className="absolute inset-0 -z-10 grid-overlay" />
    <div className="glass-card max-w-md p-10 text-center">
      <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Compass className="h-6 w-6" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-display text-6xl font-bold gradient-text">404</h1>
      <p className="mt-4 text-lg font-semibold">This page doesn't exist</p>
      <p className="mt-2 text-sm text-muted-foreground">
        The link may be outdated. Head back to the portfolio to explore projects, experience and contact details.
      </p>
      <Button asChild className="mt-7 rounded-full">
        <Link to="/">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>
      </Button>
    </div>
  </main>
);

export default NotFound;
