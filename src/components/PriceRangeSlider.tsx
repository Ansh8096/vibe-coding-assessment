import { Range } from "react-range";

interface PriceRangeSliderProps {
  values: [number, number];
  setValues: React.Dispatch<React.SetStateAction<[number, number]>>;
}

const MIN = 0;
const MAX = 1000;

const PriceRangeSlider = ({
  values,
  setValues,
}: PriceRangeSliderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm font-medium">
        <span>${values[0]}</span>
        <span>${values[1]}</span>
      </div>

      <Range
        step={10}
        min={MIN}
        max={MAX}
        values={values}
        onChange={(values) => setValues(values as [number, number])}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            className="h-2 w-full rounded-full bg-gray-300"
            style={props.style}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="h-5 w-5 rounded-full border-2 border-blue-600 bg-white shadow-lg"
          />
        )}
      />
    </div>
  );
};

export default PriceRangeSlider;