import React, { ReactNode } from "react";
import WorkspaceProvider from "./Provider";

const WorkspaceLayout = ({ children }: { children: ReactNode }) => {
  return <WorkspaceProvider>{children}</WorkspaceProvider>;
};

export default WorkspaceLayout;
