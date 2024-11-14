import { Link, useLocation } from "react-router-dom"



export const Breadcrumb = () => {
    const location = useLocation();

    const pathnames = location.pathname.split('/').slice(1);
    return (
        <div className="w-full flex ">
            {
                pathnames.map((pathname, i) => (
                    <div key={pathname}>
                        <span className="mx-1 font-mono ">
                            {(pathname == pathnames[pathnames.length - 1] && pathnames.length > 1) ? '>' : ''}
                        </span>
                        <Link to={`/${pathnames.slice( 0, i + 1 ).join('/')}`} className="text-gray-800 hover:text-blue-500 hover:underline capitalize cursor-pointer">

                            {pathname}
                        </Link>
                    </div>

                ))
            }
        </div>
    )
}
