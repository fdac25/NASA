// Domain model for planets and API response shape consumed by the UI

export interface Planet {
  // Replace with all of the info we retrieve from NASA data and want to display
  _id: string;
  name: string;
  gravity: number;
  water: string;
  gases: string;
  description: string;
  imageUrl?: string;
}

export interface PlanetListResponse {
  planets: Planet[];
}
