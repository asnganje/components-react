import Link from "./Link";

export default function Sidebar() {
    const links = [{label: 'Dropdown', path: '/'},
                    {label: 'Accordion', path: '/accordion'},
                    {label: 'Buttons', path: '/buttons'},
                    {label: 'Submit', path: '/modal'},
                    {label: 'Table', path: '/table'},
                    ]
    const renderedLinks = links.map((link)=> {
        return <Link key={link.label} to={link.path} className='mb-3'
        activeClassName='font-bold border-l-4 border-blue-500 pl-2'
        >{link.label}</Link>
    })
    return (
        <div className="sticky top-0 overflow-y-scrol flex flex-col items-start">
            {renderedLinks}
        </div>
    )
}