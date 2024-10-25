"use cache";

export default async function Home(props: {
	// params: Promise<{ id: string }>;
	searchParams: Promise<{ slug: string }>;
}) {
	// const { id } = await props.params;
	const { slug } = await props.searchParams;

	return <div>{slug}</div>;
}
