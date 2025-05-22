import ProductForm from "../components/product-form";

export async function generateStaticParams() {
	const res = await fetch(
		"https://mysticmarguerite.com/new/backend/api/products",
		{
			cache: "no-store",
		},
	);
	const { products } = await res.json();

	const dynamicRoutes = products.map((product: any) => ({
		id: product.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function ProductFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return (
		<>
			<ProductForm slug={{ id, new: id === "new" ? "yes" : "no" }} />
		</>
	);
}
