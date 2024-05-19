import React from "react";
import ProfileInfo from "./ProfileInfo";
import UsersDetails from "./UsersDetails";

export default function CompleteCv() {
  return (
    <div className="">
      <div className="position-absolute top-5 end-0">
        <div className="" style={{ marginLeft: "25%", marginTop: "-1.4%" }}>
          <UsersDetails />
        </div>
      </div>
      <div className="mt-5">
        <ProfileInfo />
      </div>
    </div>
  );
}
