import { Header, MediaQuery, Text, Burger, ActionIcon, useMantineColorScheme } from "@mantine/core";
import { SunIcon, MoonIcon } from "@modulz/radix-icons";

function HeaderDash({ setOpened, opened, theme }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Header height={70} padding="md">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <div>
          <Text>Icon</Text>
        </div>
        <div>
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
        </div>
      </div>
    </Header>
  );
}

export default HeaderDash;
