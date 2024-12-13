import { argv } from "process";
import { execSync } from "child_process";
import axios from "axios";
const fanyiQuery: any = async (query: any) => {
  const { data } = await axios({
    url: "https://fanyi.baidu.com/ait/text/translate",
    headers: {
      accept: "text/event-stream",
      "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
      "acs-token":
        "1723618810249_1723618864620_IS0r1fMXI9QbLt/65yKMdqzYvkoUkwkKc+JBsDbZMuhdIp8VV+zKcXtRw07rPx+Ghrcuj7ZNKHltXvS3+OE4m/d7OzGKfneTT0cFjWhVCwXSsEG0X/DyxE4j12W/7l3vpKts7R8Ih/dIExjHBm+yK0J8g2DlT9o4REZITQSgN5ggntL5GeU09iIEY4THJSmFeYZM2Co/iFgjpzoXzmQTOVVzAjvLFSeMecZ8FVWSTYFJ75cOaqcza1GrvFtdXbB/aZuu6WAfG4TA4CC5Gehx08sw1a4Y+J18P4UcLO52FIQQE1i0ub1KP70OGm6QmPB32+z8h/ztiO7Y8/KNMUFLPYgl5uz6Mk6H+X3N5ZILEi2cRHqpDeyzdrMtzTs0V4AQwEnlvRsXU77VuWsCCE8WbCg8vt/cbGGBKVac25rZXxKYNU4SpucVK2iAAaSY0c0atzYwPQwkB+i6wruvH+0RUavNORWD/xBaR6PdMfnPFBrkZvU9ereBCD16Pfm3yffH",
      "cache-control": "no-cache",
      "content-type": "application/json",
      pragma: "no-cache",
      "sec-ch-ua":
        '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
    },
    method: "POST",
    data: {
      query,
      from: "en",
      to: "zh",
      reference: "",
      corpusIds: [],
      qcSettings: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
      needPhonetic: false,
      domain: "common",
      milliTimestamp: 1723618864689,
    },
  });
  return data as any;
};
(async function () {
  try {
    let argvA = argv.slice(2);
    if (argvA.length === 0) {
      console.log("请输入需要翻译的内容");
      return;
    }
    let isfanyi = false;
    // 从命令行获取需要翻译的内容
    if (
      ["--query", "-q", "-w", "-word"].includes(argvA[0].trim().toLowerCase())
    ) {
      argvA = argvA.slice(1);
      isfanyi = true;
    }
    const argvAText = argvA.join(" ");
    let query = "";
    let result: any = "";
    if (isfanyi) {
      query = argvAText;
      result = await fanyiQuery(argvAText);
    } else {
      const commend = execSync(argvAText);
      query = commend.toString();
      result = await fanyiQuery(query);
    }
    result = result
      .split("\n")
      .filter((e) => /^data:/.test(e))
      .map((e: string) => JSON.parse(e.replace(/^data:/, "").trim()))
      .filter((e) =>
        ["Translating", "GetKeywordsSucceed"].includes(e.data.event)
      );
    const tgt_split = result
      .filter((e) => ["Translating"].includes(e.data.event))
      .map((e) => ({
        tgt: e.data.list?.map((e) => e.dst).join(" \n "),
      }))?.[0]
      ?.tgt?.split?.("\n");
    const query_split = query.split("\n");
    const query_split_max_line_length = query_split.reduce(
      (a, b) => Math.max(a, b.length),
      0
    );
    console.log(
      query_split
        .map(
          (e, k) =>
            `${e.padEnd(query_split_max_line_length, "-")}-> ${
              tgt_split?.[k] || ""
            }`
        )
        .filter(
          (e) =>
            e.trim() !==
            "->".padStart(query_split_max_line_length + 2, "-").trim()
        )
        .join("\n")
    );
  } catch (e) {
    console.error(e);
    console.error(e.message);
  }
})();
