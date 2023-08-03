import { Link } from "react-router-dom";
import "./ThirdPersonProfile.css";

function ThirdPersonProfile({ data }) {
  console.log(data.username);
  return (
    <>
      <section>
        <img
          src="https://res.cloudinary.com/dtrjdcrme/image/upload/v1651473734/socialmedia/avatars/adarsh-balika_dct6gm.webp"
          alt="third-person-profile"
          className="third-person-profile"
        />
        <p>
          {data?.firstName ?? "adrash"} {data?.lastName ?? "balika"}
        </p>
        <p>@{data?.username ?? "@adrash"}</p>

        <button className="button-primary">follow</button>
      </section>

      <section>
        <p>{data.bio}</p>
        <Link>{data.website}</Link>
      </section>

      <div>
        <p>posts</p>
        <p>followers</p>
        <p>following</p>
      </div>
    </>
  );
}

export { ThirdPersonProfile };
