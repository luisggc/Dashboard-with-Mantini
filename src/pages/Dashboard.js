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

      navbar={<NavBarDash opened={opened} />}
      header={<HeaderDash setOpened={setOpened} theme={theme} opened={opened} />}
    >
      <Routes>
        <Route path="/" element={<Text>Index Page</Text>} />
        <Route path="page1" element={<Text>This is Page 1!!</Text>} />
        <Route path="page2" element={<Text>This is Page 2!!</Text>} />
        <Route path="page3" element={<Text>This is Page 3!!</Text>} />
        <Route path="page4" element={<Text>This is Page 4!!</Text>} />
        <Route path="page5" element={<Text>This is Page 5!!</Text>} />
      </Routes>
    </AppShell>
  );
}

export default Dashboard;
