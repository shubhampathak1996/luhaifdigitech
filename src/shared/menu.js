export const MENU = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },

  {
    label: "Patients",
    link: "#",
    menu: [
      {
        label: "View Patients",
        link: "/patients",
      },
      { label: "Add Patient", link: "/patients/add" },
    ],
  },
  {
    label: "Leads",
    link: "#",
    menu: [
      {
        label: "Leads",
        link: "/leads",
        menu: [
          {
            label: "View Leads",
            link: "/leads",
          },
          {
            label: "Add Lead",
            link: "/leads/add",
          },
        ],
      },
      {
        label: "Callbacks",
        link: "/leadcallbacks",
        menu: [
          {
            label: "View Callbacks",
            link: "/leadcallbacks",
          },
          {
            label: "Add Callback",
            link: "/leadcallbacks/add",
          },
        ],
      },
      {
        label: "Leads Comments",
        link: "/leadcomments",
        menu: [
          {
            label: "View Comments",
            link: "/leadcomments",
          },
          {
            label: "Add Comment",
            link: "/leadcomments/add",
          },
        ],
      },
    ],
  },
  {
    label: "Appointments",
    link: "#",
    menu: [
      {
        label: "Appointments",
        link: "/appointments",
        menu: [
          { label: "View Appointments", link: "/appointments" },
          { label: "Add Appointment", link: "/appointments/add" },
        ],
      },
      {
        label: "Rooms",
        link: "#",
        menu: [
          { label: "View Rooms", link: "/rooms" },
          { label: "Add Room", link: "/rooms/add" },
        ],
      },
      {
        label: "Investigations",
        link: "#",
        menu: [
          { label: "View Investigations", link: "/investigations" },
          { label: "Add Investigation", link: "/investigations/add" },
        ],
      },
      {
        label: "Services",
        link: "#",
        menu: [
          { label: "View Services", link: "/services" },
          { label: "Add Service", link: "/services/add" },
        ],
      },
      {
        label: "Notes",
        link: "#",
        menu: [
          { label: "View Notes", link: "/notes" },
          { label: "Add Notes", link: "/notes/add" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    link: "#",
    menu: [
      {
        label: "Resources",
        link: "/resources",
        menu: [
          {
            label: "Resource",
            link: "/resources",
          },
          {
            label: "Add Resource",
            link: "/resources/add",
          },
        ],
      },
      {
        label: "Resource Type",
        link: "/resources/add",
        menu: [
          {
            label: "View Resource Type",
            link: "/resourcetypes",
          },
          {
            label: "Add Resource Type",
            link: "/resourcetypes/add",
          },
        ],
      },
    ],
  },
  {
    label: "Invoices",
    link: "#",
    menu: [
      {
        label: "Invoices",
        link: "/invoices",
        menu: [
          { label: "View Invoices", link: "/invoices" },
          { label: "Add Invoice", link: "/invoices/add" },
        ],
      },
      {
        label: "EMIs",
        link: "#",
        menu: [
          { label: "View EMIs", link: "/emis" },
          { label: "Add EMI", link: "/emis/add" },
        ],
      },
      {
        label: "Transactions",
        link: "#",
        menu: [
          { label: "View Transactions", link: "/transactions" },
          { label: "Add Transaction", link: "/transactions/add" },
        ],
      },
    ],
  },
  {
    label: "Inventories",
    link: "#",
    menu: [
      {
        label: "Inventories",
        link: "/appointments",
        menu: [
          { label: "View Inventories", link: "/inventorys" },
          { label: "Add Inventory", link: "/inventorys/add" },
        ],
      },
      {
        label: "Products",
        link: "#",
        menu: [
          { label: "View Products", link: "/products" },
          { label: "Add Product", link: "/products/add" },
        ],
      },
    ],
  },
  {
    label: "Complaints",
    link: "#",
    menu: [
      {
        label: "Complaints",
        link: "/complaints",
        menu: [
          { label: "View Complaints", link: "/complaints" },
          { label: "Add Complaint", link: "/complaints/add" },
        ],
      },
    ],
  },
  {
    label: "Treatments",
    link: "#",
    menu: [
      {
        label: "Treatments",
        link: "/treatments",
        menu: [
          { label: "View Treatments", link: "/treatments" },
          { label: "Add Treatments", link: "/treatments/add" },
        ],
      },
    ],
  },
];
