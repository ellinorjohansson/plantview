import SvgPlant from "../components/SvgPlant";

const Footer = () => {
  return (
    <div className="flex items-center mb-20 justify-center gap-2 text-xs font-sans text-black/60">
      <span>grown with</span>
      <div className="h-5 w-5">
        <SvgPlant />
      </div>
      <span>• your diary lives right in this browser</span>
    </div>
  );
};

export default Footer;
