import { MapPin } from "lucide-react";

const MapComponent = () => {
  const address = "8 the green #23342 Dover, DE, 19901, United States";
  const encodedAddress = encodeURIComponent(address);

  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="bg-redline/10 h-12 w-12 rounded-full flex items-center justify-center mr-4">
          <MapPin className="text-redline h-5 w-5" />
        </div>
        <div>
          <p className="text-sm text-blueline-light">Office Location</p>
          <p className="font-medium text-blueline-dark">{address}</p>
        </div>
      </div>
      
      <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
        <iframe
          title="Redline Outsourcing Solution Location"
          src={`https://maps.google.com/maps?q=${encodedAddress}&hl=en&z=15&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default MapComponent; 