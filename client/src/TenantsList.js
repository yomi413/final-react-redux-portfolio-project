import React, { Component } from 'react';
import buildingInfo from './data';

class TenantsList extends Component {

  render() {
    const tenants = buildingInfo.tenants.map(tenant =>
      <tr>
        <td>{tenant.apartment}</td>
        <td>{tenant.name}</td>
        <td>${tenant.rent}</td>
        <td>{tenant.leaseCommencement}</td>
        <td>{tenant.leaseExpiration}</td>
      </tr>)

    return (
      <div>
        <h1>Current Residents</h1>

        <table>
          <thead>
            <tr>
              <th>Apartment Number</th>
              <th>Tenant Name</th>
              <th>Rent Amount</th>
              <th>Lease Commencement</th>
              <th>Lease Expiration</th>
            </tr>
          </thead>

          <tbody>
            {tenants}
          </tbody>
        </table>

      </div>
    )
  }
}

export default TenantsList;