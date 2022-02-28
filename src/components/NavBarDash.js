import { Navbar, ScrollArea, Accordion, ThemeIcon } from "@mantine/core";
import {
  BlendingModeIcon,
  CardStackPlusIcon,
  BoxModelIcon,
  ButtonIcon,
  CalendarIcon,
  CameraIcon,
  CardStackIcon,
  CardStackMinusIcon,
  HomeIcon
} from "@modulz/radix-icons";

import NavButton from "./NavButton";

function NavBarDash({ opened }) {
  return (
    <Navbar
      padding="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 250 }}
      height="calc(100vh - 70px)"
    >
      <Navbar.Section grow component={ScrollArea}>
        <NavButton Icon={HomeIcon} to="/">
          Index
        </NavButton>
        <NavButton Icon={CardStackMinusIcon} to="page1">
          Page 1
        </NavButton>

        <NavButton Icon={CameraIcon} to="page2">
          Page 2
        </NavButton>

        <Accordion disableIconRotation>
          <Accordion.Item
            label="More Pages Here"
            icon={
              <ThemeIcon color="violet" variant="light">
                <CardStackPlusIcon />
              </ThemeIcon>
            }
          >
            <NavButton Icon={BoxModelIcon} to="page3">
              Page 3
            </NavButton>
            <NavButton Icon={ButtonIcon} to="page4">
              Page 4
            </NavButton>
            <NavButton Icon={CalendarIcon} to="page5" disableDivider>
              Page 5
            </NavButton>
          </Accordion.Item>
        </Accordion>
      </Navbar.Section>
    </Navbar>
  );
}

export default NavBarDash;
