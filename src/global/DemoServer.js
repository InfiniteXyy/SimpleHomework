import { colors } from './index';

const courseData = [
  {
    cid: '1',
    title: '机器学习',
    color: colors.gray,
    data: [{ hid: '2', finished: false, content: '整理房间' }, { hid: '3', finished: false, content: '做大扫除' }]
  },
  {
    cid: '2',
    title: '哈哈之课',
    color: colors.green,
    data: [
      { hid: '4', finished: true, content: '做张卷子' },
      { hid: '5', finished: false, content: '整理房间' },
      { hid: '6', finished: true, content: '做大扫除' }
    ]
  },
  {
    cid: '3',
    title: '移动应用开发',
    color: colors.brown,
    data: []
  },
  {
    cid: '4',
    title: 'J2EE',
    color: colors.blue,
    data: [
      { hid: '8', finished: false, content: '优化Animizz' },
      { hid: '9', finished: false, content: '尝试Springboot' }
    ]
  },
  {
    cid: '5',
    title: 'Java核心技术',
    color: colors.lightBlue,
    data: [
      { hid: '10', finished: false, content: '优化Animizz' },
      { hid: '11', finished: true, content: '哈哈这是个啥' }
    ]
  }
];

const profileData = [
  {
    pid: '1',
    name: 'InfiniteX',
    avatar:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532851530477&di=a49376cb1357fb7ec2280ed2565a48d7&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F20%2F06%2F50%2F86p58PIChKY_1024.jpg',
    school: 'ECNU',
    jobTitle: ['计算机', '设计'],
    groups: ['1', '3', '4', '5']
  },
  {
    pid: '2',
    name: 'hahpy',
    avatar:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536402285666&di=423727adc7d6f84829b213489fff3994&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201501%2F25%2F20150125094246_xBn2x.jpeg',
    school: 'ECNU',
    jobTitle: ['计算机', '设计'],
    groups: ['1', '2', '3']
  },
  {
    pid: '3',
    name: 'xyy123',
    avatar:
      'https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1536392221&di=5f262acad145d8ac1e24c8dd48293b57&src=http://b-ssl.duitang.com/uploads/item/201507/18/20150718235101_aCvYk.jpeg',
    school: 'SHS',
    jobTitle: ['计算机', '设计'],
    groups: ['1', '4']
  },
  {
    pid: '4',
    name: 'adsfaf',
    avatar: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1513566299,2361801219&fm=26&gp=0.jpg',
    school: 'ECNU',
    jobTitle: ['计算机', '设计'],
    groups: ['1', '2']
  }
];

const groupData = [
  { createDate: new Date(), gid: '1', title: '计算机图形学王老师班（周四下午3-4）', color: '#417505' },
  { createDate: new Date(), gid: '2', title: '英语听说周四上午12节', color: '#F5A623' },
  { createDate: new Date(), gid: '3', title: '离散数学A班', color: '#8B572A' },
  { createDate: new Date(), gid: '4', title: '动漫爱好者', color: '#9d5b8b' },
  {
    createDate: new Date(),
    gid: '5',
    title: '红房子绿房子吉他社',
    color: '#47585c'
  }
];

groupData.forEach(item => {
  item.members = profileData.filter(person => {
    return person.groups.indexOf(item.gid) !== -1;
  });
});

export { courseData, profileData, groupData };
