// we need to import the icons here
import GroupIcon from "@mui/icons-material/Group";
import StorageIcon from "@mui/icons-material/Storage";
import ImageIcon from "@mui/icons-material/Image";
import PublicIcon from "@mui/icons-material/Public";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";

export const navbarItems = [
  {
    id: 0,
    label: "Authentication",
    icon: GroupIcon,
    route: "authentication",
  },
  {
    id: 1,
    label: "Database",
    icon: StorageIcon,
    route: "database",
  },
  {
    id: 2,
    label: "Storage",
    icon: ImageIcon,
    route: "storage",
  },
  {
    id: 3,
    label: "Hosting",
    icon: PublicIcon,
    route: "hosting",
  },
  {
    id: 4,
    label: "Functions",
    icon: MultipleStopIcon,
    route: "functions",
  },
  {
    id: 5,
    label: "Machine Learning",
    icon: SettingsInputComponentIcon,
    route: "machine-learning",
  },
];
