export type Occupancy = {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
};

export type RoomImage = {
  url: string;
  alt: string;
};

export type Facility = {
  code: string;
  name: string;
};

export type Room = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  occupancy: Occupancy;
  disabledAccess: boolean;
  bedConfiguration: string;
  images: RoomImage[];
  facilities: Facility[];
};

export type CancellationPolicy = {
  name: string;
  text: string;
  penalty: string;
  applicable: string;
  amount: number;
  hour: string;
  days?: number;
};

export type RatePlan = {
  id: string;
  shortDescription: string;
  longDescription: string;
  prePayment: string;
  cancellationPolicy: CancellationPolicy;
  prePaymentValue?: number;
  prePaymentIsPercentage?: boolean;
};

export type HotelRooms = {
  rooms: Room[];
  ratePlans: RatePlan[];
};
