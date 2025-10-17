import { NextResponse } from 'next/server';
import { Planet, PlanetListResponse } from '@/types/planet';

// Mock data for now - replace with actual backend call 
const mockPlanets: Planet[] = [
  {
    id: '1',
    name: 'Jupiter',
    gravity: 24.79,
    water: 'None',
    gases: 'Hydrogen, Helium',
    description: 'Jupiter is the largest planet in our solar system, known for its Great Red Spot and numerous moons.',
  },
  {
    id: '2',
    name: 'Planet Ahmed',
    gravity: 7.51,
    water: 'Frozen',
    gases: 'Nitrogen, Oxygen, Trace gases',
    description: 'A nonchalant planet with unique atmospheric conditions and frozen water deposits.',
  },
  {
    id: '3',
    name: 'Mars',
    gravity: 3.71,
    water: 'Ice caps',
    gases: 'Carbon dioxide, Nitrogen, Argon',
    description: 'The red planet, known for its iron oxide surface and potential for future human colonization.',
  },
  {
    id: '4',
    name: 'Saturn',
    gravity: 10.44,
    water: 'None',
    gases: 'Hydrogen, Helium',
    description: 'Famous for its prominent ring system made of ice and rock particles.',
  },
  {
    id: '5',
    name: 'Venus',
    gravity: 8.87,
    water: 'None',
    gases: 'Carbon dioxide, Nitrogen',
    description: 'The hottest planet in our solar system with a thick, toxic atmosphere.',
  },
];

export async function GET(): Promise<NextResponse<PlanetListResponse>> {
  // Replace with actual API call in the future
  try {
    return NextResponse.json({ planets: mockPlanets });
  } catch (error) {
    console.error('Error fetching planets:', error);
    return NextResponse.json(
      { planets: [] },
      { status: 500 }
    );
  }
}