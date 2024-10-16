
const QR = () => {
  return (
    <div className="w-5/6 h-[60%] md:w-1/3  xl:w-1/5 bg-slate-100 shadow-xl rounded-xl p-4 flex flex-col">
      <img 
      className="  bg-slate-100 rounded-xl h-[60%] aspect-square resize-none"
      src="./assets/image-qr-code.png" alt="ff" />
      <div className="text-lg font-bold p-3 text-slate-800 text-center">Improve your front-end skills by building projects</div>
      <div className=" text-slate-500 text-center">
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </div>
    </div>
  );
};

export default QR;
