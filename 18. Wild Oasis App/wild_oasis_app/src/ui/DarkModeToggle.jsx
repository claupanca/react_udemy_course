import { GrMoon, GrSun } from "react-icons/gr";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  // const [mode, setMode] = useState(() => window.sessionStorage.getItem("mode"));

  // we are using the custom hook useDarkMode that we have built for the
  // context API
  const { theme, setTheme } = useDarkMode();
  // console.log("theme", theme);

  return (
    <ButtonIcon onClick={setTheme}>
      {theme === "light" ? <GrMoon /> : <GrSun />}
    </ButtonIcon>
  );
}
