import type { Response } from "express";

type ApiResponseTypes = {
  status: number;
  data?: any;
  message?: string;
  error?: any;
  code?: number;
};
export default function apiResponse(
  res: Response,
  {
    status = 200,
    data = null,
    message = "",
    error = null,
    code = 0,
  }: ApiResponseTypes
) {
  res
    .status(status)
    .json({
      status,
      data,
      message,
      error,
      code,
    })
    .end();
}
