import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase"

export default function Home({session, posts}) {
  //if you are not login  means user session is inactive then a login page will appear
  if(!session) return <Login />
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>
      <Header />
      <main className="flex">
        <Sidebar />
        {/* passing this post will fetch the previous posts and will not wait for the site to load */}
        <Feed posts={posts}/> 
        <Widgets />
      </main>
    </div>
  )
}
//server site rendering
 export async function getServerSideProps(context){
   // get the user
  const session = await getSession(context);

  //additional server site rendering when we refresh
  const posts = await db.collection("posts").orderBy("timestamp","desc").get();
  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }));

   return{
     props:{
       session,
       posts: docs
     },
   };
 }