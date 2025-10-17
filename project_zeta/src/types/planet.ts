export interface Planet {
  // Replace with all of the info we retrieve from NASA data and want to display
  id: string;
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
