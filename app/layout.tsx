import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { SiteProvider } from "@/components/providers";
import { copy, profile } from "@/lib/content";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const bootstrap = `(function(){try{
var d=document.documentElement,s=localStorage;
d.dataset.theme=s.getItem('mr-theme')||'dark';
d.lang=s.getItem('mr-locale')||'fr';
}catch(e){d.dataset.theme='dark';d.lang='fr';}})();`;

const siteUrl = (() => {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return new URL("http://localhost:3000");
  try {
    return new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
  } catch {
    return new URL("http://localhost:3000");
  }
})();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: copy.fr.meta.title,
    template: `%s`,
  },
  description: copy.fr.meta.description,
  applicationName: `${profile.firstName} ${profile.lastName}`,
  authors: [{ name: profile.fullName }],
  keywords: [
    "Mandimbisoa Randy",
    "développeur full-stack",
    "développeur back-end",
    "Java",
    "Python",
    "React",
    "Next.js",
    "Laravel",
    "Quarkus",
    "Antananarivo",
    "Madagascar",
  ],
  openGraph: {
    type: "profile",
    locale: "fr_MA",
    alternateLocale: ["en_US"],
    title: copy.fr.meta.title,
    description: copy.fr.meta.description,
    siteName: `${profile.firstName} ${profile.lastName}`,
  },
  twitter: {
    card: "summary_large_image",
    title: copy.fr.meta.title,
    description: copy.fr.meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0518" },
    { media: "(prefers-color-scheme: light)", color: "#f4f1ff" },
  ],
};

export default function RootLayout(props: LayoutProps<"/">) {
  const { children } = props;

  return (
    <html
      lang="fr"
      data-theme="dark"
      className={`${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootstrap }} />
      </head>
      <body className="min-h-full bg-bg text-fg">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
