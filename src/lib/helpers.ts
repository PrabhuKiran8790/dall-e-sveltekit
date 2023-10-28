import { db } from './db';
import { users } from './db/schema';
import { eq } from 'drizzle-orm';

export const getUserData = async (email: string) => {
	return await db.select().from(users).where(eq(users.email, email)).limit(1);
};
