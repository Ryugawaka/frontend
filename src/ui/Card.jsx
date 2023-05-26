const Card = (props) => {
  const { title, image, city } = props;
  return (
    <div className="w-[45vw] h-[30vw] border border-gray-900 flex flex-col justify-between px-2 py-2 hover:bg-gray-100 cursor-pointer">
     {image ?
      <img className="mb-4 h-[23vw]" src={image} alt={"preview"} /> : <div className="mb-4 h-[30vw] bg-slate-400" />}
      <div className="flex justify-between">
        <p className="text-[2vw] text-center font-bold justify-self-end text-sart hover:underline">
          {title}
        </p>
        <div className="flex pt-[1vw]">
          <p className="text-[1.4vw] text-center font-medium mr-[1vw]">{city}</p>
          <img
          className="w-[2vw] h-[2vw]"
            src={"https://www.svgrepo.com/show/127575/location-sign.svg"}
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
