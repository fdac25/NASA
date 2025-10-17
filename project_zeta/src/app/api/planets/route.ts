// API route for fetching planets from MongoDB
// - Always uses the 'planets' database
// - Projects out _id to match the Planet type expected by the UI

import { NextResponse } from 'next/server';
import { Planet, PlanetListResponse } from '@/types/planet';
import clientPromise from '@/lib/mongodb';

export async function GET(): Promise<NextResponse<PlanetListResponse>> {
  try {
    const client = await clientPromise;
    const db = client.db('planets');
    const planetsCollection = db.collection<Planet>('planets');

    const planets = await planetsCollection
      .find({})
      .toArray();

    // Convert ObjectId to string
    const planetsWithStringId = planets.map(planet => ({
      ...planet,
      _id: planet._id.toString()
    }));

    return NextResponse.json({ planets: planetsWithStringId });
  } catch (error) {
    console.error('Error fetching planets:', error);
    return NextResponse.json({ planets: [] }, { status: 500 });
  }
}