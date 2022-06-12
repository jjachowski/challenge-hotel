export type Facility = {
  code: string;
};

export type HotelImage = {
  url: string;
  alt: string;
};

export type Position = {
  latitude: string;
  longitude: string;
  timezone: string;
};

export type Hotel = {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  countryCode: string;
  starRating: string;
  facilities: Facility[];
  telephone: string;
  email: string;
  images: HotelImage[];
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  position: Position;
};
