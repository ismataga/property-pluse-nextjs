import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For renters"
            buttonInfo={{
              text: "Browse Properties",
              link: "/properties",
              backGroundColor: "bg-black",
            }}
          >
            Find your dream rental property. Bookmark properties and contact
            owners.
          </InfoBox>
          <InfoBox
            heading="For Property Owners"
            backGroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Your Property",
              link: "/properties/add",
              backGroundColor: "bg-blue-500",
            }}
          >
            List your rental property with ease. Reach a wide audience of
            potential renters.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
