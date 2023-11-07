import React from "react";
import Skeleton from "@mui/material/Skeleton";

export function Suspense(props: React.SuspenseProps) {
  return (
    <React.Suspense
      fallback={
        <div className="p-2">
          <Skeleton />
          <Skeleton width="80%" />
          <Skeleton width="60%" />
          <Skeleton height={118} variant="rectangular" />
          <Skeleton />
        </div>
      }
      {...props}
    />
  );
}
