import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Box,
  MediaQuery,
  Burger,
  useMantineTheme,
  ThemeIcon,
} from "@mantine/core";
import { useUser } from "@auth0/nextjs-auth0";
import UserBox from "../components/user-box";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "next/link";

import styles from "../styles/layouts/home.module.scss";

export default function AppShellDemo({ children, navList }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const { user, error, loading } = useUser();

  if (error || !user) {
    return <p>Error: {error && error.message}</p>;
  }

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          {navList.map((item, index) => (
            <Box
              component={Link}
              to={item.to}
              key={index}
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                textAlign: "left",
                fontWeight: "bold",
                padding: theme.spacing.xs,
                margin: theme.spacing.sm,
                borderRadius: theme.radius.md,
                cursor: "pointer",

                "&:hover": {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : theme.colors.gray[1],
                },
              })}
            >
              {item.title}
            </Box>
          ))}
        </Navbar>
      }
      header={
        <Header height={80} p="md">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                mr="xl"
              />
            </MediaQuery>
            <h1 className={styles.brand}> SuperFans! </h1>
            <div style={{ display: "flex", alignItems: "center" }}>
              {user && (
                <div className={styles.userBox}>
                  <UserBox user={user} place="nav" loading={loading} />
                </div>
              )}
              <ThemeIcon variant="outline" size="xl">
                <FaRegMoon />
              </ThemeIcon>
            </div>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
