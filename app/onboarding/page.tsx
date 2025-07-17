'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';           // <-- make sure this exists
import Image from 'next/image';

export default function CreateProfile() {
  const [fullName, setFullName]   = useState('');
  const [username, setUsername]   = useState('');
  const [bio, setBio]             = useState('');
  const [file, setFile]           = useState<File | null>(null);
  const [loading, setLoading]     = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!fullName || !username) return alert('Name & username required');
    setLoading(true);

    let avatarUrl: string | null = null;

    try {
      // 1. upload avatar if there's a file
      if (file) {
        const { data, error } = await supabase.storage
          .from('avatars')
          .upload(`public/${crypto.randomUUID()}`, file, { upsert: false });

        if (error) throw error;
        avatarUrl = data?.path
          ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/avatars/${data.path}`
          : null;
      }

      // 2. insert / upsert user profile
      const { error: dbError } = await supabase.from('profiles').upsert({
        id: (await supabase.auth.getUser()).data.user?.id,
        full_name: fullName,
        username,
        bio,
        avatar_url: avatarUrl,
        is_live: false
      });

      if (dbError) throw dbError;
      alert('Profile created ✔️');
      // 3. redirect to next onboarding step
      window.location.href = '/onboarding/recommend';
    } catch (err: any) {
      alert(err.message ?? 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Create&nbsp;Your&nbsp;Profile</h1>
        <p className="mt-2 text-gray-400">Set up your personal recommendation page</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-6 bg-[#1a1a1d]/70 backdrop-blur rounded-xl p-8 border border-[#3fa7ff25]"
      >
        {/* Full name */}
        <div>
          <label className="block mb-1 text-sm">Full Name</label>
          <input
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            className="w-full h-11 px-3 rounded-md bg-[#1a1a1d] border border-[#3fa7ff30] focus:outline-none"
            placeholder="Rinkesh Patel"
            required
          />
        </div>

        {/* Username */}
        <div>
          <label className="block mb-1 text-sm">Username</label>
          <input
            value={username}
            onChange={e => setUsername(e.target.value.replace(/\s/g, ''))}
            className="w-full h-11 px-3 rounded-md bg-[#1a1a1d] border border-[#3fa7ff30] focus:outline-none"
            placeholder="rinkesh"
            required
          />
          <p className="mt-1 ml-1 text-xs text-gray-500">
            recommend.app/<span className="opacity-90">{username || 'yourname'}</span>
          </p>
        </div>

        {/* Bio / tagline */}
        <div>
          <label className="block mb-1 text-sm">Bio / Tagline</label>
          <input
            value={bio}
            onChange={e => setBio(e.target.value)}
            className="w-full h-11 px-3 rounded-md bg-[#1a1a1d] border border-[#3fa7ff30] focus:outline-none"
            placeholder="Hand-picked gems across food, books & more — refreshed often"
          />
        </div>

        {/* Avatar upload */}
        <div>
          <label className="block mb-1 text-sm">Profile Photo</label>
          <label
            htmlFor="avatar"
            className="flex flex-col items-center justify-center h-40 border border-dashed border-gray-600 rounded-md cursor-pointer text-gray-400 hover:border-[#3fa7ff]"
          >
            {file ? (
              <Image
                src={URL.createObjectURL(file)}
                alt="preview"
                width={160}
                height={160}
                className="object-cover rounded-md"
              />
            ) : (
              <>
                <span className="text-3xl">📷</span>
                <span className="mt-2 text-sm">Upload your photo</span>
              </>
            )}
            <input
              id="avatar"
              type="file"
              accept="image/*"
              hidden
              onChange={e => setFile(e.target.files?.[0] || null)}
            />
          </label>
          <p className="mt-1 text-xs text-gray-500">Helps build trust with your recommendations</p>
        </div>

        {/* Submit */}
        <button
          disabled={loading}
          className="w-full h-11 rounded-md font-medium text-white
                     bg-gradient-to-r from-[#3fa7ff] to-[#7c4dff] hover:brightness-110 transition"
        >
          {loading ? 'Saving…' : 'Create Profile →'}
        </button>
      </form>
    </section>
  );
}
