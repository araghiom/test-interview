import CPButton from "../ui/cp-button/CPButton";
const LanguageSelector = () => {
  return (
    <div className="flex flex-row-reverse gap-[32px]">
      <CPButton variant="text" text="English" type={"button"} disable />
      <CPButton variant="text" text="فارسی" type={"button"} />
    </div>
  );
};
export default LanguageSelector;
