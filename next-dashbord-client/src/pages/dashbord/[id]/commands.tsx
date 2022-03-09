import { ReactElement } from "react";
import { DashbordLayout } from "../../../components/layouts/dashbord";
import { NextPageWithLayout } from "../../../utils/types";

const CommandsPage: NextPageWithLayout = () => {
  return <div className="page">Commands Page</div>;
};

CommandsPage.getLayout = function (page: ReactElement) {
  return <DashbordLayout>{page}</DashbordLayout>;
};

export default CommandsPage;
