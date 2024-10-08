"use client";

import React from "react";
import MicroLayout from "@/components/MicroLayout";

const JoystickPage: React.FC = () => {
  return (
    <MicroLayout
      projectGitRoute="https://github.com/brcls/joystick"
      projectHomeRoute="project/joystick"
    >
      <iframe
        src="http://localhost:3004"
        style={{ height: "100vh", width: "100%", border: "none" }}
        title="Joystick"
      />
    </MicroLayout>
  );
};

export default JoystickPage;
