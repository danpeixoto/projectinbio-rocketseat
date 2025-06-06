import 'server-only';
import { Link } from '../actions/add-custom-links';
import { db } from "../lib/firebase";

export type ProfileData = {
  userId: string;
  totalVisits: number;
  createdAt: number;
  name: string;
  imagePath: string;
  description: string;
  socialMedias: {
    github: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  }
  updatedAt?: number;
  link1?: Link;
  link2?: Link;
  link3?: Link;
  // adicionar mais depois - todo
};

export type ProjectData = {
  id: string;
  userId: string;
  projectName: string;
  projectDescription: string;
  projectUrl: string;
  imagePath: string;
  createdAt: string;
  totalVisits?: number;
};

export async function getProfileData(profileId: string) {
  const snapshot = await db.collection("profiles").doc(profileId).get();

  return snapshot.data() as ProfileData;
}

export async function getProfileProjects(profileId: string) {
  const snapshot = await db
    .collection("profiles")
    .doc(profileId)
    .collection("projects")
    .get();

  return snapshot.docs.map((doc) => doc.data() as ProjectData);
}

export async function getProfileId(userId: string) {
  if (!userId) return null;

  const snapshot = await db
    .collection("profiles")
    .where("userId", "==", userId)
    .get();

  if (snapshot.empty) return null;

  return snapshot.docs.map((doc) => doc.id)[0];
}
