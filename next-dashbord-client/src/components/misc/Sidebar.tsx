import Image from "next/image";
import { MdSpaceDashboard } from "react-icons/md";
import { BsTerminal } from "react-icons/bs";
import { FaWrench } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import styles from "./index.module.scss";
import { useRouter } from "next/router";

const routers = [
  {
    name: "dashbord",
    getPath: (id: string) => `/dashbord/${id}`,
    icon: <MdSpaceDashboard size={48} />,
  },
  {
    name: "commands",
    getPath: (id: string) => `/dashbord/${id}/commands`,
    icon: <BsTerminal size={48} />,
  },
  {
    name: "settings",
    getPath: (id: string) => `/dashbord/${id}/settings`,
    icon: <FaWrench size={48} />,
  },
];

export const Sidebar = () => {
  const router = useRouter();
  return (
    <div className={styles.sidebar}>
      <Image
        className={styles.avatar}
        src="/me.png"
        height={80}
        width={80}
        alt="guild_avatar"
      />
      <div className={styles.icons}>
        {routers.map((route) => (
          <div
            key={route.name}
            onClick={() =>
              router.push(route.getPath(router.query?.id!.toString()))
            }
          >
            {route.icon}
          </div>
        ))}
      </div>
      <div>
        <RiLogoutCircleLine size={48} />
      </div>
    </div>
  );
};
