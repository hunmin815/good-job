"use server";

import { prismaClient } from "@/lib/prisma/client";
import { InputInfo } from "../../_lib/types";

export async function createUser(inputInfo: InputInfo) {
  const result = await prismaClient.user.create({
    data: {
      id: inputInfo.id,
      name: inputInfo.userName,
      org: inputInfo.orgName,
    },
  });

  console.log(result);
  return result;
}
