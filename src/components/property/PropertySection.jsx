// importing react and component dependencies for the PropertySection component
import React from "react";

// importing svg 
import { BedIcon, BathIcon} from '../../assets/svg/Icons'

const properties = [
  {
    id: 1,
    name: "Modern Design Villa",
    price: "$3000.00",
    image: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    bednumber: "4",
    bathnumber: "6",
    bed: " Bedrooms",
    bath: " Bathrooms",
  },
  {
    id: 2,
    name: "Etha Su Casa Valley",
    price: "$25000.00",
    image: "https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg",
    bednumber: "3",
    bathnumber: "2",
    bed: " Bedrooms",
    bath: " Bathrooms",
  },
  {
    id: 3,
    name: "Bhawani Porshi Nagar",
    price: "$5000.00",
    image: "https://cdn.pixabay.com/photo/2014/11/11/22/54/living-room-527646_1280.jpg",
    bednumber: "5",
    bathnumber: "3",
    bed: " Bedrooms",
    bath: " Bathrooms",
  },
  {
    id: 4,
    name: "Orchard Amritaya",
    price: "$6000.00",
    image: "https://cdn.pixabay.com/photo/2018/01/17/15/52/driveway-3088488_1280.jpg",
    bednumber: "3",
    bathnumber: "2",
    bed: " Bedrooms",
    bath: " Bathrooms",
  },
  {
    id: 5,
    name: "Chitrakatha Nagar",
    price: "$3000.00",
    image: "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg",
    bednumber: "2",
    bathnumber: "3",
    bed: " Bedrooms",
    bath: " Bathrooms",
  },
  {
    id: 6,
    name: "Chitrakatha Nagar",
    price: "$2000.00",
    image: "https://cdn.pixabay.com/photo/2018/02/13/11/09/home-3150500_1280.jpg",
    bednumber: "4",
    bathnumber: "2",
    bed: " Bedrooms",
    bath: " Bathrooms",
  },
  // Add more properties here...
];

const PropertyCard = ({ property }) => {
  return (
    
      < div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
      <div className="p-4 bg-white rounded-lg border border-gray-300">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-64 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{property.name}</h4>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">{property.price}</span> /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          <BedIcon />
          <p>
            <span className="font-bold text-gray-900">{property.bednumber}</span>{property.bed}
          </p>
        </div>
        <div className="flex items-center">
          <BathIcon />
          <p>
            <span className="font-bold text-gray-900">{property.bathnumber}</span>{property.bath}
          </p>
        </div>
      </div>
    </div>
    
    
    </div>
  );
};

const PropertySection = () => {
  return (
    <section className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
};

export default PropertySection;
