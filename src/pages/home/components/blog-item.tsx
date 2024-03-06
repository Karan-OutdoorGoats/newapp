import React from "react";

const BlogItem = () => {
  return (
    <div>
      <div className="overflow-clip">
        <img
          className="h-[320px] aspect-square  md:h-[570px] w-full object-cover transition duration-1000 hover:scale-125 hover:duration-700"
          src="https://www.outdoorgoats.com/media/blog/cache/450x540/magefan_blog/26.jpg"
          alt=""
        />
      </div>
      <div className="my-4 ">
        <p className="my-1 text-base font-OG-Medium text-lightTextColor">
          Top Treks in India & Gear to Keep You Warm: Amazing Winter Wonderland
        </p>
        <p className="text-sm font-OG-Regular text-[#999] my-1">
          The mountains, cloaked in a pristine blanket of snow, whisper
          adventures in…
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
