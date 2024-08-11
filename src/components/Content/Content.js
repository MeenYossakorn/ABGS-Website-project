import image3d from "../../assets/image3d.png";
import test1 from "../../assets/test1.png";

export default function Content() {
  return (
    <>
      <div className="container mx-auto max-w-[1600px]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-[44px] p-5 py-10  lg:py-10 lg:px-10 lg:pb-20 lg:items-center lg:gap-5">
          <div className="flex flex-col justify-center lg:w-1/2">
            <h1 className="text-4xl font-bold text-black mb-2">Welcome !</h1>
            <p className="text-lg text-black">
              “ Automatic Barrier Gate with modern and reliable technology
              Oursystems are designed to increase convenience and security
              incontrolling access to various areas. “ <br />
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center ">
            <img
              src={image3d}
              alt="Example"
              className="w-full max-w-[1000px] rounded-lg "
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1600px]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-[44px] p-5 py-6  lg:py-5 lg:px-5 lg:pb-20 lg:items-center lg:gap-5">
          <div className="lg:w-1/2 flex justify-center ">
            <img
              src={test1}
              alt="Example"
              className="w-full max-w-[1000px] rounded-lg "
            />
          </div>

          <div className="flex flex-col justify-center lg:w-1/2">
            <h1 className="text-4xl font-bold text-black mb-2">
              Automatic Barrier Gate System
            </h1>
            <p className="text-lg text-black">
              “ Automatic barrier gate system is designed for maximum
              convenience and ease of use. Featuring advanced technology and a
              user-friendly design, it allows for efficient and quick control of
              access to various areas.“ <br />
            </p>
            <br />
            <h1 className="text-xl font-bold text-black mb-2">Key Features</h1>
            <ul className="list-disc pl-5">
              <li>
                <div className="text-md font-bold text-black">
                  Convenient Control:
                </div>
                <div className="ml-2">Easy to use, touchless, and secure.</div>
              </li>
              <li>
                <div className="text- font-bold text-black">
                  Easy Installation:
                </div>
                <div className="text-sm ml-2">
                  Can be installed quickly and effortlessly in any location.
                </div>
              </li>
              <li>
                <div className="text-md font-bold text-black">
                  Seamless Access:
                </div>
                <div className="text-sm ml-2">
                  The system automatically opens the gate as you approach,
                  eliminating the need for manual operation.
                </div>
              </li>
              <li>
                <div className="text-md font-bold text-black">
                  User-Friendly:
                </div>
                <div className="text-sm ml-2">
                  This ease of use and convenience ensures smooth and
                  hassle-free management of access control.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
