import { ActionIcon, useMantineColorScheme, Navbar, Text, Container } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";

function NavBarDash(props) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Navbar padding="md" hiddenBreakpoint="sm" hidden={!props.opened} width={{ sm: 300, lg: 400 }}>
      <Text>Application navbar</Text>
      <Container>
        <ActionIcon
          variant="outline"
          color={dark ? "yellow" : "blue"}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? (
            <SunIcon style={{ width: 18, height: 18 }} />
          ) : (
            <MoonIcon style={{ width: 18, height: 18 }} />
          )}
        </ActionIcon>
      </Container>
    </Navbar>
  );
}

export default NavBarDash;
