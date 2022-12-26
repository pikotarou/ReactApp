import axios from "axios";
export const FetchPostApi = async (postCode) => {
  const fetchData = await axios.get(
    `https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postCode}`
  );

  let isPostCode = "";
  fetchData.data.results === null ? (isPostCode = false) : (isPostCode = true);

  if (isPostCode) {
    const { address1, address2, address3 } = fetchData.data.results[0];

    const prefecture = `${address1}${address2}${address3}`;

    return prefecture;
  } else {
    const prefecture = "存在しない郵便番号";

    return prefecture;
  }
};
