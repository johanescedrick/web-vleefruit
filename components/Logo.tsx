import Image from "next/image";

// Navbar: wordmark without tagline (on light background).
// Footer: full logo with tagline (has its own dark green background, matched by bg-forest).
export default function Logo({ variant = "nav" }: { variant?: "nav" | "footer" }) {
  if (variant === "footer") {
    return (
      <Image
        src="/logo-dark.png"
        alt="VleeFruit — Smart fruit sorting, AI + IoT"
        width={1607}
        height={437}
        className="h-auto w-[260px] sm:w-[300px]"
      />
    );
  }
  return (
    <Image
      src="/logo-light-nav.png"
      alt="VleeFruit"
      width={1607}
      height={437}
      priority
      className="h-9 w-auto"
    />
  );
}
