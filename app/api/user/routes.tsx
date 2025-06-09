import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();

  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (users?.length == 0) {
    const result = await db
      .insert(usersTable)
      .values({ name: name, email: email })
      .returning(usersTable);
    console.log(result);
    return NextResponse.json(result);
  }
  return NextResponse.json(users[0]);
}
