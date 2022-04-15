import HomeLayout from "../../layouts/home";
import { Grid } from "@mantine/core";
import CommunityBox from "../../components/community-box";

const navItems = [
  {
    title: "Create Community",
    to: "home",
  },
  {
    title: "Explore",
    to: "home",
  },
  {
    title: "Logout",
    to: "home",
  },
];

const communities = [
  {
    id: "34",
    name: "Superfans!",
    desc: "Velit officia Lorem voluptate excepteur nostrud voluptate eiusmod non occaecat non cupidatat aute ea. Ullamco dolor ea aute laborum esse cupidatat adipisicing voluptate. Qui cupidatat commodo pariatur excepteur ad nisi. Id et minim amet aute.",
    online: 23,
  },
  {
    id: "32",
    name: "Superfans!",
    desc: "Velit officia Lorem voluptate excepteur nostrud voluptate eiusmod non occaecat non cupidatat aute ea. Ullamco dolor ea aute laborum esse cupidatat adipisicing voluptate. Qui cupidatat commodo pariatur excepteur ad nisi. Id et minim amet aute.",
    online: 23,
  },
  {
    id: "35",
    name: "Superfans!",
    desc: "Velit officia Lorem voluptate excepteur nostrud voluptate eiusmod non occaecat non cupidatat aute ea. Ullamco dolor ea aute laborum esse cupidatat adipisicing voluptate. Qui cupidatat commodo pariatur excepteur ad nisi. Id et minim amet aute.",
    online: 23,
  },
  {
    id: "31",
    name: "Superfans!",
    desc: "Velit officia Lorem voluptate excepteur nostrud voluptate eiusmod non occaecat non cupidatat aute ea. Ullamco dolor ea aute laborum esse cupidatat adipisicing voluptate. Qui cupidatat commodo pariatur excepteur ad nisi. Id et minim amet aute.",
    online: 23,
  },
  {
    id: "37",
    name: "Superfans!",
    desc: "Velit officia Lorem voluptate excepteur nostrud voluptate eiusmod non occaecat non cupidatat aute ea. Ullamco dolor ea aute laborum esse cupidatat adipisicing voluptate. Qui cupidatat commodo pariatur excepteur ad nisi. Id et minim amet aute.",
    online: 23,
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1>Communities</h1>
      <Grid gutter="xs">
        {communities.map((community) => (
          <Grid.Col key={community.id} span={4}>
            <CommunityBox community={community} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  console.log("hi");
  return <HomeLayout navList={navItems}>{page}</HomeLayout>;
};
