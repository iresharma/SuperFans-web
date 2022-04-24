import User from "../database/models/user.model";

const findUser = (user) => {
  return new Promise((resolve, reject) => {
    User.findOne({ _id: user.id })
      .then((user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("User not found"));
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    User.insertOne({
      _id: user.id,
      name: "",
      username: "",
      email: user.email,
      communities: [],
      creator: false,
    })
      .then((user) => {
        resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { findUser, createUser };
