// import { checkConfPass, checkSpaceinValue } from "./inputValidations";
import { Translation } from "react-i18next";
import React from "react";

export const requiredRule = {
  required: true,
  message: <Translation>{(t) => <div>{t("notBeEmpty")}</div>}</Translation>,
  // message: i18n.t('notBeEmpty')
};

export const emailRule = {
  type: "email",
  length: 50,
  message: (
    <Translation>
      {(t) => <div>{t("shouldBeCorrectlyEmailAddress")}</div>}
    </Translation>
  ),
  // message: i18n.t('shouldBeCorrectlyEmailAddress'),
};

// export const whitespaceRule = {
//   whitespace: true,
//   message: (
//     <Translation>{(t) => <div>{t("shouldBeNoSpaces")}</div>}</Translation>
//   ),
//   // message: i18n.t('shouldBeNoSpaces'),
//   validator: (_rule, value, callback) => {
//     if (checkSpaceinValue(value)) {
//       callback(true);
//     } else {
//       callback();
//     }
//   },
// };

export const min6CharactersRule = {
  min: 6,
  message: (
    <Translation>
      {(t) => <div>{t("mustBeAtLeastCharacters")}</div>}
    </Translation>
  ),
  // message: i18n.t('mustBeAtLeastCharacters'),
};

export const max6CharactersRule = {
  max: 6,
  message: (
    <Translation>
      {(t) => <div>{t("mustBeNoMoreThanCharacters")}</div>}
    </Translation>
  ),
  // message: i18n.t('mustBeNoMoreThanCharacters'),
};

export const passwordMin8Rule = {
  min: 8,
  message: (
    <Translation>
      {(t) => <div>{t("mustBeAtLeast8Characters")}</div>}
    </Translation>
  ),
  // message: i18n.t('mustBeAtLeast8Characters'),
};

export const passwordMax30Rule = {
  max: 30,
  message: (
    <Translation>
      {(t) => <div>{t("mustBeNoMoreThan30Characters")}</div>}
    </Translation>
  ),
  // message: i18n.t('mustBeNoMoreThan30Characters'),
};

export const minUppercaseLetterRule = {
  pattern: /^(?=.*?[A-Z])$/,
  message: (
    <Translation>
      {(t) => <div>{t("mustBeMinUppercaseLetter")}</div>}
    </Translation>
  ),
  // message: i18n.t('mustBeMinUppercaseLetter'),
};

export const minLowercaseLetterRule = {
  pattern: /^(?=.*?[a-z])$/,
  message: (
    <Translation>
      {(t) => <div>{t("mustBeMinLowercaseLetter")}</div>}
    </Translation>
  ),
  // message: i18n.t('mustBeMinLowercaseLetter'),
};

export const minOneDigitRule = {
  pattern: /^(?=.*?[0-9])$/,
  message: (
    <Translation>{(t) => <div>{t("mustBeMinOneDigit")}</div>}</Translation>
  ),
  // message: i18n.t('mustBeMinOneDigit'),
};

export const minOneSpecialCharacterRule = {
  pattern: /^(?=.*?[#?!@$%^&*-])$/,
  message: (
    <Translation>
      {(t) => <div>{t("mustBeMinOneSpecialCharacter")}</div>}
    </Translation>
  ),
  // message: i18n.t('mustBeMinOneSpecialCharacter'),
};

export const mobilePrefixRule = {
  pattern: /(99|10|50|51|55|70|77).*$/,
  message: (
    <Translation>
      {(t) => <div>{t("mustBeCorrectMobilePrefix")}</div>}
    </Translation>
  ),
  // message: i18n.t('mustBeMinOneSpecialCharacter'),
};

export const generalPassRule = {
  pattern:
    /^\s*(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,30}$/,
  message: (
    <Translation>
      {(t) => <div style={{ fontSize: "11px" }}>{t("generalPassError")}</div>}
    </Translation>
  ),
  // message: i18n.t('mustBeMinOneSpecialCharacter'),
};
export const blockInvalidChar = (e) => {
  return ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
};
