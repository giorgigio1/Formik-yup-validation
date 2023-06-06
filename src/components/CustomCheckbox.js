import { useField } from "formik";

const CustomCheckbox = ({ ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <input
          {...field}
          {...props}
          className={meta.touched && meta.error ? "input-error" : ""}
        />
        <span>i accept the terms of service</span>
      </div>
      {meta.touched && meta.error && <p className="error">{meta.error}</p>}
    </>
  );
};

export default CustomCheckbox;
