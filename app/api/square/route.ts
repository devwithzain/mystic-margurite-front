import { randomUUID } from "crypto";
import { NextRequest, NextResponse } from "next/server";
import { SquareClient, SquareEnvironment } from "square";

const paymentsApi = new SquareClient({
   token: process.env.SQUARE_ACCESS_TOKEN,
   environment: SquareEnvironment.Sandbox,
}).payments;

export async function POST(req: NextRequest) {
   try {
      const body = await req.json();
      const { sourceId, amount } = body;

      console.log(body);

      const { payment } = await paymentsApi.create({
         idempotencyKey: randomUUID(),
         sourceId,
         amountMoney: {
            currency: "USD",
            amount: BigInt(amount || 100),
         },
      });

      return NextResponse.json(JSON.parse(JSON.stringify(payment, (_key, value) =>
         typeof value === "bigint" ? value.toString() : value
      )));

   } catch (error: any) {
      console.error("Square Payment Error:", error);
      return NextResponse.json(
         { error: error.message || "Payment failed" },
         { status: 500 }
      );
   }
}