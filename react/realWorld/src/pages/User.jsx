import { useContext } from "react";
import { UserContext } from "../utils/user";

export default function User() {
  const user = useContext(UserContext);
  console.log(user, "userrrrrrrrrrr");
  if (user === null) {
    return null;
  }
  // return null
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full py-14  flex flex-col items-center justify-center bg-gray-200/50">
        <div className="flex flex-col justify-center items-center" style={{ width: "50%" }}>
          <div className=" w-24 h-24 rounded-full overflow-hidden">
            <img className="w-full h-full" src={user.image} alt="" />
          </div>
          <p className="text-center text-2xl font-thin mt-3">
            {user.username}
          </p>
          <p>
            {user.bio}
          </p>
        </div>
      </div>
      <div className="main flex items-start justify-center mt-8">
        {/* <div className="flex-1">
            <HomeArticle></HomeArticle>
          </div>
          <div className="">
            <TagList></TagList>
          </div> */}
      </div>
    </div>
  );
}
