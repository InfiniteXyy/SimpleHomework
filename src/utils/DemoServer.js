import { colors } from "../static";

const courseData = [
  {
    cid: "1",
    title: "机器学习",
    color: colors.gray,
    data: [
      { hid: "2", finished: false, content: "整理房间" },
      { hid: "3", finished: false, content: "做大扫除" }
    ]
  },
  {
    cid: "2",
    title: "哈哈之课",
    color: colors.green,
    data: [
      { hid: "4", finished: true, content: "做张卷子" },
      { hid: "5", finished: false, content: "整理房间" },
      { hid: "6", finished: true, content: "做大扫除" }
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
      { hid: "8", finished: false, content: "优化Animizz" },
      { hid: "9", finished: false, content: "尝试Springboot" }
    ]
  },
  {
    cid: "5",
    title: "Java核心技术",
    color: colors.lightBlue,
    data: [
      { hid: "10", finished: false, content: "优化Animizz" },
      { hid: "11", finished: true, content: "哈哈这是个啥" }
    ]
  }
];


const profileData = [
  {
    pid: "1",
    name: "InfiniteX",
    avatar: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532851530477&di=a49376cb1357fb7ec2280ed2565a48d7&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F20%2F06%2F50%2F86p58PIChKY_1024.jpg",
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

export { courseData, profileData, groupData };
