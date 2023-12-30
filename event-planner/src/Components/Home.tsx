import Button from "./Button";

interface HomeProps {
  fn: () => void;
  fn1: () => void;
}

function Home({ fn, fn1 }: Readonly<HomeProps>) {
  return (
    <div className="home">
      <div className="top">
        <h1>Welcome to Our Event Planner</h1>
        <h5>
          Plan, create, and explore events effortlessly <br /> Whether
          you're looking for exciting gatherings or aiming to organize one{" "}
          <br /> our platform has you covered <br /> Get started today and
          make your events memorable!
        </h5>
      </div>

      <div className="hleft">
        <h1>Browse Events</h1>
        <p>
          Explore a wide range of upcoming events tailored just for you <br />{" "}
          Find what interests you the most and join the excitement!
        </p>

        <Button txt="Browse Events" icon="fa-magnifying-glass" fn={fn} />
      </div>

      <div className="hright">
        <h1>Create Events</h1>
        <p>
          Bring your ideas to life! Organize and promote events that <br />{" "}
          inspire and engage Share your passion with the world.
        </p>

        <Button txt="Create Event" icon="fa-plus" fn={fn1} />
      </div>
    </div>
  );
}

export default Home;
