//reverse func for date
import JSpdf from "jspdf";
import h2c from "html2canvas";
// import * as fs from "fs";

export const reverseDate = (date, splitSimvol) =>
  date.toString().split(splitSimvol).reverse().join(splitSimvol);

export const mobileNumberParser = (number) => {
  const numberPattern = /\d+/g;
  return `+994${number.match(numberPattern).join("").toString().substring(0)}`;
};

export const PdfExport = (elem, pdfName) =>
  h2c(elem).then((canvas) => {
    elem.scrollIntoView();
    const img = canvas.toDataURL("image/png", 1);

    let imgWidth = 150;
    let pageHeight = 150;
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;

    const pdf = new JSpdf("p", "mm");
    let position = 10;

    pdf.addImage(img, "PNG", 30, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(img, "PNG", 30, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save(pdfName);
  });

export const isSameOrigin = (url) =>
  new URL(url, window.location.href).origin === window.location.origin;

export const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
export const isMobile = navigator.userAgent.includes("Mobi");

export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const decodeBase64 = (base64) =>
  new TextDecoder().decode(
    new Uint8Array(
      atob(base64)
        .split("")
        .map((char) => char.charCodeAt(0))
    )
  );

export const encodeBase64 = (str) =>
  btoa(
    Array.from(new TextEncoder().encode(str))
      .map((n) => String.fromCharCode(n))
      .join("")
  );

// export const base64_encode = (fileOrigin) => {
//   /** @type {Buffer} */
//   const file = fs.readFileSync(fileOrigin);
//   return Buffer.from(file).toString("base64");
// };

export const xor = (...args) => args.filter(Boolean).length === 1;

export const hideEmail = (email) => {
  const [name, domain] = email.split("@");
  return `${name[0]}${new Array(name.length - 1).join("*")}${
    name[name.length - 1]
  }@${domain}`;
};

export const objectIsEmpty = (obj) => {
  for (let key in obj) {
    if (obj[key] !== null && obj[key] != "") return false;
  }
  return true;
};

export const renderTimer = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const seconds_ = seconds % 60;
  return (
    (mins < 10 && "0" + mins.toString()) +
    ":" +
    (seconds_ < 10 ? "0" + seconds_.toString() : seconds_.toString())
  );
};

export const blockGoBackBtn = () => {
  window.history.pushState(null, null, window.location.href);
  window.onpopstate = function () {
    window.history.go(1);
  };
};
