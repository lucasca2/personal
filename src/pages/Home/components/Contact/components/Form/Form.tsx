"use client";

import { Button } from "@/components/Button/Button";
import { Dictionary } from "@/locale/dictionaries";

import styles from "./Form.module.scss";
import { useEffect, useState } from "react";
import { classNames } from "@/utils/classNames";

type FormProps = {
  dictionary: Dictionary["home"]["contact"];
};

type ContactFields = {
  name: string;
  email: string;
  message: string;
};

type ErrorsType = keyof Dictionary["home"]["contact"]["errors"];

type FieldErrors = Record<string, ErrorsType | undefined>;

const defaultValues = {
  name: "",
  email: "",
  message: "",
};

export const Form = ({ dictionary }: FormProps) => {
  const [contactData, setContactData] = useState(defaultValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>(
    {} as FieldErrors
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [shouldShowMessage, setShouldShowMessage] = useState(false);
  const [shouldHideMessage, setShouldHideMessage] = useState(false);

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      
      if (isValidFields()) {
        const { name, email, message } = contactData;

        await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        });

        setShouldShowMessage(true);
        setContactData(defaultValues);
      }
    } catch (e: unknown) {
      console.log(e);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (!!shouldShowMessage) {
      setTimeout(() => {
        setShouldHideMessage(true);
        setTimeout(() => {
          setShouldShowMessage(false);
          setShouldHideMessage(false);
        }, 300);
      }, 3000);
    }
  }, [shouldShowMessage]);

  const isValidFields = () => {
    let hasError = false;

    const { name, email, message } = contactData;

    if (!name) {
      hasError = true;
      handleSetFieldError("name", "name_required");
    }
    if (!email) {
      hasError = true;
      handleSetFieldError("email", "email_required");
    }
    if (!message) {
      hasError = true;
      handleSetFieldError("message", "message_required");
    }

    if (email) {
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      if (!isValidEmail) {
        hasError = true;
        handleSetFieldError("email", "email_invalid");
      }
    }

    return !hasError;
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    handleSetFieldError(name as keyof ContactFields);

    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSetFieldError = (
    field: keyof ContactFields,
    message?: ErrorsType
  ) => {
    setFieldErrors((prev) => ({ ...prev, [field]: message }));
  };

  const formClassName = classNames(styles.form, {
    [styles.form__submitting]: isSubmitting,
  });

  const toastClassName = classNames(styles.toast, {
    [styles.toast__hidden]: shouldHideMessage,
  });

  const shouldDisableForm = isSubmitting || shouldShowMessage;

  return (
    <>
      <form className={formClassName} onSubmit={handleOnSubmit}>
        <label>
          {dictionary.fields.name.label}
          <input
            disabled={shouldDisableForm}
            name="name"
            placeholder={dictionary.fields.name.placeholder}
            value={contactData.name}
            onChange={handleOnChange}
            className={classNames({
              [styles.input__error]: !!fieldErrors.name,
            })}
          />
          {fieldErrors.name && (
            <span className={styles.error}>
              {dictionary.errors[fieldErrors.name]}
            </span>
          )}
        </label>
        <label>
          {dictionary.fields.email.label}
          <input
            disabled={shouldDisableForm}
            name="email"
            placeholder={dictionary.fields.email.placeholder}
            value={contactData.email}
            onChange={handleOnChange}
            className={classNames({
              [styles.input__error]: !!fieldErrors.email,
            })}
          />
          {fieldErrors.email && (
            <span className={styles.error}>
              {dictionary.errors[fieldErrors.email]}
            </span>
          )}
        </label>
        <label>
          {dictionary.fields.message.label}
          <textarea
            disabled={shouldDisableForm}
            name="message"
            placeholder={dictionary.fields.message.placeholder}
            value={contactData.message}
            onChange={handleOnChange}
            className={classNames({
              [styles.input__error]: !!fieldErrors.message,
            })}
          />
          {fieldErrors.message && (
            <span className={styles.error}>
              {dictionary.errors[fieldErrors.message]}
            </span>
          )}
        </label>
        <Button
          disabled={shouldDisableForm}
          isLoading={isSubmitting}
          type="submit"
        >
          {dictionary.send_button}
        </Button>
      </form>
      {shouldShowMessage && (
        <div className={toastClassName}>
          <span>{dictionary.thanks_message}</span>
          <span>{dictionary.success_message}</span>
        </div>
      )}
    </>
  );
};
