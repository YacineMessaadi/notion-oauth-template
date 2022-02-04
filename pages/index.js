import Head from "next/head";

export default function Home({ env }) {
  return (
    <div>
      <Head>
        <title>NextJS Tailwind Notion</title>
        <meta name="description" content="Template to bootstrap a SaaS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-screen h-screen bg-mesh items-center justify-center gap-3">
        <h1 className="text-center text-3xl text-blue-800">
          Welcome on the Template !
        </h1>
        <h2 className="text-center text-2xl text-red-600">
          If the texts are blue and red, Tailwind works !
        </h2>

        <a
          className="mt-5 p-4 mx-auto bg-transparent ring-blue-800 hover:ring-red-600 hover:text-red-600 text-blue-800 text-xl text-center transition ease-in duration-200 font-semibold outline-none ring-2 rounded-full"
          href={`https://api.notion.com/v1/oauth/authorize?owner=user&client_id=${env.notion_client_id}&redirect_uri=${env.redirect_after_oauth}&response_type=code`}
        >
          Notion OAuth
        </a>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      env: {
        notion_client_id: process.env.NOTION_CLIENT_ID,
        redirect_after_oauth: process.env.REDIRECT_AFTER_OAUTH,
      },
    },
  };
}
