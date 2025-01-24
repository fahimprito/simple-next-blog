async function getPost(id) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return data.json()
}

export default async function Page({ params }) {
    const { id } = await params
    const postData = getPost(id)

    const [post] = await Promise.all([postData])

    return (
        <div>
            blogDetails {post.title}
        </div>
    );
}
