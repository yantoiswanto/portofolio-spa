import { Link } from 'react-router-dom';
export default function Sidebar({ listSidebar }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-3/12 h-screen border border-green-800 shadow-2xl rounded-r-xl">
        <div className="flex items-center justify-center mb-10 text-center border-2 border-green-700 rounded w-28 h-28">
          image
        </div>
        <div className="flex items-center justify-center">
          <ul className="w-32">
            {listSidebar.map((item) => (
              <Link to={item.link} key={item.id}>
                <li className="m-2 text-center">
                  <button className="w-full border-2 border-green-800 rounded-md w- hover:bg-green-800 hover:text-white focus:bg-green-800 focus:text-white">
                    {item.title}
                  </button>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
