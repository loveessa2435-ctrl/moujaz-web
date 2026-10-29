
import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error: "مولّد الأسئلة الذكي قريباً ⚡",
      code: "COMING_SOON"
    },
    { status: 503 }
  );
}
