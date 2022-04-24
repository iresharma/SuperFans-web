import HomeLayout from "../../layouts/home";
import { Grid, Pagination } from "@mantine/core";
import CommunityBox from "../../components/community-box";
import axios from "axios";

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

export async function getServerSideProps(context) {
  try {
    console.log(process.env.HOST_URI + "/api/login");
    const response = await axios.get(process.env.HOST_URI + "/api/login");
    const data = response.data;
    return {
      props: {
        data: data.name,
        community: [
          {
            id: "34",
            name: "Superfans!",
            desc: "Velit officia Lorem voluptate excepteur nostrud voluptate eiusmod non occaecat non cupidatat aute ea. Ullamco dolor ea aute laborum esse cupidatat adipisicing voluptate. Qui cupidatat commodo pariatur excepteur ad nisi. Id et minim amet aute.",
            online: 23,
          },
        ],
      },
    };
  } catch (err) {
    if (err.code === 401) {
      return { redirect: "/" };
    }
  }
  return {};
}

const Home = (props) => {
  if (props.redirect) {
    window.location.pathname = "/";
  }

  return (
    <div className="home">
      <h1>Communities</h1>
      <Grid gutter="xs">
        {props.community.map((comm) => (
          <Grid.Col key={comm.id} span={4}>
            <CommunityBox community={comm} />
          </Grid.Col>
        ))}
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1em",
          width: "100%",
        }}
      >
        <Pagination
          total={10}
          color="primary"
          size="xl"
          radius="lg"
          withControls={false}
        />
      </div>
    </div>
  );
};

export default Home;

Home.getLayout = (page) => {
  console.log("hi");
  return <HomeLayout navList={navItems}>{page}</HomeLayout>;
};
