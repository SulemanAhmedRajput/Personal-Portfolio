import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
          title,
          content,
          titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({ params }) {
  const data = await getData(params.singleBlog);
  console.log(data.content);
  return (
    <div className="mt-24">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Suleman Ahmed - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <div className="px-2">
        <Image
          src={urlFor(data.titleImage).url()}
          width={800}
          height={800}
          alt="Title Image"
          priority
          className="rounded-lg  mt-8 border mx-auto"
        />
      </div>
      <div className="mt-16 max-w-5xl lg:ml-5 max-md:px-2 prose prose-blue  prose-lg prose-p:mx-3  dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText
          value={data.content}
          serializers={{
            code: ({ node, children }) => (
              <pre className="overflow-x-auto rounded-md bg-gray-100 p-4">
                <code className="text-sm">{children}</code>
              </pre>
            ),
          }}
        />
      </div>
    </div>
  );
}
