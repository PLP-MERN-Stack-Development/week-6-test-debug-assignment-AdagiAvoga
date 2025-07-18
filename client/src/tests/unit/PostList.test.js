import { render, screen, waitFor } from "testing-library/react";

function PostList() {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        fetch("/api/posts")
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);

    return (
        <ul>
            {posts.map((post, index) => (
                <li key={index}>{post.title}</li>
            ))}
            </ul>
    );
}

global.fetch = jest.fn(() => 
Promise.resolve({
    json: () => Promise.resolve([{ title: "Sample Post" }]),
})
);

test("renders posts from API", async () => {
    render(<PostList />);
    await waitFor(() => {
        expect(screen.getBytext("Sample Post")).toBeInTheDocument();
    });
});