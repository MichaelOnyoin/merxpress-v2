
//import { cookies } from 'next/headers'
import { deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import { User } from '@/db/definitions'
 
export async function logout() {
  await deleteSession()
  redirect('/login')
}

export async function getUser() {
    try{
        const session = await getSession();
        const users = await fetch('http://localhost:8000/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!users.ok) {
            throw new Error('Failed to fetch user data');
        }
        const userData = await users.json();
        const user = userData.find((u: User) => u.id === session?.userId);
        return user || null;
    } catch (error) {
        console.error('Error getting user:', error);
    }

}