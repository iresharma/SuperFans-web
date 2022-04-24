import { findUser, createUser } from "../../controllers/db.controller";

import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function myApiRoute(req, res) {
  const { user } = getSession(req, res);
  try {
    let dbUser = await findUser(user);
    res.status(200).json({ user: dbUser });
  } catch (err) {
    let newUser = await createUser(user);
    res.status(200).json({ user: newUser });
  }
});
