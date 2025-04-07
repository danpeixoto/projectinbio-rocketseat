import { ProfileData, ProjectData } from "../../server/get-profile-data";
import ProjectCard from "../commons/project-cards";
import { TotalViews } from "../commons/total-views";
import UserCard from "../commons/user-card/user-card";
import Button from "../ui/button";
import TextInput from "../ui/text-input";

export default function Hero() {
  const fakeProjectData: ProjectData = {
    id: "1",
    userId: "1",
    projectName: "Projeto 1",
    projectDescription: "Descrição do projeto 1",
    projectUrl: "https://example.com",
    imagePath: "/project1.jpg",
    createdAt: "2023-01-01",
    totalVisits: 100,
  };
  const fakeProjectData2: ProjectData = {
    id: "2",
    userId: "1",
    projectName: "Projeto 2",
    projectDescription: "Descrição do projeto 2",
    projectUrl: "https://example.com",
    imagePath: "/project2.jpg",
    createdAt: "2023-01-01",
    totalVisits: 200,
  };
  const fakeProfileData: ProfileData = {
    userId: "1",
    totalVisits: 300,
    createdAt: 1672531199000,
    name: "Seu Nome",
    imagePath: "/me.jpeg",
    description: "Uma breve descrição sobre você ou seu trabalho.",
    socialMedias: {
      github: "",
      instagram: "",
      linkedin: "",
      twitter: "",
    },
    updatedAt: 1672531199000,
  };


  return (
    <div className="flex h-screen">
      <div className="w-full flex flex-col gap-2 mt-[35vh] ">
        <h1 className="text-5xl font-bold text-white leading-[64px]">Seus projetos e redes sociais em um único link</h1>
        <h2 className="text-xl leading-6">Crie sua própria página de projetos e compartilhe eles com o mundo.
          <br />
          Acompanhe o engajamento com Analytics de cliques
        </h2>
        <div className="flex items-center gap-2 w-full mt-[10vh]">
          <span className="text-white text-xl">projectinbio.com</span>
          <TextInput placeholder="Seu link personalizado" />
          <Button>Registrar</Button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#4B2DBB,transparent_55%)]">
        <div className="relative">
          <UserCard profileData={fakeProfileData} />
          <div className="absolute -bottom-[7%] -right-[45%]">
            <TotalViews />
          </div>
          <div className="absolute top-[20%] -left-[45%] -z-10">
            <ProjectCard img="/project1.jpg" isOwner={false} project={fakeProjectData} />
          </div>
          <div className="absolute -top-[5%] -left-[55%] -z-10">
            <ProjectCard img="/project2.jpg" isOwner={false} project={fakeProjectData2} />
          </div>
        </div>
      </div>
    </div>
  )
}
