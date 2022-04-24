import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
  Dialog,
} from "@mantine/core";
import { useState } from "react";
import { showNotification } from "@mantine/notifications";

function CommunityBox({ community }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card
      shadow="sm"
      p="lg"
      sx={(theme) => ({
        borderRadius: theme.radius.lg,
      })}
    >
      <Card.Section>
        <Image src="./image.png" height={160} alt="Norway" />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text size="xl" weight={700}>
          {community.name}
        </Text>
        <Badge color="green" variant="light">
          {community.online} Online
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {community.desc.substring(25)}...
      </Text>

      <Group position="right">
        <Button
          variant="light"
          color="primary"
          style={{ marginTop: 14 }}
          radius="lg"
          mr={10}
        >
          Open
        </Button>
        <Button
          variant="subtle"
          color="primary"
          style={{ marginTop: 14 }}
          radius="lg"
          onClick={() => {
            if (navigator.share) {
              navigator
                .share({
                  title: "Community",
                  url: "https://google.com",
                  text: "Share this community now!",
                })
                .then(() => {
                  //
                })
                .catch(() => {
                  showNotification({
                    title: "Default notification",
                    message: "Hey there, your code is awesome! 🤥",
                    color: "red",
                  });
                });
            } else {
              setOpened(true);
            }
          }}
        >
          Share
        </Button>
      </Group>
      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Copy the link below and share it!
        </Text>
        <Group align="flex-end">
          <code style={{ width: "70%" }}>https://hi.com</code>
          <Button size="xs" onClick={() => setOpened(false)}>
            Copy Link
          </Button>
        </Group>
      </Dialog>
    </Card>
  );
}

export default CommunityBox;
