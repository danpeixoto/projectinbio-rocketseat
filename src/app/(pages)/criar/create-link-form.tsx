'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { createLink } from '../../actions/create-link';
import { verifyLink } from '../../actions/verify-links';
import Button from '../../components/ui/button';
import TextInput from '../../components/ui/text-input';
import { sanitizeLink } from '../../lib/utils';

export default function CreateLinkForm() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string>('');
  const [link, setLink] = useState<string>(sanitizeLink(searchParams.get('link') || ''));
  const router = useRouter();

  function handleLinkChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError('');
    const sanitizedLink = sanitizeLink(e.target.value);
    setLink(sanitizedLink);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!link) {
      setError('Link não pode ser vazio');
      return;
    }

    const isLikenTaken = await verifyLink(link);

    if (isLikenTaken) {
      setError('Link já está em uso');
      return;
    }

    const isLinkCreated = await createLink(link);

    if (!isLinkCreated) {
      setError('Erro ao criar link');
      return;
    }

    router.push(`/${link}`);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span>projectinbio.com/</span>
        <TextInput value={link} onChange={handleLinkChange} />
        <Button className="w-[126px]">Criar</Button>
      </form>
      <div>
        <span className="text-accent-pink">{error}</span>
      </div>
    </>
  );
}
