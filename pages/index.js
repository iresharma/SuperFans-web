import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import { Loader, Button, useMantineColorScheme } from "@mantine/core";
import UserBox from "../components/user-box";

export default function Home() {
  const { user, error, loading } = useUser();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <div className={styles.container} id={dark ? styles["cont-dark"] : ""}>
      <Head>
        <title>Superfans!</title>
        <meta name="description" content="Superfans a creator community hub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title} id={dark ? styles["title-dark"] : ""}>
          Welcome to <a>SuperFans!</a>
        </h1>
        <div>
          {loading && <Loader size="sm" variant="bars" />}
          {(error || !user) && (
            <Button
              variant="light"
              radius="md"
              color="primary"
              size="xl"
              component="a"
              href="/api/auth/login"
            >
              <span style={{ color: "black" }}>Login</span>
            </Button>
          )}
          {user && <UserBox user={user} />}
        </div>
      </main>
    </div>
  );
}
