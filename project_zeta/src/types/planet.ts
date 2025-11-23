// Domain model for planets and API response shape consumed by the UI

export interface Planet {
  // Replace with all of the info we retrieve from NASA data and want to display
  _id: string;
  name: string;
  earth_similarity_score: number;
  mass_kg: string; 
  volume_km3: string;
  density_kg_km3: string;
  gravity_m_s2: number;
  high_temp_c: number; 
  low_temp_c: number; 
  atmos_pressure_mbar: number; 
  atmos_N: number; 
  atmos_O: number; 
  atmos_CO2: number; 
  atmos_CH4: number; 
  atmos_H: number; 
  description: string;
  mass_kg_earthAdjusted: number; 
  volume_km3_earthAdjusted: number;
  density_kg_km3_earthAdjusted: number;
  gravity_m_s2_earthAdjusted: number;
  high_temp_c_earthAdjusted: number; 
  low_temp_c_earthAdjusted: number; 
  atmos_pressure_mbar_earthAdjusted: number; 
  atmos_N_earthAdjusted: number; 
  atmos_O_earthAdjusted: number; 
  atmos_CO2_earthAdjusted: number; 
  atmos_CH4_earthAdjusted: number; 
  atmos_H_earthAdjusted: number; 
}

export interface PlanetListResponse {
  planets: Planet[];
}
