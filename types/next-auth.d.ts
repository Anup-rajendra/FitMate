import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    id: string;
    username:string;
    firstname:string;
    lastname:string;
    email:string;
   

  }

  interface User {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
 
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
 
  }
}
