"use strict";

import { urls, colors } from "./static";

const demoList = [
  {
    cid: "1",
    title: "机器学习",
    color: colors.gray,
    data: [
      { id: "2", finished: false, content: "整理房间" },
      { id: "3", finished: false, content: "做大扫除" }
    ]
  },
  {
    cid: "2",
    title: "哈哈之课",
    color: colors.green,
    data: [
      { id: "4", finished: true, content: "做张卷子" },
      { id: "5", finished: false, content: "整理房间" },
      { id: "6", finished: true, content: "做大扫除" }
    ]
  },
  {
    cid: "3",
    title: "移动应用开发",
    color: colors.brown,
    data: []
  },
  {
    cid: "4",
    title: "J2EE",
    color: colors.blue,
    data: [
      { id: "8", finished: false, content: "优化Animizz" },
      { id: "9", finished: false, content: "尝试Springboot" }
    ]
  },
  {
    cid: "5",
    title: "Java核心技术",
    color: colors.rememberBlue,
    data: [
      { id: "10", finished: false, content: "优化Animizz" },
      { id: "11", finished: true, content: "哈哈这是个啥" }
    ]
  }
];
const profileData = [
  {
    pid: "1",
    name: "InfiniteX",
    avatar: urls.avatar,
    school: "ECNU",
    jobTitle: ["计算机", "设计"],
    groups: ["3", "4", "5"]
  }
];
const groupData = [
  { gid: "3", title: "计网A班", color: "#417505" },
  { gid: "4", title: "哈哈班级", color: "#F5A623" },
  { gid: "5", title: "什么鬼", color: "#8B572A" }
];

export { demoList, profileData, groupData };
