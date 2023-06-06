import { Field, Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import { advancedSchema } from "../schema";
import CustomSelect from "./CustomSelect";
import CustomCheckbox from "./CustomCheckbox";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  actions.resetForm();
};

const AdvancedForm = () => {
  return (
    <Formik
      initialValues={{ username: "", jobType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Username"
            name="username"
            type="text"
            placeholder="Enter your username"
          />
          <CustomSelect
            label="Job Type"
            name="jobType"
            placeholder="please select a job"
          >
            <option value="">please select a job type</option>
            <option value="designer">Designer</option>
            <option value="developer">Developer</option>
            <option value="manager">Manager</option>
            <option value="manager">Manager</option>
            <option value="other">Other</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AdvancedForm;
