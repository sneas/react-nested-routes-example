import React from "react";
import NestedMenu from "./NestedMenu";
import Breadcrumbs from "./Breadcrumbs";

const Page = ({ route }) => {
  const PageBody = route.component;
  return (
    <>
      <NestedMenu route={route} />
      {route.parent && <Breadcrumbs route={route} />}
      <PageBody />
    </>
  );
};

export default Page;
