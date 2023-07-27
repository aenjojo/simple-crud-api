const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

export type ResultBody = {
	id: number;
	name: string;
	username: string;
}

export async function getAllUsers() {
	const response = await fetch(`${USERS_URL}`);

	if (!response.ok) {
		throw new Error('Failed to get all users');
	}

	const result: ResultBody[] = await response.json();

	return result;
}

export async function getUser(id: number) {
	const response = await fetch(`${USERS_URL}/${id}`);

	if (!response.ok) {
		throw new Error('Failed to get user');
	}

	const result: ResultBody = await response.json();

	return result;
}