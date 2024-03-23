import { client, urlFor } from "@/app/lib/sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug) {
  const query = `
    *[_type == "blog" && slug.current == '${slug}'] {
      "currentSlug": slug.current,
      title,
      content[]{
        ...,
        _type == "image" => {
          "url": asset->url,
          "alt": alt
        }
      },
      titleImage {
        asset-> {
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    }[0]`;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({ params }) {
  const data = await getData(params.singleBlog);
  console.log(data);
  return (
    <div className="mt-24">
      <h1 className="text-center">
        <span className="block text-base text-primary font-semibold tracking-wide uppercase">
          Suleman Ahmed - Blog
        </span>
        <span className="mt-2 block text-3xl leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>

      <div className="px-2 max-w-2xl mx-auto">
        <Image
          src={data.titleImage.asset.url}
          width={data.titleImage.asset.metadata.dimensions.width}
          height={data.titleImage.asset.metadata.dimensions.height}
          alt={data.titleImage.alt}
          priority
          className="rounded-lg mt-8 border mx-auto"
        />
      </div>

      <div className="mt-16 max-w-5xl lg:ml-5 max-md:px-2 prose prose-lg prose-primary">
        <PortableText
          value={data.content}
          components={{
            types: {
              code: (value) => <div>{JSON.stringify(value)}</div>,
            },
          }}
        />
      </div>
    </div>
  );
}
