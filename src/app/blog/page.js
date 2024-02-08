import styles from "../../../styles/pagestyles/blog.module.scss";
import BlogTile from "../../components/blog/BlogTile";
import { blogData } from "../../../helpers/blogData";

export default function BlogPage() {
    return (
        <main className={styles.BlogPage}>
            <section className={styles.BlogPage_headingSection}>
                <h1 className={styles.BlogPage_primaryHeading}>Blog</h1>
            </section>
            <section className={"ComingSoonContainer"}>
                <p className={"ComingSoonText"}>Coming Soon...</p>
            </section>
            {/* <section className={styles.BlogPage_blogsContainer}>
                {blogData.map((b) => (
                    <BlogTile title={b.title} description={b.description} />
                ))}
            </section> */}
        </main>
    );
}
