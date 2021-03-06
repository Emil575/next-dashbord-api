import { Request, Response } from "express";
import { User } from "../../database/schemas/User";
import { getMutualGuildsService } from "../../services/guilds";

export async function getGuildsController(req: Request, res: Response) {
  const user = req.user as User;
  try {
    const guilds = await getMutualGuildsService(user.id);
    res.send(guilds);
  } catch (err) {
    console.log(err);
    res.status(400).send("Error");
  }
}

export async function getGuildPermissionsController(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  const user = req.user as User;
  try {
    const guilds = await getMutualGuildsService(user.id);
    const valid = guilds.some((guild) => guild.id === id)
    return valid ? res.sendStatus(200) : res.sendStatus(403)
  } catch (err) {
    console.log(err);
    res.status(400).send("Error");
  }
}
