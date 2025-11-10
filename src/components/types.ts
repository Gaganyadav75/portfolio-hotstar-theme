// types.ts
export type List1Item = {
  text: string;
  title: string;
};

export type Button = {
  title: string;
  text: string;
  link: string;
  email?: string;
};

export type TechInfo = {
  id: number;
  title: string;
  slug:string,
  list1: List1Item[];
  description: string[];
  list2?: string[];
  list2top?: number;
  background: string;
  button?: Button;
  button2?: Button;
};

export type MyInfo = {
  id:number
  profile?: string;
  title: string;
  list1: List1Item[];
  description: string[];
  list2?: string[];
  list2top?: number;
  background: string;
  button?: Button;
  button2?: Button;
};

export type ProjectInfo = {
  id: number;
  title: string;
  slug:string,
  list1: List1Item[];
  description: string[];
  list2?: string[];
  list2top?: number;
  background: string;
  button?: Button;
  button2?: Button;
};

export type ContactInfo = {
  id:number,
  title: string;
  list1: List1Item[];
  description: string[];
  list2: string[];
  list2top: number;
  background: string;
  button?: Button;
  button2?: Button;
};

export type MainDataType = {
  myInfo: {[key : string]:MyInfo};
  skills: {hero:TechInfo,list:TechInfo[]};
  projects: {hero:ProjectInfo,list:ProjectInfo[]}
  contacts:{[key : string]:ContactInfo};
};
