export type Hotel = GenericHotelInfo & HotelDetailsInfo;

export type GenericHotelInfo = {
  id: string;
  name: string;
  description: string;
  address1: string;
  address2?: string;
  postcode?: string;
  town?: string;
  country?: string;
  countryCode?: string;
  starRating: string;
  facilities?: Array<Facility>;
  telephone?: string;
  email?: string;
  images: Array<Image>;
  checkInHours?: string;
  checkInMinutes?: string;
  checkOutHours?: string;
  checkOutMinutes?: string;
  position?: Position;
};

type Position = {
  latitude?: number;
  longitude?: number;
  timezone?: string;
};

type Occupancy = {
  maxAdults?: number;
  maxChildren?: number;
  maxOverall?: number;
};

export type Image = {
  url: string;
  alt?: string;
};

type Facility = {
  code: string;
  name?: string;
};

export type Room = {
  id: string;
  name: string;
  shortDescription?: string;
  longDescription?: string;
  occupancy: Occupancy;
  disabledAccess?: boolean;
  bedConfiguration?: string;
  images: Array<Image>;
  facilities?: Array<Facility>;
};

type CancellationPolicy = {
  name: string;
  text?: string;
  penalty?: string;
  applicable?: string;
  hour?: string;
  amount?: number;
  days?: number;
};

type RatePlan = {
  id: string;
  shortDescription?: string;
  longDescription?: string;
  prePayment?: string;
  cancellationPolicy?: CancellationPolicy;
  prePaymentValue?: number;
  prePaymentIsPercentage?: boolean;
};

export type HotelDetailsInfo = {
  id: string;
  rooms: Array<Room>;
  ratePlans: Array<RatePlan>;
};
