const users = [
    { image: './data/images/严丹.jpg', name: '严丹' },
    { image: './data/images/夏露.jpg', name: '夏露' },
    { image: './data/images/时璐.jpg', name: '时璐' },
    { image: './data/images/袁梅.jpg', name: '袁梅' },
    { image: './data/images/陈芬.jpg', name: '陈芬' },
    { image: './data/images/任翠翠.jpg', name: '任翠翠' },
    { image: './data/images/吴楚琪.jpg', name: '吴楚琪' },
    { image: './data/images/李文彬.jpg', name: '李文彬' },
    { image: './data/images/王晨瑜.jpg', name: '王晨瑜' },
    { image: './data/images/翟喜园.jpg', name: '翟喜园' },
    { image: './data/images/陈可佳.jpg', name: '陈可佳' },
    { image: './data/images/龚建树.jpg', name: '龚建树' },
    { image: './data/images/刘凡.jpg', name: '刘凡' },
    { image: './data/images/姜新.jpg', name: '姜新' },
    { image: './data/images/滕雨.jpg', name: '滕雨' },
    { image: './data/images/袁荣.jpg', name: '袁荣' },
    { image: './data/images/高玲.jpg', name: '高玲' },
    { image: './data/images/储安琪.jpg', name: '储安琪' },
    { image: './data/images/吴艳琼.jpg', name: '吴艳琼' },
    { image: './data/images/李琳琳.jpg', name: '李琳琳' },
    { image: './data/images/王楚涵.jpg', name: '王楚涵' },
    { image: './data/images/苏荣娣.jpg', name: '苏荣娣' },
    { image: './data/images/陈演凡.jpg', name: '陈演凡' },
    { image: './data/images/卢路.jpg', name: '卢路' },
    { image: './data/images/孙萍.jpg', name: '孙萍' },
    { image: './data/images/王园.jpg', name: '王园' },
    { image: './data/images/贺锐.jpg', name: '贺锐' },
    { image: './data/images/魏康.jpg', name: '魏康' },
    { image: './data/images/刘慧娟.jpg', name: '刘慧娟' },
    { image: './data/images/张益丹.jpg', name: '张益丹' },
    { image: './data/images/梁欢欢.jpg', name: '梁欢欢' },
    { image: './data/images/王美林.jpg', name: '王美林' },
    { image: './data/images/范思远.jpg', name: '范思远' },
    { image: './data/images/马顺丽.jpg', name: '马顺丽' },
    { image: './data/images/周叶.jpg', name: '周叶' },
    { image: './data/images/张冉.jpg', name: '张冉' },
    { image: './data/images/王菲.jpg', name: '王菲' },
    { image: './data/images/郭卫.jpg', name: '郭卫' },
    { image: './data/images/业雪芬.jpg', name: '业雪芬' },
    { image: './data/images/刘昇艺.jpg', name: '刘昇艺' },
    { image: './data/images/徐文翠.jpg', name: '徐文翠' },
    { image: './data/images/汪小林.jpg', name: '汪小林' },
    { image: './data/images/王若宸.jpg', name: '王若宸' },
    { image: './data/images/薛楚婷.jpg', name: '薛楚婷' },
    { image: './data/images/高铭敏.jpg', name: '高铭敏' },
    { image: './data/images/周敏.jpg', name: '周敏' },
    { image: './data/images/徐璇.jpg', name: '徐璇' },
    { image: './data/images/申吉.jpg', name: '申吉' },
    { image: './data/images/郭美.jpg', name: '郭美' },
    { image: './data/images/于琴琴.jpg', name: '于琴琴' },
    { image: './data/images/史永菁.jpg', name: '史永菁' },
    { image: './data/images/徐玉胜.jpg', name: '徐玉胜' },
    { image: './data/images/滕天茹.jpg', name: '滕天茹' },
    { image: './data/images/王馨悦.jpg', name: '王馨悦' },
    { image: './data/images/言彩云.jpg', name: '言彩云' },
    { image: './data/images/魏红娟.jpg', name: '魏红娟' },
    { image: './data/images/唐俊.jpg', name: '唐俊' },
    { image: './data/images/方艳.jpg', name: '方艳' },
    { image: './data/images/苏娜.jpg', name: '苏娜' },
    { image: './data/images/金越.jpg', name: '金越' },
    { image: './data/images/任治华.jpg', name: '任治华' },
    { image: './data/images/叶勤妹.jpg', name: '叶勤妹' },
    { image: './data/images/朱则栋.jpg', name: '朱则栋' },
    { image: './data/images/王宇璇.jpg', name: '王宇璇' },
    { image: './data/images/申军萍.jpg', name: '申军萍' },
    { image: './data/images/郝德利.jpg', name: '郝德利' },
    { image: './data/images/鲁丹丹.jpg', name: '鲁丹丹' }];

const prizes = [
    { type: 0, count: 1000, title: "", text: "特别奖" },
    { type: 3, count: 23, text: "平安喜乐奖", title: "", img: "./img/edifier.jpg" },
    { type: 2, count: 20, text: "五福临门奖", title: "", img: "./img/edifier.jpg" },
    { type: 1, count: 24, text: "吉祥如意奖", title: "", img: "./img/edifier.jpg" },
];

const EACH_COUNT = [0, 6, 5, 6];

const COMPANY = "";
const luckyData = {};

export default {
    users,
    leftUsers: [...users],
    luckyData,
    prizes,
    EACH_COUNT,
    COMPANY,
}





