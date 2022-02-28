import { useState } from "react";
import { AppShell, Text, useMantineTheme } from "@mantine/core";
import NavBarDash from "../components/NavBarDash";
import HeaderDash from "../components/HeaderDash";
import { Routes, Route } from "react-router-dom";

function Dashboard() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={<NavBarDash opened={opened} />}
      header={<HeaderDash setOpened={setOpened} theme={theme} opened={opened} />}
    >
      <Routes>
        <Route path="/" element={<Text>Dashboard</Text>} />
        <Route path="dashboards" element={<Text>List of dashboards</Text>} />
        <Route path="hierarchy" element={<Text>Hierarchy</Text>} />
      </Routes>
    </AppShell>
  );
}

export default Dashboard;
