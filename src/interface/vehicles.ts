export interface VehiclePerson {
  details: string
  ownerName: string
  vehicle: string
}

export interface VehiclesResponse {
  vehicles: Vehicles
}

export interface Vehicles {
  vehicles: Vehicle[]
}

export interface Vehicle {
  id: number
  brand: string
  model: string
  ownerId: number
}
