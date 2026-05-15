"use client";

import Link from "next/link";

export default function EmailConfirmedPage() {
    return (
        <div className='flex-1 grid place-items-center px-4 py-8'>
            <div className='w-full max-w-sm'>
                <div className='bg-sand-4 rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col gap-5 text-center'>
                    <div>
                        <h1 className='text-2xl font-bold text-sand-1'>
                            You&apos;re confirmed.
                        </h1>
                        <p className='text-sm text-sand-1/60 mt-1'>
                            Your email has been verified. You can close this tab
                            and go back to finish signing in on your original
                            device.
                        </p>
                    </div>
                    <p className='text-sm text-sand-1/70'>
                        On the same device? Sign in below.
                    </p>
                    <Link
                        href='/signin'
                        className='self-center px-8 py-2 bg-sand-1 text-ink font-bold rounded-full hover:opacity-90 transition-all'>
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
}
