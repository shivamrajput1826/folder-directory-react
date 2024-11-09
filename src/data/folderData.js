// id,
//name
// isFolder -> true or false
// items []
export const explorer = {
  id: "1",
  name: "molecules",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "atoms",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "electrons",
          isFolder: false,
          items: [],
        },
        {
          id: "4",
          name: "protons",
          isFolder: false,
          items: [],
        },
        {
          id: "5",
          name: "neutrons",
          isFolder: false,
          items: [],
        },
      ],
    },
    {
      id: "5",
      name: "molecule2",
      isFolder: true,
      items: [
        {
          id: "6",
          name: "atoms2",
          isFolder: true,
          items: [
            {
              id: "7",
              name: "electrons2",
              isFolder: false,
              items: [],
            },
            {
              id: "8",
              name: "protons2",
              isFolder: false,
              items: [],
            },
            {
              id: "9",
              name: "neutrons2",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
  ],
};
