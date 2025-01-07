import React from "react";
import { useForm } from "react-hook-form";
import {
  InputStyle,
  TextAreaStyle,
  LabelStyle,
  ErrorTextStyle,
  BtnSubmitStyles
} from "./styles";

export default function ContactsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <LabelStyle>
        <InputStyle
          type="text"
          placeholder="Name"
          $hasError={!!errors.name}
          {...register("name", {
            required: "This field cannot be empty",
            pattern: {
              value: /^[A-Za-z]+$/, // Латиниця та без пробілів
              message: "Latin characters without spaces",
            },
          })}
        />
        {errors.name && <ErrorTextStyle>{errors.name.message}</ErrorTextStyle>}
      </LabelStyle>
      <LabelStyle>
        <InputStyle
          type="text"
          placeholder="Email"
          $hasError={!!errors.email}
          {...register("email", {
            required: "This field cannot be empty",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <ErrorTextStyle>{errors.email.message}</ErrorTextStyle>
        )}
      </LabelStyle>
      <LabelStyle>
        <TextAreaStyle
          type="text"
          placeholder="Comment"
          $hasError={!!errors.comment}
          {...register("comment", {
            required: "This field cannot be empty",
            maxLength: {
              value: 200,
              message: "Comment must not exceed 200 characters",
            },
          })}
        />
        {errors.comment && (
          <ErrorTextStyle>{errors.comment.message}</ErrorTextStyle>
        )}
      </LabelStyle>
      <BtnSubmitStyles>Submit</BtnSubmitStyles>
    </form>
  );
}
