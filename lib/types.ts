import {HealthStatus, Location} from './enums';

export interface User {
  id: string;
  name: string;
  location: Location;
  health: HealthStatus;
  power: number;
  viewed?: boolean;
}