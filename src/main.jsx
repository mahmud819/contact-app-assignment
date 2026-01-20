import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import App from './App.jsx'
// import "bootstrap/dist/css/bootstrap.min.css";
//
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage/HomePage.jsx";
import MainLayout from "./MainLayout/MainLayout.jsx";
import AddContact from "./AddContact/AddContact.jsx";
import ContactDetails from "./ContactDetails/ContactDetails.jsx";
import EditContact from "./EditContact/EditContact.jsx";
import DataProvider from "./DataContex/DataProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/", index: true, element: <HomePage></HomePage> },
      { path: "/addContacts", element: <AddContact></AddContact> },
      {
        path: "/contact/:id",
        element: <ContactDetails></ContactDetails>,
        loader: ({ params }) =>
          fetch(
            `https://696f7ef5a06046ce6186e76f.mockapi.io/contacts/contacts/${params.id}`,
          ),
      },
      {
        path: "/editContact/:id",
        element: <EditContact></EditContact>,
        loader: ({ params }) =>
          fetch(
            `https://696f7ef5a06046ce6186e76f.mockapi.io/contacts/contacts/${params.id}`,
          ),
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>,
);
