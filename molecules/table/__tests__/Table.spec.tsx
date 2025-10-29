import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Table } from '../Table';

import { Location, HealthStatus } from '@/lib/enums';

//types
import { User } from '@/lib/types';

const mockUsers: User[] = [
  { id: '1', name: 'Naruto', location: Location.Konoha, health: HealthStatus.Healthy, power: 5000 },
  { id: '2', name: 'Sasuke', location: Location.Konoha, health: HealthStatus.Injured, power: 4500 },
  { id: '3', name: 'Gaara', location: Location.Suna, health: HealthStatus.Critical, power: 3000 },
];

beforeEach(() => {
  // Mock fetch before each test
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok:true,
      json: () => Promise.resolve(mockUsers),
    } as Response)
  ) as jest.Mock;
});

afterEach(() => {
  jest.resetAllMocks(); // Reset mocks after each test
});


describe('Table Component', () => {

  test('filters table based on search input (name)', async () => {
    render(<Table />);
    
    const searchInput = await screen.findByPlaceholderText(/search by name or location/i);

    // Simulate typing "Sasuke"
    fireEvent.change(searchInput, { target: { value: 'Sasuke' } });

    // Wait for the table to update
    await waitFor(() => {
      expect(screen.getByText('Sasuke')).toBeInTheDocument();
      expect(screen.queryByText('Naruto')).toBeNull();
      expect(screen.queryByText('Gaara')).toBeNull();
    });
  });

  test('filters table based on search input (location)', async () => {
    render(<Table />);
    
    const searchInput = await screen.findByPlaceholderText(/search by name or location/i);

    // Simulate typing "Suna"
    fireEvent.change(searchInput, { target: { value: 'Suna' } });

    await waitFor(() => {
      expect(screen.getByText('Gaara')).toBeInTheDocument();
      expect(screen.queryByText('Naruto')).toBeNull();
      expect(screen.queryByText('Sasuke')).toBeNull();
    });
  });
});
