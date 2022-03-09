import { NextPage } from "next";
import { ReactElement } from "react";
import { DashbordLayout } from "../../../components/layouts/dashbord";
import { NextPageWithLayout } from "../../../utils/types";

const DashbordPage: NextPageWithLayout = () => {
  return <div className="page">Dashbord Page</div>;
};

DashbordPage.getLayout = function (page: ReactElement) {
  return <DashbordLayout>{page}</DashbordLayout>;
};

export default DashbordPage;
