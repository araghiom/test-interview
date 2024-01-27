import LanguageSelector from "../shared/LanguageSelector";
import ThemeChanger from "../shared/ThemeChanger";

const Header = () => {
  return (
    <header className="w-full flex justify-start ">
      <ThemeChanger />
      <LanguageSelector />
    </header>
  );
};
export default Header;
