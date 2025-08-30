// The data of the park areas and of the guests
// Functions to export clones of the data

const database = {
  parkAreas: [
    {
      id: 1,
      name: "Lodge + Hotel, and Restaurant",
      services: "lodging, parking, information, and picnicking",
      image: "https://plus.unsplash.com/premium_photo-1673264933446-203af90cd278?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 2,
      name: "Lost Wolf Hiking Trail",
      services: "hiking, picnicking, and rock climbing",
      image: "https://plus.unsplash.com/premium_photo-1675692677699-e7b38e57cd80?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      name: "Chamfort River",
      services: "rafting, canoeing, and fishing",
      image: "https://images.unsplash.com/photo-1498855926480-d98e83099315?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      name: "Gander River",
      services: "nature preserve with fishing and hiking",
      image: "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      name: "Campgrounds, office park, and children play area",
      services: "information, lodging, and parking",
      image: "https://images.unsplash.com/photo-1599728780574-c45a1dfdbb84?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      name: "Pine Bluffs Trails",
      services: "hiking, picnicking, and zip lines",
      image: "https://images.unsplash.com/photo-1714630525204-62e1dbf21068?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ],
  guests: [
    { id: 1, name: "Rusty Hitchens", parkAreaId: 3 },
    { id: 2, name: "Winnie Bago", parkAreaId: 1 },
    { id: 3, name: "Coleman Tentsworth", parkAreaId: 5 },
    { id: 4, name: "Stanley S'moreson", parkAreaId: 2 },
    { id: 5, name: "Peggy Firepit", parkAreaId: 4 },
    { id: 6, name: "Marty McCamp", parkAreaId: 6 },
    { id: 7, name: "Flint Sparks", parkAreaId: 1 },
    { id: 8, name: "Lola Lantern", parkAreaId: 2 },
    { id: 9, name: "Gus Griddle", parkAreaId: 3 },
    { id: 10, name: "Chad O'Cabin", parkAreaId: 5 },
    { id: 11, name: "Becky Burnside", parkAreaId: 6 },
    { id: 12, name: "Duke O'Doodles", parkAreaId: 4 },
    { id: 13, name: "Shelly Canopy", parkAreaId: 2 },
    { id: 14, name: "Buckie Bugrepel", parkAreaId: 1 },
    { id: 15, name: "Hank Hammock", parkAreaId: 3 },
    { id: 16, name: "Cindy S'mores", parkAreaId: 5 },
    { id: 17, name: "Walter Woodsmoke", parkAreaId: 6 },
    { id: 18, name: "Tina Tentpeg", parkAreaId: 4 },
    { id: 19, name: "Gary Gearbox", parkAreaId: 2 },
    { id: 20, name: "Fernie Campwell", parkAreaId: 1 },
  ],
  services: [ {
    id: 1,
    name: "hiking", 
    parkAreaId: [2, 4, 6]
  }, {
    id: 2, 
    name: "picnicking",
    parkAreaId: [1, 2, 6]

  }, {
    id: 3,
    name: "rock climbing",
    parkAreaId: [2]
  }, {
    id: 4,
    name: "parking",
    parkAreaId: [1, 5]
  }, {
    id: 5,
    name: "zip lining",
    parkAreaId: [6]
  }, {
    id: 6,
    name: "lodging",
    parkAreaId: [1, 5]
  }, {
    id: 7,
    name: "information",
    parkAreaId: [1, 5]
  }, {
    id: 8, 
    name: "rafting",
    parkAreaId: [3]
  }, {
    id: 9,
    name: "canoeing",
    parkAreaId: [3]
  }, {
    id: 10,
    name: "fishing",
    parkAreaId: [3, 4]
  }, {
    id: 11, 
    name: "campgrounds",
    parkAreaId: [5]
  }, {
    id: 12, 
    name: "office park",
    parkAreaId: [5]
  }, {
    id: 13, 
    name: "play area",
    parkAreaId: [5]
  }
]
}

export const getParkAreas = () => {
  const parkAreasArray = structuredClone(database.parkAreas);
  return parkAreasArray;
};

export const getGuests = () => {
  const guestsArray = structuredClone(database.guests);
  return guestsArray;
};

export const getServices = () => {
  const servicesArray = structuredClone(database.services)
  return servicesArray
}