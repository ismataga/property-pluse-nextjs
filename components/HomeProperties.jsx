import Link from "next/link";
import PropertyCard from "./PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";

const HomeProperties =async () => {
  await connectDB();
  const recentProperties = await Property.find({}).sort({ createdAt: -1 }).lean();


  return (
    <>
      <section>
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h2 className="text-3xl font-bold mb-6 text-blue-700 mb-6 text-center">
            Recent Properties
          </h2>
          {recentProperties.length === 0 ? (
            <p>No properties found</p>
          ) : (
              <div className="grid grid-cols-3 md:grid-cols-3" style={{gap: '15px'}}>
                {recentProperties.map((property) => (
                  <PropertyCard key={property._id} property={property} />
                ))}
              </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-lg my-10">
        <Link
          href="/properties"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full block"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};
export default HomeProperties;
