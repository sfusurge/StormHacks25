import Image from 'next/image';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { toast } from 'sonner';
import HoverEffectButton from './HoverEffectButton';

export default function EmailSignup() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean | null>(null);


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("in submit");

        try {
            setIsLoading(true);
            const res = await fetch('/api/signup', {
                method: 'POST',
                body: JSON.stringify({ email }),
            });

            console.log(res);

            if (res.status === 200) {
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
            className="w-full sm:max-w-md bg-backgroundalt border border-borderalt py-4 sm:py-2 flex items-center duration-300 ease-out"
        >
            <div className="relative left-2.5 w-5 h-5 mr-4">
                <Image
                    src={`/assets/mail.svg`}
                    alt="email icon"
                    fill
                    className="object-contain"
                    data-demon="primary"
                />
            </div>
            <input
                type="email"
                name="email"
                placeholder="Sign up for updates"
                value={email}
                onChange={handleChange}
                required
                className="bg-transparent flex-1 w-full text-base sm:text-xs italic font-semibold pl-1 pr-6 placeholder-primary text-main focus:outline-none [&::placeholder]:not-italic [&::placeholder]:font-normal"
                disabled={isLoading}
            />
            <HoverEffectButton type='submit' className='relative flex items-center justify-center right-4 w-10 h-7  cursor-pointer  hover:opacity-80 transition-opacity duration-200'>
                <Image
                    src={`/assets/submit.svg`}
                    alt="submit arrow"
                    width={24}
                    height={16}
                    data-demon="primary"
                    className="object-contain"
                />
            </HoverEffectButton>
        </form>
    );
}
