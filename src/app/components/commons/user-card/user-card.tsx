import { formatUrl } from '@/src/app/lib/utils';
import { ProfileData } from '@/src/app/server/get-profile-data';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import Button from '../../ui/button';
import AddCustomLink from './add-custom-link';
import EditSocialLinks from './edit-social-links';

export default function UserCard({ profileData }: { profileData: ProfileData }) {
  const { socialMedias } = profileData || { socialMedias: {} };

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white/10 border-solid rounded-3xl text-white bg-[#121212]">
      <div className="size-48">
        <img
          src="/me.jpeg"
          alt="Daniel Pinto"
          className="rounded-full object-cover w-full h-full" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold min-w-0 overflow-hidden">Daniel Pinto</h1>
        </div>
        <p className="opacity-40">
          "Eu faço produtos para a Internet"
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          <div className="flex gap-3">
            {
              socialMedias.github && (
                <Link href={`https://www.github.com/${socialMedias.github}`} target='_blank' className='p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]'>
                  <Github />
                </Link>
              )
            }
            {
              socialMedias.instagram && (
                <Link href={`https://www.instagram.com/${socialMedias.instagram}`} target='_blank' className='p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]'>
                  <Instagram />
                </Link>
              )
            }
            {
              socialMedias.linkedin && (
                <Link href={`https://www.linkedin.com/in/${socialMedias.linkedin}`} target='_blank' className='p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]'>
                  <Linkedin />
                </Link>
              )
            }
            {
              socialMedias.twitter && (
                <Link href={`https://www.twitter.com/${socialMedias.twitter}`} target='_blank' className='p-3 rounded-xl bg-[#1e1e1e] hover:bg-[#2e2e2e]'>
                  <Twitter />
                </Link>
              )
            }
            <EditSocialLinks socialMedias={socialMedias} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full h-[172px]">
        <div className="w-full flex flex-col items-center gap-3">
          {profileData?.link1?.title && (
            <Link
              href={formatUrl(profileData?.link1.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData.link1.title}</Button>
            </Link>
          )}
          {profileData?.link2?.title && (
            <Link
              href={formatUrl(profileData?.link2.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData.link2.title}</Button>
            </Link>
          )}
          {profileData?.link3?.title && (
            <Link
              href={formatUrl(profileData?.link3.url)}
              target="_blank"
              className="w-full"
            >
              <Button className="w-full">{profileData.link3.title}</Button>
            </Link>
          )}
        </div>
      </div>
      <AddCustomLink />
    </div>
  )
}
