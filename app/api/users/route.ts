import { Location, HealthStatus } from '@/lib/enums';
import { Character } from '@/lib/types';
import { NextResponse } from 'next/server';

export async function GET():Promise<NextResponse<Character[]>> {

  const characters = Array.from({ length: 1000 }, (_, i) => {
    const id = `char-${i + 1}`;
    const name = `Ninja_${i + 1}`;
    const location = Object.values(Location)[Math.floor(Math.random() * Object.values(Location).length)];
    const health = Object.values(HealthStatus)[Math.floor(Math.random() * Object.values(HealthStatus).length)];
    const power = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;

    return { id, name, location, health, power };
  });

  return NextResponse.json(characters);
}