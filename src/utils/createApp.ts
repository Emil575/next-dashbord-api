import { config } from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import passport from 'passport'
import routes from "../routes";
import store from 'connect-mongo';

config();
require("../strategies/discord");

export function createApp(): Express {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded());

  app.use(cors({ origin: ["http://localhost:3001"], credentials: true }));

  app.use(
    session({
      secret: "hannesEmilIstCool",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 * 60 * 24 * 7 },
      store: store.create({
        mongoUrl:
          "mongodb+srv://Emil_575:Emil_575@opal.7w458.mongodb.net/Discord-dashbord",
      }),
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api", routes);

  return app;
}
