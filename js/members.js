const members = [
  {
    name: "神澤希",
    nickname: "ぞむ",
    todo: "自然を感じたい",
    favorite: "カメラ",
    comment: "どすこい"
  },
  {
    name: "佐伯健太",
    nickname: "たんけ",
    todo: "ダイビング",
    favorite: "ドライブ",
    comment: "わっしょい"
  },
  {
    name: "西野椛",
    nickname: "もーちゃん",
    todo: "シーサーづくり",
    favorite: "アイドル",
    comment: "ドーナッツ"
  },
  {
    name: "小川竜聖",
    nickname: "リューリュー",
    todo: "一発ギャグ",
    favorite: "イカゲーム",
    comment: "偏見"
  }
  // 追加はここにどんどん書くだけ！
];

const container = document.getElementById("memberList");

members.forEach(member => {
  const card = document.createElement("div");
  card.className = "member-card";

  card.innerHTML = `
    <h2>${member.name}（${member.nickname}）</h2>
    <p><strong>やりたいこと：</strong> ${member.todo}</p>
    <p><strong>好きなもの：</strong> ${member.favorite}</p>
    <p><em>${member.comment}</em></p>
  `;

  container.appendChild(card);
});
