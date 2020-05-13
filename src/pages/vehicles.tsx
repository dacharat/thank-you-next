import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import fetch from 'isomorphic-unfetch'

import { VehiclesResponse } from '../interface/type'

const Vehicles = ({ vehicles }: VehiclesResponse) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">OwnerId</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vehicles.vehicles.map(vehicle => (
            <TableRow key={vehicle.id}>
              <TableCell component="th" scope="row">
                {vehicle.id}
              </TableCell>
              <TableCell align="right">{vehicle.brand}</TableCell>
              <TableCell align="right">{vehicle.model}</TableCell>
              <TableCell align="right">{vehicle.ownerId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

// Vehicles.getInitialProps = async () => {
//   const response = await fetch('http://localhost:3000/api/vehicles')
//   const vehicles: VehiclesResponse = await response.json()

//   return { vehicles }
// }

export const getStaticProps = async () => {
  const response = await fetch('http://localhost:3000/api/vehicles')
  const vehicles: VehiclesResponse = await response.json()

  return { props: { vehicles } }
}

export default Vehicles
