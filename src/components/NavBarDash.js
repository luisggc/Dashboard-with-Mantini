import { Navbar, Text, ScrollArea, Accordion, ThemeIcon } from "@mantine/core";
import { BlendingModeIcon } from "@modulz/radix-icons";

function NavBarDash({ opened }) {
  return (
    <Navbar padding="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200 }} >
      <Navbar.Section>
        <Text> oi </Text>
      </Navbar.Section>
      <Navbar.Section grow component={ScrollArea}>
        <Accordion disableIconRotation>
          <Accordion.Item
            label="Customization"
            icon={
              <ThemeIcon color="violet" variant="light">
                <BlendingModeIcon />
              </ThemeIcon>
            }
          >
            Colors, fonts, shadows and many other parts are customizable to fit your design needs
          </Accordion.Item>
        </Accordion>
      </Navbar.Section>
      <Navbar.Section>
        <Text> oi </Text>
      </Navbar.Section>
    </Navbar>
  );
}

export default NavBarDash;
