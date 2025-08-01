import { signUpEmail } from '@/lib/database';

export interface RequestData {
    email: string;
}

export interface ResponseData {
    success: boolean;
    errorMessage?: string;
}

export async function POST(req: Request) {
    console.log('body', req.body);

    const body = await req.json();

    if (typeof body !== 'object') {
        return new Response(
            JSON.stringify({
                success: false,
                errorMessage: 'Invalid request body',
            }),
            {
                status: 400,
            },
        );
    }

    const { email } = body;

    if (!email || typeof email !== 'string') {
        return new Response(
            JSON.stringify({
                success: false,
                errorMessage: 'Invalid request body',
            }),
            {
                status: 400,
            },
        );
    }

    if (!isValidEmail(email)) {
        return new Response(
            JSON.stringify({
                success: false,
                errorMessage: `Invalid email ${email}`,
            }),
            {
                status: 400,
            },
        );
    }

    try {
        await signUpEmail(email);

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (e) {
        return new Response(
            JSON.stringify({
                success: false,
                errorMessage: 'Internal server error',
            }),
            { status: 500 },
        );
    }
}

function isValidEmail(email: string): boolean {
    // https://stackoverflow.com/a/46181
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email.toLowerCase());
}
