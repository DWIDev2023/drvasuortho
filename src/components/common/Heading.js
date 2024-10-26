const Heading = ({ text1, text2, size, left, uppercase, center, aos, heading }) => {
  size = size ? size : "2xl";
  left = left ? "highlight-border-left" : "";
  uppercase = uppercase ? "uppercase" : "";
  center = center ? "text-center" : "";
  aos = aos ? aos : "down";
  return (
    <div className="space-y-1">
      <h5 className="text-highlight text-lg">{heading}</h5>
      <div className={`font-medium md:text-2xl ${uppercase} ${center}`}>
        <h3>
          {text1}
        </h3>
        <h3>
          {text2}
        </h3>
      </div>

    </div>
  );
};
export default Heading;
