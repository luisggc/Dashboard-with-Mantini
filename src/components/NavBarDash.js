import { Navbar, ScrollArea, Accordion, ThemeIcon } from "@mantine/core";
import { BlendingModeIcon, CardStackPlusIcon } from "@modulz/radix-icons";
import NavButton from "./NavButton";

function NavBarDash({ opened }) {
  return (
    <Navbar padding="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200 }}>
      {/*   <Navbar.Section>
        <Text> Topo </Text>
      </Navbar.Section> */}
      <Navbar.Section grow component={ScrollArea}>
        <NavButton Icon={BlendingModeIcon} to="/">
          Index
        </NavButton>
        <NavButton Icon={CardStackPlusIcon} to="dashboards">
          dashboards
        </NavButton>

        <NavButton Icon={CardStackPlusIcon} to="hierarchy">
          Hierarchies
        </NavButton>

        <Accordion disableIconRotation>
          <Accordion.Item
            label="Customization"
            icon={
              <ThemeIcon color="violet" variant="light">
                <BlendingModeIcon />
              </ThemeIcon>
            }
          >
            <NavButton Icon={CardStackPlusIcon}>Olaa</NavButton>
            <NavButton Icon={CardStackPlusIcon}>Olaa</NavButton>
            <NavButton Icon={CardStackPlusIcon} disableDivider>
              Olaa
            </NavButton>
          </Accordion.Item>
        </Accordion>
      </Navbar.Section>
    </Navbar>
  );
}

export default NavBarDash;
