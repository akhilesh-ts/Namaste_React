// import { NavData } from "../../utils/NavData";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// const MobileNav = () => {

//     const container = {
//         hidden: { opacity: 1, scale: 0 },
//         visible: {
//           opacity: 1,
//           scale: 1,
//           transition: {
//             delayChildren: 0.3,
//             staggerChildren: 0.2
//           }
//         }
//       };

//       const item = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//           y: 0,
//           opacity: 1
//         }
//       };
//   return (
//     <div className="p-2 z-50">

//       <motion.ul
//       className=" container bg-orange-200 p-4 rounded-lg flex flex-col justify-center items-center gap-3 "
//       variants={container}
//       initial="hidden"
//       animate="visible"
//       >
//  {NavData.map((navItem) => (
//   <Link to={navItem.path} key={navItem.id} ><motion.li variants={item} >{navItem.name}</motion.li></Link>

//         ))}
//       </motion.ul>

//     </div>
//   );
// };

// export default MobileNav;

import { Button, Drawer, Sidebar } from "flowbite-react";
import { NavData } from "../../utils/NavData";
import { useState } from "react";
import { Link } from "react-router-dom";

const MobileNav = ({ setIsOpenMobileNav }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Drawer
        backdrop={false}
        open={isOpen}
        onClose={handleClose}
        className="bg-white h-full shadow-xl"
      >
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0 mt-20 "
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    {NavData.map((item) => (
                      <div key={item?.id}>
                        <Link
                          to={item?.path}
                          onClick={() => setIsOpenMobileNav((prev) => !prev)}
                        >
                          <div className="flex items-center gap-3 mb-6 p-2  hover:rounded-lg hover:bg-white">
                            <h2 className="text-orange-400">{item?.icon}</h2>
                            <h2>{item?.name}</h2>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    
                    {/* <Sidebar.Item className="w-full">
                      <Dropdown label="Theme">
                        <Dropdown.Item>Light</Dropdown.Item>
                        <Dropdown.Item>Dark</Dropdown.Item>
                      </Dropdown>
                    </Sidebar.Item> */}
                    <Sidebar.Item>
                      <Button className="w-full bg-orange-400 text-white">
                        Sign in
                      </Button>
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default MobileNav;
