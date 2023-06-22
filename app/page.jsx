import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        A Fun little Project
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">
          Joshua Ling
        </span>
      </h1>
      <p className="desc text-center">
        A little project I made using NextJs, Sign in with google 
        and create a post.

      </p>

      <Feed/>
    </section>
  )
}

export default Home