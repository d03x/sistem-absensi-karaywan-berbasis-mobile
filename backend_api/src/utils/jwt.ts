import jwt from "jsonwebtoken";
const JWTTOKEN = "dadab1234!@#$";

function createToken(data: any) {
  const expires = "1h";
  const token = jwt.sign(
    {
      ...data,
      expires: expires,
    },
    JWTTOKEN,
    { expiresIn: expires }
  );
  return token;
}
export {
    createToken,
}