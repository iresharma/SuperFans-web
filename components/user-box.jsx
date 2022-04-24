import {
  Card,
  Grid,
  Avatar,
  ActionIcon,
  LoadingOverlay,
  Menu,
  Divider,
} from "@mantine/core";
import { BsChevronRight } from "react-icons/bs";
import Link from "next/link";

const UserBox = ({ user, place, loading }) => {
  return (
    <Card radius="lg" p={place == "nav" ? "xs" : "md"} shadow="sm">
      <LoadingOverlay visible={loading} />
      <Grid gutter={place == "nav" ? "xs" : "sm"} align="center">
        <Grid.Col span={2}>
          <Menu control={<Avatar src={user.picture} alt="it's me" />}>
            <Menu.Label>Superfans!</Menu.Label>
            <Menu.Item>Settings</Menu.Item>
            <Menu.Item>Log out</Menu.Item>
            <Divider />
            <Menu.Label>Danger zone</Menu.Label>
            <Menu.Item color="red">Delete my account</Menu.Item>
          </Menu>
        </Grid.Col>
        <Grid.Col span={9}>
          <div>{user.nickname}</div>
          <div>{user.email}</div>
        </Grid.Col>
        {place != "nav" && (
          <Grid.Col span={1}>
            <ActionIcon color="primary" component="a" href="/home">
              <BsChevronRight />
            </ActionIcon>
          </Grid.Col>
        )}
      </Grid>
    </Card>
  );
};

export default UserBox;
