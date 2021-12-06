/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  {
    path: '/app/dashboard', // the url
    icon: 'HomeIcon', // the component being exported from icons/index.js
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/app/forms',
    icon: 'FormsIcon',
    name: 'Orders',
  },
  {
    path: '/app/cards',
    icon: 'CardsIcon',
    name: 'Customers',
  },
  {
    icon: 'PagesIcon',
    name: 'Products',
    routes: [
      // submenu
      {
        path: '/login',
        name: 'All Products',
      },
      {
        path: '/app/new-product',
        name: 'Add New',
      },
      {
        path: '/app/category',
        name: 'Categories',
      },
      {
        path: '/app/404',
        name: 'Tags',
      },
      {
        path: '/app/blank',
        name: 'Attributes',
      },
    ],
  },
  {
    path: '/app/charts',
    icon: 'ChartsIcon',
    name: 'Reports',
  },
  {
    path: '/app/buttons',
    icon: 'ButtonsIcon',
    name: 'Settings',
  },
  {
    path: '/app/modals',
    icon: 'ModalsIcon',
    name: 'Analytics',
  },
  {
    path: '/app/tables',
    icon: 'TablesIcon',
    name: 'Marketing',
  },
]

export default routes
