import { Metadata } from "next";
import { prismadb } from "@/lib/prismadb";
import { Marquee } from "@/components/ui/client";
import { getUserData } from "@/lib/get-user-data";
import Hero from "@/container/product-detail/hero";
import { serializeBigInt } from "@/lib/serialize-bigInt";
import ProductDetail from "@/container/product-detail/product";

export const metadata: Metadata = {
	title: "Product Detail - Mystice Marguerite",
	description: "Mystice Marguerite - Product Detail",
};

export default async function ProductDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const token = getUserData("adminAuthToken");
	const product = await prismadb.products.findUnique({
		where: { id: BigInt(id) },
	});
	if (!token) {
		return <p>Unauthorized</p>;
	}
	const user = await prismadb.users.findFirst({
		where: {
			role: "USER",
		},
	});

	const userRaw = serializeBigInt(user);
	const productRaw = serializeBigInt(product);

	return (
		<>
			<Hero />
			<Marquee />
			<ProductDetail
				user={userRaw}
				product={productRaw}
			/>
		</>
	);
}
