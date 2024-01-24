import { useLoaderData } from "react-router-dom";

function Github() {
	const data = useLoaderData();

	return (
		<div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
			<p>{data.name}</p>
			<p>Login: {data.login}</p>
			<p>Location: {String(data.location)}</p>
			<p>Hireable: {String(data.hireable)}</p>
			<p>Email: {String(data.email)} </p>
			<p>Github followers: {data.followers}</p>
			<p>Public repositories: {data.public_repos}</p>
			<img src={data.avatar_url} width={300} alt="" />
		</div>
	);
}
export default Github;

export const githubInfoLoader = async () => {
	const response = await fetch("https://api.github.com/users/mvinicius175");
	return response.json();
};
