import "../assets/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Property Plus",
  keywords: "real estate, property, homes, apartments, buy, sell, rent",
  description: "Discover Your Dream Property with Property Plus",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
