import { irish } from "@/global/fonts";
import { twMerge } from "tailwind-merge";
import { MoonIcon, SunIcon } from "@/components/Icons/icons";
import useStore from "@/appstate/theme";
import { motion } from "framer-motion";
export const NavBar = () => {
  const { setTheme, theme } = useStore();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      className="w-full  flex justify-between bg-transparent items-center z-[1000]"
    >
      <h2
        className={twMerge(
          irish.className,
          "text-5xl ",
          theme === "dark" ? "dark-gradient" : "light-gradient"
        )}
      >
        UV
      </h2>
      <div className="transition duration-300">
        {theme === "dark" ? (
          <SunIcon
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        ) : (
          <MoonIcon
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
        )}
      </div>
    </motion.nav>
  );
};
