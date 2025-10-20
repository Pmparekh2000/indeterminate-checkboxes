export const STATUS = {
  CHECKED: "checked",
  UNCHECKED: "unchecked",
  INDETERMINATE: "indeterminate",
};

export const DUMMY_CHECKBOX_DATA = [
  {
    id: "root1",
    name: "Work Projects",
    status: STATUS.UNCHECKED,
    children: [
      {
        id: "projectX",
        name: "Project X",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "ux",
            name: "UX Design",
            status: STATUS.UNCHECKED,
            children: [
              {
                id: "wireframes",
                name: "Wireframes.sketch",
                status: STATUS.UNCHECKED,
              },
              {
                id: "prototype",
                name: "Prototype.fig",
                status: STATUS.UNCHECKED,
              },
            ],
          },
          {
            id: "dev",
            name: "Development",
            status: STATUS.UNCHECKED,
            children: [
              {
                id: "frontend",
                name: "Frontend",
                status: STATUS.UNCHECKED,
              },
              {
                id: "backend",
                name: "Backend",
                status: STATUS.UNCHECKED,
              },
            ],
          },
        ],
      },
      {
        id: "projectY",
        name: "Project Y",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "research",
            name: "Research",
            status: STATUS.UNCHECKED,
          },
        ],
      },
    ],
  },
  {
    id: "root2",
    name: "Personal",
    status: STATUS.UNCHECKED,
    children: [
      {
        id: "finance",
        name: "Finance",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "tax2023",
            name: "Tax 2023",
            status: STATUS.UNCHECKED,
          },
          {
            id: "investments",
            name: "Investments",
            status: STATUS.UNCHECKED,
          },
        ],
      },
      {
        id: "travel",
        name: "Travel Plans",
        status: STATUS.UNCHECKED,
        children: [
          {
            id: "europe",
            name: "Europe Trip",
            status: STATUS.UNCHECKED,
            children: [
              {
                id: "flights",
                name: "Flight Bookings",
                status: STATUS.UNCHECKED,
              },
              {
                id: "hotels",
                name: "Hotel Reservations",
                status: STATUS.UNCHECKED,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "archived",
    name: "Archived",
    status: STATUS.UNCHECKED,
  },
];
