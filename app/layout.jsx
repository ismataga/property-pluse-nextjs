import "../assets/styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Property Plus",
  keywords: "real estate, property, homes, apartments, buy, sell, rent",
  description: "Discover Your Dream Property with Property Plus",
};


const MainLayout = ({children}) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
