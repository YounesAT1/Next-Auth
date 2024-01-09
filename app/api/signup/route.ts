import { connect } from "@/utils/config/dbConfig";
import User from "@/utils/models/auth";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connect();

  try {
    const requestBody = await req.json();
    const { userName, email, password } = requestBody;
    const foundUser = await User.findOne({ email });

    if (foundUser) {
      return NextResponse.json(
        { error: "User Already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "Sign up successful",
      success: true,
      newUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
