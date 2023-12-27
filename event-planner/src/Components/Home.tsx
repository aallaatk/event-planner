import Button from "./Button"

function Home() {
  return (
    <div className="home">
        <div className="top">
        <h1>Welcome to Our Event Planner</h1>
<p>Plan, create, and explore events effortlessly <br /> Whether you're looking for exciting gatherings or aiming to organize one <br /> our platform has you covered <br /> Get started today and make your events memorable!</p>

        </div>
      <div className="hleft">
      <h1>Browse Events</h1>
<p>Explore a wide range of upcoming events tailored just for you <br /> Find what interests you the most and join the excitement!</p>

      <Button txt="Browse Events" icon="fa-magnifying-glass" />
      </div>
      <div className="hright">
      <h1>Create Events</h1>
<p>Bring your ideas to life! Organize and promote events that inspire and engage <br /> Share your passion with the world.</p>

      <Button txt="Create Event" icon="fa-plus" />
      </div>
    </div>
  )
}

export default Home
