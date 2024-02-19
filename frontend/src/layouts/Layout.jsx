import { isAdmin } from "../config/isAdmin.jsx";
import AdminLayout from "./AdminLayout";
import MainLayout from "./MainLayout";

export const Layout = isAdmin ? AdminLayout : MainLayout;