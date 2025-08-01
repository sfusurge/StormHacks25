import knex from 'knex';

export const database = knex({
    client: 'pg',
    connection: process.env.DBURL,
});

export async function signUpEmail(email: string) {
    try {
        await database('sh_25_emails').insert({ email }, '*');
    } catch (e) {
        console.error(`Failed to sign up ${email} for update`, e);
        throw e;
    }
}
