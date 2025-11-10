"use client"
import React, { createContext, useContext, useMemo } from "react";
import { MainDataType, MyInfo, TechInfo, ProjectInfo, ContactInfo } from "./types";
import { MainData, myInfo } from "../data/data"; // your main data file

type DataContextType = {
  data: MainDataType;
  getProjectHero:() => ProjectInfo;
  getSkilltHero:() => TechInfo;
  getProfile: (profileKey?: string) => MyInfo;
  getSkill: (slug: string) => TechInfo | undefined;
  getAllSkills: () => TechInfo[];
  getProject: (slug: string) => ProjectInfo | undefined;
  getAllProjects: () => ProjectInfo[];
  getContact: () => ContactInfo;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const getProfile = (profileKey?: string): MyInfo => {
    const key = profileKey || sessionStorage.getItem("profile") || "Recruiters";
    return MainData.myInfo[key as keyof typeof myInfo] || MainData.myInfo["Recruiters"];
  };

  const getSkilltHero = (): TechInfo =>
    MainData.skills.hero

  const getSkill = (slug:string): TechInfo | undefined =>
    MainData.skills.list.find((skill) => skill.slug === slug);

  const getAllSkills = (): TechInfo[] =>
    MainData.skills.list;

    const getProjectHero = (): ProjectInfo =>
    MainData.projects.hero

  const getProject = (slug: string): ProjectInfo| undefined =>
    MainData.projects.list.find((proj) => proj.slug === slug);

  const getAllProjects = (): ProjectInfo[]  =>
    MainData.projects.list;

  const getContact = (profileKey?:string): ContactInfo => {
    const key = profileKey || sessionStorage.getItem("profile") || "Recruiters";
    return MainData.contacts[key as keyof typeof myInfo] || MainData.myInfo["Recruiters"];
  }
  const value: DataContextType = useMemo(
    () => ({
      data: MainData,
      getProfile,
      getSkill,
      getProjectHero,
      getSkilltHero,
      getAllSkills,
      getProject,
      getAllProjects,
      getContact,
    }),
    []
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};
