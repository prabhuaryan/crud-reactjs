import { createBrowserRouter } from "react-router-dom";
import CustomerList from "./CustomerList";
import CustomerForm from "./CustomerForm";
import EditCustomer from "./EditCustomer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerList></CustomerList>,
  },
  {
    path: "/create",
    element: <CustomerForm></CustomerForm>,
  },{
    path: "/update/:id",
    element: <EditCustomer></EditCustomer>
  }
]);

export default router;
