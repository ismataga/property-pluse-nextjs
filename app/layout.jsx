import "../assets/styles/globals.css";

export const metadata = {
  title: "Property Plus",
  keywords: "real estate, property, homes, apartments, buy, sell, rent",
  description: "Discover Your Dream Property with Property Plus",
};


const MainLayout = ({children}) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
