import type { Request, Response } from "express";

const authorization_jwt = (req: Request, res: Response, next: any) => {
  const auth = req.headers.authorization;
  console.log(auth);
  if (!auth) {
    res.status(401).json({
      error: "Unauthorization",
    });
  } else {
    const token = auth.split(" ")[1];
    console.log(token);
    next();
  }
};

export { authorization_jwt };
