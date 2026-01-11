import Link from "next/link";
import ThemeToggle from "@/components/theme-toggle";
import { Instagram, Youtube } from "lucide-react";

// Custom X/Twitter icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = {
  connect: [
    { label: "Contact", href: "/contact" },
    { label: "Instagram", href: "https://www.instagram.com/thecodingjesusquant/", external: true },
    { label: "YouTube", href: "https://www.youtube.com/c/CodingJesus", external: true },
    { label: "𝕏", href: "https://x.com/getcrackedio", external: true },
  ],
  company: [
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Contribute", href: "/contribute" },
    { label: "Affiliate program", href: "/affiliate" },
  ],
  resources: [
    { label: "Recommended Books", href: "https://www.amazon.com/shop/thecodingjesus", external: true },
    { label: "1-on-1 Coaching", href: "/scheduling" },
  ],
};

export default function Footer() {
  return (
    <footer className="mx-auto w-full px-4 sm:px-6 lg:px-8 relative max-w-7xl py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column - Logo, Tagline, Theme Toggle */}
        <div className="space-y-2">
          <Link 
            href="/" 
            className="flex items-center gap-2 font-mono font-semibold text-base duration-300 ease-in-out hover:opacity-80"
            aria-label="Goto homepage"
          >
            
            LogoTipas
          </Link>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Smash the knowledge-round. Land your dream job.
          </p>
          
          <ThemeToggle />
        </div>

        {/* Right Column - Link Grid */}
        <div className="grid grid-cols-2 gap-8 font-medium md:grid-cols-3">
          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm text-gray-900 dark:text-gray-100">
              Connect
            </h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    })}
                    className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm text-gray-900 dark:text-gray-100">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-medium text-sm text-gray-900 dark:text-gray-100">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...(link.external && {
                      target: "_blank",
                      rel: "noopener noreferrer"
                    })}
                    className="text-gray-600 dark:text-gray-400 transition-colors duration-300 hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}