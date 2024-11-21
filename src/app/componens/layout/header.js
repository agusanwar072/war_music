const Header = () => {
  return (
    <nav className="bg-primary w-[80%] h-[70px] fixed top-0 right-0">
      <div className="flex justify-between items-center h-[65px] mx-[30px] max-sm:mx-[10px] ">
        <div className="max-lg:hidden">
          <ul className="text-white flex justify-between">
            <li>
              <button className="border border-0 rounded-lg p-2 hover:bg-[#333333]">
                Playlists
              </button>
            </li>
            <li>
              <button className="border border-0 rounded-lg p-2 hover:bg-[#333333]">
                Podcasts
              </button>
            </li>
            <li>
              <button className="border border-0 rounded-lg p-2 hover:bg-[#333333]">
                Artists
              </button>
            </li>
            <li>
              <button className="border border-0 rounded-lg p-2 hover:bg-[#333333]">
                Albums
              </button>
            </li>
          </ul>
        </div>
        <div>
          <form className="flex bg-white border rounded-3xl p-2 w-[370px] max-lg:w-[250px]">
            <svg
              className="mx-1"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_102_31)">
                <path
                  d="M10.533 1.8727C5.35298 1.8727 1.12598 6.0127 1.12598 11.1517C1.12598 16.2907 5.35198 20.4307 10.533 20.4307C12.767 20.4307 14.823 19.6607 16.44 18.3727L20.793 22.7257C20.8852 22.8212 20.9956 22.8974 21.1176 22.9498C21.2396 23.0022 21.3708 23.0298 21.5036 23.031C21.6364 23.0321 21.768 23.0068 21.8909 22.9565C22.0138 22.9062 22.1255 22.832 22.2194 22.7381C22.3133 22.6442 22.3875 22.5326 22.4378 22.4097C22.4881 22.2868 22.5134 22.1551 22.5122 22.0223C22.5111 21.8895 22.4835 21.7583 22.4311 21.6363C22.3787 21.5143 22.3025 21.404 22.207 21.3117L17.863 16.9677C19.2079 15.328 19.942 13.2724 19.94 11.1517C19.94 6.0117 15.714 1.8717 10.533 1.8717V1.8727ZM3.12598 11.1517C3.12598 7.1457 6.42798 3.8717 10.533 3.8717C14.638 3.8717 17.94 7.1457 17.94 11.1517C17.94 15.1577 14.638 18.4307 10.533 18.4307C6.42798 18.4307 3.12598 15.1587 3.12598 11.1517Z"
                  fill="black"
                  fillOpacity="0.698"
                />
              </g>
              <defs>
                <clipPath id="clip0_102_31">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.59375)"
                  />
                </clipPath>
              </defs>
            </svg>
            <input
              className="outline-none w-[250px] max-lg:w-[200px]"
              type="text"
              name="text"
              id="text"
              placeholder="What do you want to listen to?"
            />
          </form>
        </div>
        <div className="lg:hidden">
          <svg
            className="w-[30px] h-[30px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="white"
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Header;
