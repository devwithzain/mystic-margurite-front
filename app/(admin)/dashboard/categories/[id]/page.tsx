import CategoryForm from "../components/category-form";

export async function generateStaticParams() {
	const res = await fetch(
		"https://mysticmarguerite.com/new/backend/api/categories",
		{
			cache: "no-store",
		},
	);
	const { categories } = await res.json();

	const dynamicRoutes = categories.map((category: any) => ({
		id: category.id.toString(),
	}));

	return [...dynamicRoutes, { id: "new" }];
}

export default async function CategoryFormPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	return <CategoryForm slug={{ id, new: id === "new" ? "yes" : "no" }} />;
}
