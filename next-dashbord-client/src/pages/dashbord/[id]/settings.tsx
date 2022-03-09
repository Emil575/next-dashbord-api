import { ReactElement } from "react";
import { DashbordLayout } from "../../../components/layouts/dashbord";
import { NextPageWithLayout } from "../../../utils/types";

const SettingsPage: NextPageWithLayout = () => {
  return <div className="page">Settings Page</div>;
};

SettingsPage.getLayout = function (page: ReactElement) {
  return <DashbordLayout>{page}</DashbordLayout>;
};

export default SettingsPage;
