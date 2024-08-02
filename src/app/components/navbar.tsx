import { irish } from "@/global/fonts";
import { twMerge } from "tailwind-merge";
import { MoonIcon } from "@/components/Icons/icons";
import useStore from "@/appstate/theme";
import { motion } from "framer-motion";
export const NavBar = () => {
  const { setTheme, theme } = useStore();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: {duration: 0.5 } }}
      className="w-full  flex justify-between bg-transparent items-center z-[1000]"
    >
      <h2 className={twMerge(irish.className, "text-5xl light-gradient")}>
        UV
      </h2>
      <div className="transition ">
        <MoonIcon
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      </div>
    </motion.nav>
  );
};
