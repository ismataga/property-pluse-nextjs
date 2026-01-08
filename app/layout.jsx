import "../assets/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AuthProvider from "../components/AuthProvider";

export const metadata = {
  title: "Property Plus",
  keywords: "real estate, property, homes, apartments, buy, sell, rent",
  description: "Discover Your Dream Property with Property Plus",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body data-new-gr-c-s-check-loaded="14.1267.0" data-gr-ext-installed="">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
