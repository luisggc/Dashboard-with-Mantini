import { Text, ThemeIcon, UnstyledButton, Box, Divider } from "@mantine/core";
import { Link } from "react-router-dom";

export default function NavButton({ children, Icon, to = "", disableDivider }) {
  return (
    <Link to={to}>
      <Box
        sx={(theme) => ({
          padding: "16px 8px",
          cursor: "pointer",
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1],
          },
        })}
      >
        <UnstyledButton>
          <Box
            sx={{
              display: "flex",
              alignContent: "flex-start",
            }}
          >
            <ThemeIcon
              color="violet"
              variant="light"
              sx={{
                marginRight: "12px",
              }}
            >
              <Icon />
            </ThemeIcon>

            <Text weight={500} sx={{ userSelect: "none" }}>
              {children}
            </Text>
          </Box>
        </UnstyledButton>
      </Box>
      {!disableDivider && (
        <Divider
          sx={(theme) => ({
            borderColor: theme.colorScheme === "dark" && "rgb(55, 58, 64)",
          })}
        />
      )}
    </Link>
  );
}
