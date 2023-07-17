 const links = [
    {
        href: "/",
        name:"Home",
    },
    {
        href: "#Store",
        name:"Our Story",
    },
    {
        href: "#Motorbikes",
        name:"Motorbikes",
    },
    {
        href: "#Quads",
        name:"Quad ATVS",
    },
    {
        href: "#Location",
        name:"Location",
    },
    {
        href: "#Contact",
        name:"Contact",
    },
    
 ];

function LargeLinks() {
  return (
    <div>
        <ul className="w-full h-full flex  items-center justify-between text-white">
        {
            links.map((link) =>  <li className="w-full mr-8 text-center">
        <a href={link.href} className="text-lg  font-semibold hover:bg-orange-300 hover:text-white whitespace-nowrap block w-full cursor-pointer  py-4 px-3">{link.name}</a>
      </li>)
        }
    </ul> 
    </div>
  )
}

export default LargeLinks