import React from "react";

function Card({
  username = "Player Name",
  bio = "Playing Style",
  btnText = "View Profile",
  src = "https://media.istockphoto.com/id/1129564331/vector/cricket-women.jpg?s=612x612&w=0&k=20&c=3hDmpgVrX_y4OsI8cowklJUQQAH7jtf6e55JcKEE8zI=",
}) {
  // console.log(username);
  return (
    <div className="inline-flex">
      <div className="relative h-[400px] w-[325px] rounded-md mb-5 mx-2">
        <img
          src={src}
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">{bio}</p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-dark">
            {btnText} →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
