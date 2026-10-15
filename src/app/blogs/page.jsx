import Link from "next/link";

const BlogsPage = () => {

    const blogs = [
        {
            id: 1,
            title: "Getting Started with React.js",
            author: "John Smith",
            category: "Web Development",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
            publishedDate: "2026-09-15",
            readTime: "5 min read",
            description: "Learn the fundamentals of React.js and discover how to build modern, interactive user interfaces.",
            content: "React.js is a popular JavaScript library for building user interfaces. It uses reusable components, making applications easier to develop and maintain. Beginners should start by learning JSX, props, state, and hooks.",
            tags: ["React", "JavaScript", "Frontend"]
        },
        {
            id: 2,
            title: "10 Essential JavaScript Tips for Beginners",
            author: "Sarah Johnson",
            category: "JavaScript",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
            publishedDate: "2026-09-20",
            readTime: "7 min read",
            description: "Improve your JavaScript skills with practical tips and techniques every beginner developer should know.",
            content: "JavaScript is one of the most important programming languages for web development. Understanding variables, functions, arrays, objects, promises, and async/await will help you write cleaner and more efficient code.",
            tags: ["JavaScript", "Programming", "Tips"]
        },
        {
            id: 3,
            title: "Building Responsive Websites with Tailwind CSS",
            author: "Michael Brown",
            category: "CSS",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            publishedDate: "2026-09-25",
            readTime: "6 min read",
            description: "Discover how Tailwind CSS helps developers create beautiful, responsive websites quickly.",
            content: "Tailwind CSS is a utility-first CSS framework that allows developers to style websites directly using predefined classes. Its responsive utilities make it easy to design layouts for mobile, tablet, and desktop screens.",
            tags: ["Tailwind CSS", "CSS", "Responsive Design"]
        },
        {
            id: 4,
            title: "The Future of Artificial Intelligence in Web Development",
            author: "Emily Davis",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
            publishedDate: "2026-10-01",
            readTime: "8 min read",
            description: "Explore how artificial intelligence is transforming web development and improving developer productivity.",
            content: "Artificial intelligence is changing the way developers build websites and applications. AI-powered tools can assist with code generation, debugging, testing, and design. Developers who combine strong fundamentals with AI tools can improve their workflows.",
            tags: ["AI", "Technology", "Web Development"]
        }
    ];


    return (
        <div>
            {
                blogs.map((blog) => <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <Link href={`/blogs/${blog.id}`}>Show Details</Link>
                </div>)
            }
        </div>
    );
};

export default BlogsPage;