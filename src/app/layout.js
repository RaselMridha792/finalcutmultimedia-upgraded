import "./globals.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

// ক্লায়েন্টের ব্র্যান্ড অনুযায়ী মেটাডেটা আপডেট
export const metadata = {
  metadataBase: new URL("https://finalcutmultimedia.com"),
  title: {
    default: "Video Production Company in Charlotte NC | Final Cut Multimedia",
    template: "%s | Final Cut Multimedia",
  },
  description:
    "Professional video production, event coverage, photography, drone cinematography, editing, and monthly content creation for businesses in Charlotte, NC and across North Carolina.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="antialiased"
    >
      <body suppressHydrationWarning className="bg-dark-bg text-white min-h-screen flex flex-col">
        {/* পুরো অ্যাপকে স্মুথ স্ক্রলিংয়ের আওতায় আনা হলো */}
        <SmoothScrollProvider>
          
          {/* আপনার shared ফোল্ডারের হেডার */}
          <Header />
          
          {/* মূল কন্টেন্ট এরিয়া */}
          <main className="flex-grow">
            {children}
          </main>
          <Footer></Footer>
       
          
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
