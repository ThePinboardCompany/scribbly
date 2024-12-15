'use server';

import { redirect } from 'next/navigation';
import { signOut } from '~/server/auth';

export async function signOutAction(formData: FormData) {
	await signOut();
}

export async function signInAction(formData: FormData) {
	redirect('/signin');
}
