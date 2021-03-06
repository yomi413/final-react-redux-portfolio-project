
const buildingInfo = {
  address: "2942 Baisley Avenue, Bronx, NY",
  description: "This is a 3-family house located in the Pelham Bay section of the Bronx, New York. The white brick facade gives the house a beautiful appearance.",
  image: "https://i.imgur.com/jJyv31d.png",
  numberOfApartments: 3,
  tenants: [
      {
        name: 'John Smith',
        apartment: 1,
        leaseCommencement: "May 1, 2019",
        leaseExpiration: "April 30, 2020",
        rent: 1000
      },
      {
        name: 'Michael Jackson',
        apartment: 2,
        leaseCommencement: "July 1, 2018",
        leaseExpiration: "June 30, 2019",
        rent: 1300
      },
      {
        name: 'Maggie Rivera',
        apartment: 3,
        leaseCommencement: "December 15, 2015",
        leaseExpiration: "December 14, 2020",
        rent: 1300
      },
      {
        name: 'Chloe Sullivan',
        apartment: 4,
        leaseCommencement: "September 1, 2017",
        leaseExpiration: "August 30, 2019",
        rent: 1500
      }
    ],
  documents: {
    mortgage: "mortgage link",
    deed: "deed link",
  }
}

// <div>
//   <h1>Our House App</h1>
//
//   <p>Recently we celebrated 13 years living in this house. In order to make life easier, I have developed this app to help us keep track of basic information as it pertains to the house.</p>
//   <p>Now we will all be able to see the same information at the same time from the comfort of our home.</p>
//   <p>Enjoy, and please provide feedback so that we can continue improving our experience.</p>
// </div>

// const building = {
//   address: "2942 Baisley Avenue, Bronx, NY",
//   description: "This is a 3-family house located in the Pelham Bay section of the Bronx, New York. The white brick facade gives the house a beautiful appearance.",
//   numberOfApartments: 3,
//
// }
//
// const tenantsInfo = [
//   {
//     name: 'John Smith',
//     apartment: 1,
//     leaseCommencement: "May 1, 2019",
//     leaseExpiration: "April 30, 2020",
//     rent: 1000
//   },
//   {
//     name: 'Michael Jackson',
//     apartment: 2,
//     leaseCommencement: "July 1, 2018",
//     leaseExpiration: "June 30, 2019",
//     rent: 1300
//   },
//   {
//     name: 'Maggie Rivera',
//     apartment: 3,
//     leaseCommencement: "December 15, 2015",
//     leaseExpiration: "December 14, 2020",
//     rent: 1300
//   },
//   {
//     name: 'Chloe Sullivan',
//     apartment: 4,
//     leaseCommencement: "September 1, 2017",
//     leaseExpiration: "August 30, 2019",
//     rent: 1500
//   }
// ]
//
// const buildingInfo = [
//   {
//     apartment: 1,
//     bedrooms: 1,
//     bathrooms: 1,
//     occupied: true,
//     features: ['washer', 'dryer', 'dishwasher']
//   },
//   {
//     apartment: 2,
//     bedrooms: 2,
//     bathrooms: 1,
//     occupied: true,
//     features: ['washer', 'dryer', 'dishwasher']
//   },
//   {
//     apartment: 3,
//     bedrooms: 2,
//     bathrooms: 1,
//     occupied: true,
//     features: ['washer', 'dryer', 'dishwasher']
//   },
//   {
//     apartment: 4,
//     bedrooms: 3,
//     bathrooms: 2,
//     occupied: true,
//     features: ['washer', 'dryer', 'dishwasher']
//   }
// ]

export default buildingInfo;
