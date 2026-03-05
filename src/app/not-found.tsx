import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center px-5 text-center">
      <p className="font-logo text-sm tracking-[0.15em] text-brand-green">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-gray-400">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button
        asChild
        size="lg"
        className="mt-8 rounded-full bg-brand-green px-8 text-white hover:bg-brand-gold hover:text-[#0a0a0a]"
      >
        <a href="/">Go Home</a>
      </Button>
    </div>
  );
}
