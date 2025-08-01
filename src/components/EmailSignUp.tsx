import Image from 'next/image';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';

export default function EmailSignup() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const res = await fetch('/api/signup', {
                method: 'POST',
                body: JSON.stringify({ email }),
            });

            console.log(res);

            if (res.status === 200) {
                // clear email
                setEmail('');
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        } catch (e) {
            console.error(e);
            setSuccess(false);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    useEffect(() => {
        console.log('success', success);

        if (success) {
            toast.success('Subscribed email');
            setSuccess(null);
        } else if (success === false) {
            toast.error('Failed to subscribed');
            setSuccess(null);
        }
    }, [success, setSuccess]);

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-[#06060599] border border-[#372F2F] py-4 flex items-center justify-between rounded-md mt-8"
        >
            <div className="relative left-2.5 w-5 h-5 mr-4">
                <Image
                    src="/assets/mail.svg"
                    alt="frame"
                    fill
                    className="object-contain stroke-[#8A6F6A] stroke-1"
                />
            </div>
            <input
                type="email"
                name="email"
                placeholder="Sign up for updates"
                value={email}
                onChange={handleChange}
                required
                className="bg-transparent pr-4 placeholder-[#8A6F6A] text-white focus:outline-none"
                disabled={isLoading}
            />
            <button
                type="submit"
                className="relative right-2.5 w-10 h-5 border-[#8A6F6A] border-[0.735px] hover:opacity-80 transition-opacity duration-200"
                disabled={isLoading}
            >
                <Image
                    src="/assets/submit.svg"
                    alt="arrow"
                    fill
                    className="object-contain"
                />
            </button>
        </form>
    );
}
