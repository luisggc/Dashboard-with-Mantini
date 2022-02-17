import { Header, MediaQuery, Text, Burger } from "@mantine/core";

function HeaderDash({ setOpened, opened, theme }) {
  return (
    <Header height={70} padding="md">
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>
        <Text>Application header</Text>
      </div>
    </Header>
  );
}

export default HeaderDash;
