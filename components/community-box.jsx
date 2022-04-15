import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

function CommunityBox({ community }) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg">
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

      <Button
        variant="outline"
        color="primary"
        fullWidth
        style={{ marginTop: 14 }}
      >
        Open
      </Button>
    </Card>
  );
}

export default CommunityBox;
