import { createClient } from "../prismicio";
import Hero from "../components/Hero/Hero";
import Nav from "../components/Nav/Nav";
import SectionPadding from "../components/SectionPadding/SectionPadding";
import AboutSection from "../components/AboutSection/AboutSection";
import BlogSection from "../components/BlogSection/BlogSection";
import PortfolioSection from "../components/PortfolioSection/PortfolioSection";
import MetaTags from "../components/MetaTags/MetaTags";

export default function Home({ page, blogs }) {
  return (
    <>
      <MetaTags
        title="Home"
        description="Hello, my name is Jason. Welcome to my website"
        image={0}
      />
      <Hero data={page} />
      <BlogSection data={blogs} />
      <PortfolioSection />
      <SectionPadding color={"black"} />
    </>
  );
}

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const blogs = await client.getByType("blog_post", {
    page: 1,
    pageSize: 4,
    orderings: {
      field: "my.blog_post.timestamp",
      direction: "desc",
    },
  });
  const page = await client.getByUID("homepage", "index");

  return {
    props: { page, blogs }, // Will be passed to the page component as props
  };
}
