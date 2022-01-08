type Id = string | number;
export const SITEMAP = {
  MAIN: "/",
  TEMP: "tmp",
  USER: {
    INDEX: "user/",
    TMP: "temppage",
  },
};
export const SITEMAP_BY_ID = {
  ID_TMP: (id: Id) => `/cards/${id}`,
};
export const OUTBOUND_LINK = {
  MAIL_TO_TMP: (title: string = "", body: string = "") =>
    `mailto:hello@ttmp.com?subject=${title}&body=${body}`,
};

// export const linkToInquiryByMail = (user: User) => {
//   const browser = getResult(navigator.userAgent);
//   const mailTitle = `[의견보내기] ${user.name}님의 소중한 의견`;
//   const mailBody = `화면을 캡쳐하여 보내주시면 오류 확인에 도움이 됩니다.%0A%0A%0A%0A\
// [사용자 정보]%0A\
// 가입된 이메일 주소: ${user.account.email}%0A\
// 브라우저: ${browser.name} ${browser.version}%0A\
// OS: ${(browser as any).osname} ${browser.osversion}%0A\
// 어떤 부분이 궁금하신지 알려주세요!`;

//   return OUTBOUND_LINK.MAIL_TO_TMP(mailTitle, mailBody);
// };
