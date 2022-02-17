import { useState } from "react";
import { AppShell, Text, useMantineTheme } from "@mantine/core";
import NavBarDash from "../components/NavBarDash";
import HeaderDash from "../components/HeaderDash";

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
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

export default Dashboard;
