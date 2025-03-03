import { Surreal } from "surrealdb.node";

const db = new Surreal();

type Post = {
  title: string, 
  summary: string, 
  postedAt: string, 
  markdown: string,
  html: string,
  username: string,
  slug: string
}

