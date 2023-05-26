// component to render each color swatch
const ColorSwatch = (props: any) => {
  const { color, productCode, isSelected, onColorClick } = props;

  return (
    <div
      className={isSelected ? 'color-swatch selected' : 'color-swatch'}
      onClick={onColorClick}
    >
      <div className="color-swatch-img">
        <img
          src={`https://www.jcrew.com/s7-img-facade/${productCode}_${color.colorCode}_sw`}
          alt={color.colorName}
        ></img>
      </div>
    </div>
  );
};
export default ColorSwatch;
