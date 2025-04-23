import { Inter } from "next/font/google";
import { getSEOTags } from "@/libs/seo";
import ClientLayout from "@/components/LayoutClient";
import Header from "@/components/Header";
import config from "@/config";
import "./globals.css";

const font = Inter({ subsets: ["latin"] });

export const viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: "#d988d7",
  width: "device-width",
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = {
  ...getSEOTags({
    title: "MOS - Mystery, Odyssey, Sanctity | Spiritual Coaching & Gene Keys",
    description:
      "Transform your life through the Way of MOS. Experience deep spiritual coaching, Gene Keys readings, and personalized guidance for your journey of self-discovery and growth.",
    keywords: [
      "spiritual coaching",
      "Gene Keys",
      "personal growth",
      "self-discovery",
      "spiritual guidance",
      "MOS coaching",
      "mystery",
      "odyssey",
      "sanctity",
    ],
    openGraph: {
      title:
        "MOS - Mystery, Odyssey, Sanctity | Spiritual Coaching & Gene Keys",
      description:
        "Transform your life through the Way of MOS. Experience deep spiritual coaching, Gene Keys readings, and personalized guidance for your journey of self-discovery and growth.",
      type: "website",
      locale: "en_US",
      siteName: "MOS",
    },
    twitter: {
      card: "summary_large_image",
      title:
        "MOS - Mystery, Odyssey, Sanctity | Spiritual Coaching & Gene Keys",
      description:
        "Transform your life through the Way of MOS. Experience deep spiritual coaching, Gene Keys readings, and personalized guidance.",
      creator: "@plantingbodhi",
    },
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      <head>
        <link
          rel="icon"
          href="https://cwkokjxznczqdzrqfcpt.supabase.co/storage/v1/object/public/mos-icons//logo%2060.png"
          type="image/png"
        />
      </head>
      <body>
        <Header />
        {/* ClientLayout contains all the client wrappers (Crisp chat support, toast messages, tooltips, etc.) */}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
