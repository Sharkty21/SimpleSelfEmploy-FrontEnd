import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loader2 } from "lucide-react";
import React from "react";

export const AuthenticationGuard = ({ component }: {component: React.ComponentType<object>}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <Loader2 className="animate-spin"/>
      </div>
    ),
  });

  return <Component />;
};