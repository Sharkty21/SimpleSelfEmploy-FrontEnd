import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";

export const AuthenticationGuard = ({ component }: {component: React.ComponentType<object>}) => {
  const Component = withAuthenticationRequired(component, {
  });

  return <Component />;
};