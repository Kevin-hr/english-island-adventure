(function attachLevels(root) {
  "use strict";

  root.GAME_WORLDS = [
  {
    "id": "animal-island",
    "title": "动物岛",
    "englishTitle": "Animal Island",
    "scene": [
      "🐱",
      "🏝️",
      "🐾"
    ],
    "description": "学习动物名称、颜色和简单动作"
  },
  {
    "id": "school-island",
    "title": "校园岛",
    "englishTitle": "School Island",
    "scene": [
      "🏫",
      "📚",
      "✏️"
    ],
    "description": "学习校园用语和课堂表达"
  },
  {
    "id": "life-island",
    "title": "生活岛",
    "englishTitle": "Life Island",
    "scene": [
      "🏡",
      "🥛",
      "👟"
    ],
    "description": "学习日常生活英语表达"
  },
  {
    "id": "food-island",
    "title": "美食岛",
    "englishTitle": "Food Island",
    "scene": [
      "🍕",
      "🍎",
      "🍰"
    ],
    "description": "学习食物和饮品名称"
  },
  {
    "id": "feeling-island",
    "title": "情感岛",
    "englishTitle": "Feeling Island",
    "scene": [
      "😄",
      "💖",
      "🌟"
    ],
    "description": "学习表达感受和情绪"
  },
  {
    "id": "nature-island",
    "title": "自然岛",
    "englishTitle": "Nature Island",
    "scene": [
      "🌈",
      "🌸",
      "☀️"
    ],
    "description": "学习自然和天气词汇"
  },
  {
    "id": "family-island",
    "title": "家庭岛",
    "englishTitle": "Family Island",
    "scene": [
      "👨‍👩‍👧",
      "🏠",
      "❤️"
    ],
    "description": "学习家庭成员和家居词汇"
  },
  {
    "id": "sport-island",
    "title": "运动岛",
    "englishTitle": "Sport Island",
    "scene": [
      "⚽",
      "🏊",
      "🏃"
    ],
    "description": "学习动作和运动词汇"
  },
  {
    "id": "body-island",
    "title": "身体岛",
    "englishTitle": "Body Island",
    "scene": [
      "🧍",
      "👁️",
      "✋"
    ],
    "description": "学习身体部位和感官词汇"
  },
  {
    "id": "rainbow-island",
    "title": "彩虹岛",
    "englishTitle": "Rainbow Island",
    "scene": [
      "🌈",
      "🎓",
      "✨"
    ],
    "description": "综合复习所有英语和成语"
  }
];

  root.GAME_LEVELS = [
  {
    "id": "level-1",
    "number": 1,
    "worldId": "animal-island",
    "title": "找到小猫",
    "skill": "听音选动物",
    "type": "choice",
    "instruction": "听到口令后，选择正确的动物",
    "prompt": "Find the cat.",
    "words": [
      "cat"
    ],
    "options": [
      {
        "id": "dog",
        "emoji": "🐶",
        "label": "dog"
      },
      {
        "id": "cat",
        "emoji": "🐱",
        "label": "cat"
      },
      {
        "id": "bird",
        "emoji": "🐦",
        "label": "bird"
      }
    ],
    "answer": "cat",
    "success": "Yes! Cat! 🐱",
    "completion": "你听懂了 cat 🐱",
    "sceneReward": "🐱 小猫回到了动物岛"
  },
  {
    "id": "level-2",
    "number": 2,
    "worldId": "animal-island",
    "title": "找到小狗",
    "skill": "听音选动物",
    "type": "choice",
    "instruction": "听到口令后，选择正确的动物",
    "prompt": "Find the dog.",
    "words": [
      "dog"
    ],
    "options": [
      {
        "id": "cat",
        "emoji": "🐱",
        "label": "cat"
      },
      {
        "id": "dog",
        "emoji": "🐶",
        "label": "dog"
      },
      {
        "id": "fish",
        "emoji": "🐟",
        "label": "fish"
      }
    ],
    "answer": "dog",
    "success": "Yes! Dog! 🐶",
    "completion": "你听懂了 dog 🐶",
    "sceneReward": "🐶 小狗回到了动物岛"
  },
  {
    "id": "level-3",
    "number": 3,
    "worldId": "animal-island",
    "title": "红色的球",
    "skill": "听颜色指令",
    "type": "choice",
    "instruction": "听到口令后，选择正确颜色的球",
    "prompt": "Find the red ball.",
    "words": [
      "red",
      "ball"
    ],
    "options": [
      {
        "id": "blue",
        "emoji": "🔵",
        "label": "blue"
      },
      {
        "id": "red",
        "emoji": "🔴",
        "label": "red"
      },
      {
        "id": "green",
        "emoji": "🟢",
        "label": "green"
      }
    ],
    "answer": "red",
    "success": "Yes! Red ball! 🔴",
    "completion": "你听懂了 red ball",
    "sceneReward": "🔴 红球找到了"
  },
  {
    "id": "level-4",
    "number": 4,
    "worldId": "animal-island",
    "title": "大还是小",
    "skill": "听音选大小",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the big elephant.",
    "words": [
      "big",
      "elephant"
    ],
    "options": [
      {
        "id": "small",
        "emoji": "🐭",
        "label": "small"
      },
      {
        "id": "big",
        "emoji": "🐘",
        "label": "big"
      },
      {
        "id": "tiny",
        "emoji": "🐜",
        "label": "tiny"
      }
    ],
    "answer": "big",
    "success": "Yes! Big elephant! 🐘",
    "completion": "你听懂了 big",
    "sceneReward": "🐘 大象出现"
  },
  {
    "id": "level-5",
    "number": 5,
    "worldId": "animal-island",
    "title": "谁在树上",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "I see a bird.",
    "words": [
      "bird",
      "I see a"
    ],
    "options": [
      {
        "id": "fish",
        "emoji": "🐟🌊",
        "label": "a fish in water"
      },
      {
        "id": "bird",
        "emoji": "🐦🌳",
        "label": "a bird in a tree"
      },
      {
        "id": "cat",
        "emoji": "🐱📦",
        "label": "a cat in a box"
      }
    ],
    "answer": "bird",
    "success": "Yes! I see a bird! 🐦",
    "completion": "你听懂了 I see a bird",
    "sceneReward": "🌳 鸟窝出现"
  },
  {
    "id": "level-6",
    "number": 6,
    "worldId": "animal-island",
    "title": "小兔子在跑",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "The rabbit is running.",
    "words": [
      "rabbit",
      "running"
    ],
    "options": [
      {
        "id": "sleep",
        "emoji": "🐰💤",
        "label": "rabbit sleeping"
      },
      {
        "id": "run",
        "emoji": "🐰🏃",
        "label": "rabbit running"
      },
      {
        "id": "eat",
        "emoji": "🐰🥕",
        "label": "rabbit eating"
      }
    ],
    "answer": "run",
    "success": "Yes! The rabbit is running! 🐰",
    "completion": "你听懂了 The rabbit is running",
    "sceneReward": "🐰 小兔子跑来了"
  },
  {
    "id": "level-7",
    "number": 7,
    "worldId": "animal-island",
    "title": "拼出 DOG",
    "skill": "按顺序拼单词",
    "type": "word-forge",
    "instruction": "按听到的顺序点字母",
    "prompt": "Build dog. D. O. G. Dog.",
    "words": [
      "dog",
      "d",
      "o",
      "g"
    ],
    "letters": [
      "O",
      "D",
      "G"
    ],
    "answer": "DOG",
    "success": "Yes! D. O. G. Dog!",
    "completion": "你拼出了 DOG",
    "sceneReward": "🐶 小狗出来了"
  },
  {
    "id": "level-8",
    "number": 8,
    "worldId": "animal-island",
    "title": "跟读：我看到一条鱼",
    "skill": "听示范并跟读",
    "type": "echo",
    "instruction": "听完示范，再说同一句话",
    "prompt": "I see a fish.",
    "words": [
      "fish",
      "I see a"
    ],
    "accepted": [
      "i see a fish",
      "see a fish",
      "fish"
    ],
    "success": "Yes! I see a fish! 🐟",
    "completion": "你说出了 I see a fish",
    "sceneReward": "🐟 小鱼游来了"
  },
  {
    "id": "level-9",
    "number": 9,
    "worldId": "animal-island",
    "title": "找到蓝色的小鸟",
    "skill": "听音选颜色动物",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the blue bird.",
    "words": [
      "blue",
      "bird"
    ],
    "options": [
      {
        "id": "red-bird",
        "emoji": "🐦🔴",
        "label": "red bird"
      },
      {
        "id": "blue-bird",
        "emoji": "🐦🔵",
        "label": "blue bird"
      },
      {
        "id": "green-frog",
        "emoji": "🐸🟢",
        "label": "green frog"
      }
    ],
    "answer": "blue-bird",
    "success": "Yes! Blue bird! 🐦",
    "completion": "你听懂了 blue bird",
    "sceneReward": "🐦 蓝鸟飞来"
  },
  {
    "id": "level-10",
    "number": 10,
    "worldId": "animal-island",
    "title": "动物岛 Boss",
    "skill": "四项综合任务",
    "type": "boss",
    "instruction": "完成四项任务，点亮动物岛",
    "prompt": "Let's save Animal Island!",
    "words": [
      "cat",
      "dog",
      "red",
      "big"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "选择小猫",
        "prompt": "Find the cat.",
        "answer": "cat",
        "options": [
          {
            "id": "dog",
            "emoji": "🐶",
            "label": "dog"
          },
          {
            "id": "cat",
            "emoji": "🐱",
            "label": "cat"
          },
          {
            "id": "bird",
            "emoji": "🐦",
            "label": "bird"
          }
        ]
      },
      {
        "type": "word-forge",
        "instruction": "拼出 DOG",
        "prompt": "Build dog. D. O. G.",
        "answer": "DOG",
        "letters": [
          "G",
          "D",
          "O"
        ]
      },
      {
        "type": "choice",
        "instruction": "选择红色",
        "prompt": "Find red.",
        "answer": "red",
        "options": [
          {
            "id": "blue",
            "emoji": "🔵",
            "label": "blue"
          },
          {
            "id": "red",
            "emoji": "🔴",
            "label": "red"
          },
          {
            "id": "green",
            "emoji": "🟢",
            "label": "green"
          }
        ]
      },
      {
        "type": "echo",
        "instruction": "跟读句子",
        "prompt": "I see a big cat.",
        "accepted": [
          "i see a big cat",
          "see a big cat",
          "big cat"
        ]
      }
    ],
    "success": "Animal Island is saved!",
    "completion": "你完成了动物岛的所有挑战",
    "completionTitle": "动物岛得救了！",
    "sceneReward": "✨ 动物岛完全修复"
  },
  {
    "id": "level-11",
    "number": 11,
    "worldId": "animal-island",
    "title": "一心一意",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个孩子在专心做同一件事",
    "prompt": "一心一意。Focus!",
    "words": [
      "一心一意",
      "focus"
    ],
    "options": [
      {
        "id": "distracted",
        "emoji": "📺🎮📖😵",
        "label": "同时做很多事"
      },
      {
        "id": "focus",
        "emoji": "🧒📖✨",
        "label": "专心读一本书"
      },
      {
        "id": "sleep",
        "emoji": "🛌💤",
        "label": "正在睡觉"
      }
    ],
    "answer": "focus",
    "success": "一心一意，就是专心做好一件事。Focus!",
    "completion": "你理解了 一心一意 (focus) 🎯",
    "sceneReward": "🎯 专注星点亮了"
  },
  {
    "id": "level-12",
    "number": 12,
    "worldId": "animal-island",
    "title": "井井有条",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个书桌摆放得整齐有顺序",
    "prompt": "井井有条。Organized!",
    "words": [
      "井井有条",
      "organized"
    ],
    "options": [
      {
        "id": "messy",
        "emoji": "📚🧦🖍️💥",
        "label": "乱成一团"
      },
      {
        "id": "empty",
        "emoji": "🪹",
        "label": "什么也没有"
      },
      {
        "id": "order",
        "emoji": "📚📒✏️✅",
        "label": "分类摆整齐"
      }
    ],
    "answer": "order",
    "success": "井井有条，就是整齐而有顺序。Organized!",
    "completion": "你理解了 井井有条 (organized) 🗂️",
    "sceneReward": "🗂️ 书架整理好了"
  },
  {
    "id": "level-13",
    "number": 13,
    "worldId": "animal-island",
    "title": "助人为乐",
    "skill": "看故事理解成语",
    "type": "story",
    "instruction": "哪个孩子主动帮助了别人",
    "prompt": "助人为乐。Help others!",
    "words": [
      "助人为乐",
      "help"
    ],
    "options": [
      {
        "id": "ignore",
        "emoji": "🙈",
        "label": "假装没看见"
      },
      {
        "id": "help",
        "emoji": "🧒🤝👧",
        "label": "扶起摔倒的同学"
      },
      {
        "id": "take",
        "emoji": "🧒🍪🍪",
        "label": "拿走两块饼干"
      }
    ],
    "answer": "help",
    "success": "助人为乐，帮助别人并感到快乐。Help others!",
    "completion": "你理解了 助人为乐 (help) 🤝",
    "sceneReward": "🤝 互助桥出现了"
  },
  {
    "id": "level-14",
    "number": 14,
    "worldId": "animal-island",
    "title": "画龙点睛",
    "skill": "看故事理解成语",
    "type": "story",
    "instruction": "哪一步让整幅画一下子有了精神",
    "prompt": "画龙点睛。The finishing touch!",
    "words": [
      "画龙点睛",
      "finishing touch"
    ],
    "options": [
      {
        "id": "paper",
        "emoji": "📄",
        "label": "拿出一张白纸"
      },
      {
        "id": "color",
        "emoji": "🎨",
        "label": "准备许多颜料"
      },
      {
        "id": "eyes",
        "emoji": "🐉👀✨",
        "label": "给龙画上眼睛"
      }
    ],
    "answer": "eyes",
    "success": "画龙点睛，加上最重要的一笔。The finishing touch!",
    "completion": "你理解了 画龙点睛 (finishing touch) 🐉",
    "sceneReward": "🐉 龙睁开了眼睛"
  },
  {
    "id": "level-15",
    "number": 15,
    "worldId": "animal-island",
    "title": "守株待兔",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个人在傻等好运气",
    "prompt": "守株待兔。Don't just wait!",
    "words": [
      "守株待兔",
      "wait"
    ],
    "options": [
      {
        "id": "work",
        "emoji": "🧒🌾💪",
        "label": "努力干活"
      },
      {
        "id": "wait",
        "emoji": "🧒🌳🐰💤",
        "label": "坐在树桩旁傻等"
      },
      {
        "id": "play",
        "emoji": "🧒⚽😄",
        "label": "开心玩耍"
      }
    ],
    "answer": "wait",
    "success": "守株待兔，不要傻等好运气。Don't just wait!",
    "completion": "你理解了 守株待兔 (wait)",
    "sceneReward": "🌳 树桩旁边"
  },
  {
    "id": "level-16",
    "number": 16,
    "worldId": "animal-island",
    "title": "亡羊补牢",
    "skill": "看故事理解成语",
    "type": "story",
    "instruction": "出了问题后应该怎么做",
    "prompt": "亡羊补牢。Fix it in time!",
    "words": [
      "亡羊补牢",
      "fix"
    ],
    "options": [
      {
        "id": "cry",
        "emoji": "😭🐑",
        "label": "只哭不修"
      },
      {
        "id": "fix",
        "emoji": "🧑‍🔧🐑✅",
        "label": "赶紧修补羊圈"
      },
      {
        "id": "ignore",
        "emoji": "🙈🐑",
        "label": "假装没事"
      }
    ],
    "answer": "fix",
    "success": "亡羊补牢，出了问题及时补救。Fix it in time!",
    "completion": "你理解了 亡羊补牢 (fix)",
    "sceneReward": "🛠️ 羊圈修好了"
  },
  {
    "id": "level-17",
    "number": 17,
    "worldId": "animal-island",
    "title": "狐假虎威",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是狐假虎威？(英文关键词：pretend)",
    "prompt": "狐假虎威。Pretend to be powerful!",
    "words": [
      "狐假虎威",
      "pretend"
    ],
    "options": [
      {
        "id": "brave",
        "emoji": "🧒💪",
        "label": "自己勇敢 brave"
      },
      {
        "id": "pretend",
        "emoji": "🦊🐯😨",
        "label": "狐假虎威 pretend"
      },
      {
        "id": "kind",
        "emoji": "🧒🤝",
        "label": "善良 kind"
      }
    ],
    "answer": "pretend",
    "success": "狐假虎威，借别人的威风吓人。Pretend!",
    "completion": "你理解了 狐假虎威 (pretend)",
    "sceneReward": "🦊 狐狸的故事"
  },
  {
    "id": "level-18",
    "number": 18,
    "worldId": "animal-island",
    "title": "对牛弹琴",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是对牛弹琴？(英文关键词：waste)",
    "prompt": "对牛弹琴。Waste of effort!",
    "words": [
      "对牛弹琴",
      "waste"
    ],
    "options": [
      {
        "id": "teach",
        "emoji": "👩‍🏫👧✅",
        "label": "教同学学习"
      },
      {
        "id": "waste",
        "emoji": "🎵🐄❓",
        "label": "对牛弹琴 waste"
      },
      {
        "id": "sing",
        "emoji": "🎤😄",
        "label": "开心唱歌"
      }
    ],
    "answer": "waste",
    "success": "对牛弹琴，对不懂的人讲没用。Waste of effort!",
    "completion": "你理解了 对牛弹琴 (waste)",
    "sceneReward": "🐄 牛牛困惑了"
  },
  {
    "id": "level-19",
    "number": 19,
    "worldId": "animal-island",
    "title": "坐井观天",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是坐井观天？(英文关键词：narrow view)",
    "prompt": "坐井观天。Narrow view!",
    "words": [
      "坐井观天",
      "narrow view"
    ],
    "options": [
      {
        "id": "travel",
        "emoji": "🌍✈️😄",
        "label": "到处旅行长见识"
      },
      {
        "id": "narrow",
        "emoji": "🐸🕳️👀",
        "label": "坐在井里看天"
      },
      {
        "id": "read",
        "emoji": "📚👧",
        "label": "读书学习"
      }
    ],
    "answer": "narrow",
    "success": "坐井观天，眼界太窄。Narrow view!",
    "completion": "你理解了 坐井观天 (narrow view)",
    "sceneReward": "🕳️ 青蛙出井了"
  },
  {
    "id": "level-20",
    "number": 20,
    "worldId": "animal-island",
    "title": "动物成语大挑战",
    "skill": "四项成语综合",
    "type": "boss",
    "instruction": "完成四项成语任务",
    "prompt": "成语大闯关！",
    "words": [
      "一心一意",
      "井井有条",
      "助人为乐",
      "画龙点睛"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "哪个是 一心一意",
        "prompt": "一心一意",
        "answer": "focus",
        "options": [
          {
            "id": "messy",
            "emoji": "📚💥",
            "label": "乱七八糟"
          },
          {
            "id": "focus",
            "emoji": "🧒📖✨",
            "label": "一心一意 focus"
          },
          {
            "id": "lazy",
            "emoji": "🛌💤",
            "label": "懒洋洋"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 井井有条",
        "prompt": "井井有条",
        "answer": "order",
        "options": [
          {
            "id": "messy2",
            "emoji": "🧦💥📚",
            "label": "乱七八糟"
          },
          {
            "id": "order",
            "emoji": "📚📒✅",
            "label": "井井有条 organized"
          },
          {
            "id": "empty",
            "emoji": "🪹",
            "label": "空的"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 助人为乐",
        "prompt": "助人为乐",
        "answer": "help",
        "options": [
          {
            "id": "selfish",
            "emoji": "🙈",
            "label": "不管别人"
          },
          {
            "id": "help",
            "emoji": "🧒🤝👧",
            "label": "助人为乐 help"
          },
          {
            "id": "laugh",
            "emoji": "🤣",
            "label": "嘲笑别人"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 画龙点睛",
        "prompt": "画龙点睛",
        "answer": "eyes",
        "options": [
          {
            "id": "paper",
            "emoji": "📄",
            "label": "白纸"
          },
          {
            "id": "eyes",
            "emoji": "🐉👀✨",
            "label": "画龙点睛 touch"
          },
          {
            "id": "tail",
            "emoji": "🐉🎨",
            "label": "画尾巴"
          }
        ]
      }
    ],
    "success": "太棒了！动物成语全部通关！",
    "completion": "你掌握了动物成语四题",
    "completionTitle": "动物成语通关！",
    "sceneReward": "🏆 动物成语勋章"
  },
  {
    "id": "level-21",
    "number": 21,
    "worldId": "school-island",
    "title": "找到书本",
    "skill": "听单词选物品",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the book.",
    "words": [
      "book"
    ],
    "options": [
      {
        "id": "pencil",
        "emoji": "✏️",
        "label": "pencil"
      },
      {
        "id": "book",
        "emoji": "📘",
        "label": "book"
      },
      {
        "id": "bag",
        "emoji": "🎒",
        "label": "bag"
      }
    ],
    "answer": "book",
    "success": "Yes! Book! 📘",
    "completion": "你听懂了 book",
    "sceneReward": "📚 课本出现了"
  },
  {
    "id": "level-22",
    "number": 22,
    "worldId": "school-island",
    "title": "找到铅笔",
    "skill": "听单词选物品",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the pencil.",
    "words": [
      "pencil"
    ],
    "options": [
      {
        "id": "book",
        "emoji": "📘",
        "label": "book"
      },
      {
        "id": "pencil",
        "emoji": "✏️",
        "label": "pencil"
      },
      {
        "id": "ruler",
        "emoji": "📏",
        "label": "ruler"
      }
    ],
    "answer": "pencil",
    "success": "Yes! Pencil! ✏️",
    "completion": "你听懂了 pencil",
    "sceneReward": "✏️ 铅笔出现了"
  },
  {
    "id": "level-23",
    "number": 23,
    "worldId": "school-island",
    "title": "找到书包",
    "skill": "听单词选物品",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the bag.",
    "words": [
      "bag"
    ],
    "options": [
      {
        "id": "book",
        "emoji": "📘",
        "label": "book"
      },
      {
        "id": "eraser",
        "emoji": "🧽",
        "label": "eraser"
      },
      {
        "id": "bag",
        "emoji": "🎒",
        "label": "bag"
      }
    ],
    "answer": "bag",
    "success": "Yes! Bag! 🎒",
    "completion": "你听懂了 bag",
    "sceneReward": "🎒 书包出现了"
  },
  {
    "id": "level-24",
    "number": 24,
    "worldId": "school-island",
    "title": "老师好",
    "skill": "听音选场景",
    "type": "choice",
    "instruction": "听到口令后，选择正确的场景",
    "prompt": "Good morning, teacher!",
    "words": [
      "good morning",
      "teacher"
    ],
    "options": [
      {
        "id": "playground",
        "emoji": "⚽🏃",
        "label": "playground"
      },
      {
        "id": "classroom",
        "emoji": "🏫👋",
        "label": "greet teacher"
      },
      {
        "id": "lunch",
        "emoji": "🍽️",
        "label": "lunch time"
      }
    ],
    "answer": "classroom",
    "success": "Yes! Good morning, teacher!",
    "completion": "你听懂了 Good morning, teacher!",
    "sceneReward": "🏫 校门打开了"
  },
  {
    "id": "level-25",
    "number": 25,
    "worldId": "school-island",
    "title": "我可以进来吗",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "May I come in?",
    "words": [
      "may I come in"
    ],
    "options": [
      {
        "id": "go-out",
        "emoji": "🚶‍♀️🚪",
        "label": "going out"
      },
      {
        "id": "come-in",
        "emoji": "✋🚪🏫",
        "label": "knocking to come in"
      },
      {
        "id": "sit",
        "emoji": "🪑",
        "label": "sitting down"
      }
    ],
    "answer": "come-in",
    "success": "Yes! May I come in?",
    "completion": "你听懂了 May I come in?",
    "sceneReward": "🚪 门打开了"
  },
  {
    "id": "level-26",
    "number": 26,
    "worldId": "school-island",
    "title": "谁在写字",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "I am writing.",
    "words": [
      "writing",
      "I am"
    ],
    "options": [
      {
        "id": "reading",
        "emoji": "📖",
        "label": "reading"
      },
      {
        "id": "writing",
        "emoji": "✏️📝",
        "label": "writing"
      },
      {
        "id": "drawing",
        "emoji": "🎨",
        "label": "drawing"
      }
    ],
    "answer": "writing",
    "success": "Yes! I am writing!",
    "completion": "你听懂了 I am writing",
    "sceneReward": "✏️ 写字板准备好了"
  },
  {
    "id": "level-27",
    "number": 27,
    "worldId": "school-island",
    "title": "拼出 BOOK",
    "skill": "按顺序拼单词",
    "type": "word-forge",
    "instruction": "按听到的顺序点字母",
    "prompt": "Build book. B. O. O. K. Book.",
    "words": [
      "book",
      "b",
      "o",
      "k"
    ],
    "letters": [
      "O",
      "K",
      "B"
    ],
    "answer": "BOOK",
    "success": "Yes! B. O. O. K. Book!",
    "completion": "你拼出了 BOOK",
    "sceneReward": "📘 书本拼好了"
  },
  {
    "id": "level-28",
    "number": 28,
    "worldId": "school-island",
    "title": "跟读：谢谢老师",
    "skill": "听示范并跟读",
    "type": "echo",
    "instruction": "听完示范，再说同一句话",
    "prompt": "Thank you, teacher.",
    "words": [
      "thank you",
      "teacher"
    ],
    "accepted": [
      "thank you teacher",
      "thank you",
      "teacher"
    ],
    "success": "You're welcome!",
    "completion": "你说出了 Thank you, teacher!",
    "sceneReward": "🙏 感谢手势"
  },
  {
    "id": "level-29",
    "number": 29,
    "worldId": "school-island",
    "title": "找到尺子",
    "skill": "听单词选物品",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the ruler.",
    "words": [
      "ruler"
    ],
    "options": [
      {
        "id": "pencil",
        "emoji": "✏️",
        "label": "pencil"
      },
      {
        "id": "eraser",
        "emoji": "🧽",
        "label": "eraser"
      },
      {
        "id": "ruler",
        "emoji": "📏",
        "label": "ruler"
      }
    ],
    "answer": "ruler",
    "success": "Yes! Ruler! 📏",
    "completion": "你听懂了 ruler",
    "sceneReward": "📏 尺子出现了"
  },
  {
    "id": "level-30",
    "number": 30,
    "worldId": "school-island",
    "title": "校园岛 Boss",
    "skill": "四项综合任务",
    "type": "boss",
    "instruction": "完成四项任务，点亮校园岛",
    "prompt": "Let's save School Island!",
    "words": [
      "book",
      "pencil",
      "teacher",
      "ruler"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "选择书本",
        "prompt": "Find the book.",
        "answer": "book",
        "options": [
          {
            "id": "pencil",
            "emoji": "✏️",
            "label": "pencil"
          },
          {
            "id": "book",
            "emoji": "📘",
            "label": "book"
          },
          {
            "id": "bag",
            "emoji": "🎒",
            "label": "bag"
          }
        ]
      },
      {
        "type": "word-forge",
        "instruction": "拼出 PEN",
        "prompt": "Build pen. P. E. N.",
        "answer": "PEN",
        "letters": [
          "E",
          "N",
          "P"
        ]
      },
      {
        "type": "choice",
        "instruction": "选择老师",
        "prompt": "Find the teacher.",
        "answer": "teacher",
        "options": [
          {
            "id": "student",
            "emoji": "👧",
            "label": "student"
          },
          {
            "id": "teacher",
            "emoji": "👩‍🏫",
            "label": "teacher"
          },
          {
            "id": "dog",
            "emoji": "🐶",
            "label": "dog"
          }
        ]
      },
      {
        "type": "echo",
        "instruction": "跟读句子",
        "prompt": "Good morning, teacher!",
        "accepted": [
          "good morning teacher",
          "good morning",
          "morning teacher"
        ]
      }
    ],
    "success": "School Island is saved!",
    "completion": "你完成了校园岛的所有挑战",
    "completionTitle": "校园岛得救了！",
    "sceneReward": "✨ 校园岛完全修复"
  },
  {
    "id": "level-31",
    "number": 31,
    "worldId": "school-island",
    "title": "不耻下问",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个孩子在勇敢提问",
    "prompt": "不耻下问。Ask questions!",
    "words": [
      "不耻下问",
      "ask"
    ],
    "options": [
      {
        "id": "shy",
        "emoji": "🧒😶",
        "label": "不敢提问"
      },
      {
        "id": "ask",
        "emoji": "🧒✋👩‍🏫",
        "label": "勇敢举手提问"
      },
      {
        "id": "sleep",
        "emoji": "🧒😴",
        "label": "上课睡觉"
      }
    ],
    "answer": "ask",
    "success": "不耻下问，不懂就问。Ask questions!",
    "completion": "你理解了 不耻下问 (ask)",
    "sceneReward": "✋ 勇敢提问星"
  },
  {
    "id": "level-32",
    "number": 32,
    "worldId": "school-island",
    "title": "举一反三",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个孩子学一个会三个",
    "prompt": "举一反三。Learn one, know three!",
    "words": [
      "举一反三",
      "learn"
    ],
    "options": [
      {
        "id": "copy",
        "emoji": "🧒📝📝",
        "label": "只会抄写"
      },
      {
        "id": "learn",
        "emoji": "🧒💡3️⃣",
        "label": "学一个会三个"
      },
      {
        "id": "forget",
        "emoji": "🧒🤷",
        "label": "学完就忘"
      }
    ],
    "answer": "learn",
    "success": "举一反三，学一个能推出更多。Learn one, know three!",
    "completion": "你理解了 举一反三 (learn)",
    "sceneReward": "💡 灵感灯泡"
  },
  {
    "id": "level-33",
    "number": 33,
    "worldId": "school-island",
    "title": "温故知新",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个孩子在复习旧知识学到新东西",
    "prompt": "温故知新。Review and learn new!",
    "words": [
      "温故知新",
      "review"
    ],
    "options": [
      {
        "id": "skip",
        "emoji": "🧒⏭️",
        "label": "跳过复习"
      },
      {
        "id": "review",
        "emoji": "🧒📖✨💡",
        "label": "复习后有了新发现"
      },
      {
        "id": "cram",
        "emoji": "🧒📚😰",
        "label": "临时抱佛脚"
      }
    ],
    "answer": "review",
    "success": "温故知新，复习旧知识得到新理解。Review and learn new!",
    "completion": "你理解了 温故知新 (review)",
    "sceneReward": "📖 复习书打开了"
  },
  {
    "id": "level-34",
    "number": 34,
    "worldId": "school-island",
    "title": "学而不厌",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个孩子一直想学更多",
    "prompt": "学而不厌。Never tired of learning!",
    "words": [
      "学而不厌",
      "learning"
    ],
    "options": [
      {
        "id": "bored",
        "emoji": "🧒🥱📚",
        "label": "学习很烦"
      },
      {
        "id": "learning",
        "emoji": "🧒📚😊➡️📖",
        "label": "一直快乐学习"
      },
      {
        "id": "play",
        "emoji": "🧒🎮",
        "label": "只想玩"
      }
    ],
    "answer": "learning",
    "success": "学而不厌，学习永远不嫌多。Never tired of learning!",
    "completion": "你理解了 学而不厌 (learning)",
    "sceneReward": "📚 知识树长高了"
  },
  {
    "id": "level-35",
    "number": 35,
    "worldId": "school-island",
    "title": "循序渐进",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪种学习方法是对的",
    "prompt": "循序渐进。Step by step!",
    "words": [
      "循序渐进",
      "step"
    ],
    "options": [
      {
        "id": "rush",
        "emoji": "🧒🏃💨📚",
        "label": "急急忙忙跳着学"
      },
      {
        "id": "step",
        "emoji": "🧒1️⃣2️⃣3️⃣📚",
        "label": "一步一步慢慢来"
      },
      {
        "id": "stop",
        "emoji": "🧒🛑",
        "label": "中途放弃"
      }
    ],
    "answer": "step",
    "success": "循序渐进，一步一步来。Step by step!",
    "completion": "你理解了 循序渐进 (step)",
    "sceneReward": "🪜 进步阶梯"
  },
  {
    "id": "level-36",
    "number": 36,
    "worldId": "school-island",
    "title": "半途而废",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个孩子中途放弃了",
    "prompt": "半途而废。Don't give up halfway!",
    "words": [
      "半途而废",
      "give up"
    ],
    "options": [
      {
        "id": "finish",
        "emoji": "🧒🏁✅",
        "label": "坚持到底完成"
      },
      {
        "id": "giveup",
        "emoji": "🧒🛑😢",
        "label": "做到一半放弃了"
      },
      {
        "id": "start",
        "emoji": "🧒🚀",
        "label": "刚开始"
      }
    ],
    "answer": "giveup",
    "success": "半途而废，做到一半就放弃。Don't give up!",
    "completion": "你理解了 半途而废 (give up)",
    "sceneReward": "🛑 不要放弃"
  },
  {
    "id": "level-37",
    "number": 37,
    "worldId": "school-island",
    "title": "业精于勤",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个说明业精于勤？(英文关键词：diligent)",
    "prompt": "业精于勤。Diligent!",
    "words": [
      "业精于勤",
      "diligent"
    ],
    "options": [
      {
        "id": "lazy",
        "emoji": "🧒🛌📚",
        "label": "偷懒不学 lazy"
      },
      {
        "id": "diligent",
        "emoji": "🧒📝💪✨",
        "label": "勤奋练习 diligent"
      },
      {
        "id": "copy",
        "emoji": "🧒📋",
        "label": "抄答案"
      }
    ],
    "answer": "diligent",
    "success": "业精于勤，勤奋才能学好。Diligent!",
    "completion": "你理解了 业精于勤 (diligent)",
    "sceneReward": "💪 勤奋星"
  },
  {
    "id": "level-38",
    "number": 38,
    "worldId": "school-island",
    "title": "开卷有益",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个说明开卷有益？(英文关键词：reading helps)",
    "prompt": "开卷有益。Reading helps!",
    "words": [
      "开卷有益",
      "reading"
    ],
    "options": [
      {
        "id": "reading",
        "emoji": "🧒📖✨💡",
        "label": "读书有收获 reading"
      },
      {
        "id": "waste",
        "emoji": "🧒📺😰",
        "label": "浪费时间"
      },
      {
        "id": "bored",
        "emoji": "🧒📖🥱",
        "label": "读书无聊"
      }
    ],
    "answer": "reading",
    "success": "开卷有益，读书总是有好处的。Reading helps!",
    "completion": "你理解了 开卷有益 (reading)",
    "sceneReward": "📖 好书发光了"
  },
  {
    "id": "level-39",
    "number": 39,
    "worldId": "school-island",
    "title": "笨鸟先飞",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个说明笨鸟先飞",
    "prompt": "笨鸟先飞。Start early to succeed!",
    "words": [
      "笨鸟先飞",
      "early"
    ],
    "options": [
      {
        "id": "early",
        "emoji": "🐦⏰💪✨",
        "label": "早起多练先出发"
      },
      {
        "id": "late",
        "emoji": "🐦😴⏰",
        "label": "睡懒觉迟到"
      },
      {
        "id": "giveup",
        "emoji": "🐦😢",
        "label": "放弃不练"
      }
    ],
    "answer": "early",
    "success": "笨鸟先飞，先出发先努力。Start early!",
    "completion": "你理解了 笨鸟先飞 (early)",
    "sceneReward": "🐦 早起的鸟儿"
  },
  {
    "id": "level-40",
    "number": 40,
    "worldId": "school-island",
    "title": "校园成语大挑战",
    "skill": "四项成语综合",
    "type": "boss",
    "instruction": "完成四项成语任务",
    "prompt": "校园成语大闯关！",
    "words": [
      "不耻下问",
      "举一反三",
      "循序渐进",
      "笨鸟先飞"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "哪个是 不耻下问",
        "prompt": "不耻下问",
        "answer": "ask",
        "options": [
          {
            "id": "shy",
            "emoji": "🧒😶",
            "label": "不敢问"
          },
          {
            "id": "ask",
            "emoji": "🧒✋👩‍🏫",
            "label": "不耻下问 ask"
          },
          {
            "id": "sleep",
            "emoji": "🧒😴",
            "label": "睡觉"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 举一反三",
        "prompt": "举一反三",
        "answer": "learn",
        "options": [
          {
            "id": "copy",
            "emoji": "🧒📝",
            "label": "抄写"
          },
          {
            "id": "learn",
            "emoji": "🧒💡3️⃣",
            "label": "举一反三 learn"
          },
          {
            "id": "forget",
            "emoji": "🧒🤷",
            "label": "忘了"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 循序渐进",
        "prompt": "循序渐进",
        "answer": "step",
        "options": [
          {
            "id": "rush",
            "emoji": "🏃💨",
            "label": "急急忙忙"
          },
          {
            "id": "step",
            "emoji": "1️⃣2️⃣3️⃣",
            "label": "循序渐进 step"
          },
          {
            "id": "stop",
            "emoji": "🛑",
            "label": "放弃"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 笨鸟先飞",
        "prompt": "笨鸟先飞",
        "answer": "early",
        "options": [
          {
            "id": "early",
            "emoji": "🐦⏰✨",
            "label": "笨鸟先飞 early"
          },
          {
            "id": "late",
            "emoji": "🐦😴",
            "label": "睡懒觉"
          },
          {
            "id": "quit",
            "emoji": "🐦😢",
            "label": "放弃"
          }
        ]
      }
    ],
    "success": "太棒了！校园成语全部通关！",
    "completion": "你掌握了校园成语四题",
    "completionTitle": "校园成语通关！",
    "sceneReward": "🏆 校园成语勋章"
  },
  {
    "id": "level-41",
    "number": 41,
    "worldId": "life-island",
    "title": "找到牛奶",
    "skill": "听单词选物品",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the milk.",
    "words": [
      "milk"
    ],
    "options": [
      {
        "id": "water",
        "emoji": "💧",
        "label": "water"
      },
      {
        "id": "milk",
        "emoji": "🥛",
        "label": "milk"
      },
      {
        "id": "juice",
        "emoji": "🧃",
        "label": "juice"
      }
    ],
    "answer": "milk",
    "success": "Yes! Milk! 🥛",
    "completion": "你听懂了 milk",
    "sceneReward": "🥛 牛奶出现了"
  },
  {
    "id": "level-42",
    "number": 42,
    "worldId": "life-island",
    "title": "找到水",
    "skill": "听单词选物品",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the water.",
    "words": [
      "water"
    ],
    "options": [
      {
        "id": "milk",
        "emoji": "🥛",
        "label": "milk"
      },
      {
        "id": "juice",
        "emoji": "🧃",
        "label": "juice"
      },
      {
        "id": "water",
        "emoji": "💧",
        "label": "water"
      }
    ],
    "answer": "water",
    "success": "Yes! Water! 💧",
    "completion": "你听懂了 water",
    "sceneReward": "💧 水杯出现了"
  },
  {
    "id": "level-43",
    "number": 43,
    "worldId": "life-island",
    "title": "找到鞋子",
    "skill": "听单词选物品",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the shoes.",
    "words": [
      "shoes"
    ],
    "options": [
      {
        "id": "hat",
        "emoji": "🧢",
        "label": "hat"
      },
      {
        "id": "shoes",
        "emoji": "👟",
        "label": "shoes"
      },
      {
        "id": "coat",
        "emoji": "🧥",
        "label": "coat"
      }
    ],
    "answer": "shoes",
    "success": "Yes! Shoes! 👟",
    "completion": "你听懂了 shoes",
    "sceneReward": "👟 鞋子出现了"
  },
  {
    "id": "level-44",
    "number": 44,
    "worldId": "life-island",
    "title": "找到帽子",
    "skill": "听单词选物品",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the hat.",
    "words": [
      "hat"
    ],
    "options": [
      {
        "id": "shoes",
        "emoji": "👟",
        "label": "shoes"
      },
      {
        "id": "coat",
        "emoji": "🧥",
        "label": "coat"
      },
      {
        "id": "hat",
        "emoji": "🧢",
        "label": "hat"
      }
    ],
    "answer": "hat",
    "success": "Yes! Hat! 🧢",
    "completion": "你听懂了 hat",
    "sceneReward": "🧢 帽子出现了"
  },
  {
    "id": "level-45",
    "number": 45,
    "worldId": "life-island",
    "title": "穿上外套",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "Put on your coat.",
    "words": [
      "put on",
      "coat"
    ],
    "options": [
      {
        "id": "take-off",
        "emoji": "🧥❌",
        "label": "take off coat"
      },
      {
        "id": "put-on",
        "emoji": "🧥✅👧",
        "label": "put on coat"
      },
      {
        "id": "wash",
        "emoji": "🧥🧼",
        "label": "wash coat"
      }
    ],
    "answer": "put-on",
    "success": "Yes! Put on your coat!",
    "completion": "你听懂了 Put on your coat",
    "sceneReward": "🧥 外套穿好了"
  },
  {
    "id": "level-46",
    "number": 46,
    "worldId": "life-island",
    "title": "我找不到",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "I can't find my bag.",
    "words": [
      "can't find",
      "bag"
    ],
    "options": [
      {
        "id": "found",
        "emoji": "🎒😊",
        "label": "found the bag"
      },
      {
        "id": "lost",
        "emoji": "🧒🤷🎒❓",
        "label": "can't find the bag"
      },
      {
        "id": "open",
        "emoji": "🎒📂",
        "label": "opening the bag"
      }
    ],
    "answer": "lost",
    "success": "Yes! I can't find my bag!",
    "completion": "你听懂了 I can't find my bag",
    "sceneReward": "🎒 书包找到了"
  },
  {
    "id": "level-47",
    "number": 47,
    "worldId": "life-island",
    "title": "拼出 MILK",
    "skill": "按顺序拼单词",
    "type": "word-forge",
    "instruction": "按听到的顺序点字母",
    "prompt": "Build milk. M. I. L. K. Milk.",
    "words": [
      "milk",
      "m",
      "i",
      "l",
      "k"
    ],
    "letters": [
      "I",
      "K",
      "M",
      "L"
    ],
    "answer": "MILK",
    "success": "Yes! M. I. L. K. Milk!",
    "completion": "你拼出了 MILK",
    "sceneReward": "🥛 牛奶拼好了"
  },
  {
    "id": "level-48",
    "number": 48,
    "worldId": "life-island",
    "title": "跟读：再见",
    "skill": "听示范并跟读",
    "type": "echo",
    "instruction": "听完示范，再说同一句话",
    "prompt": "Goodbye!",
    "words": [
      "goodbye"
    ],
    "accepted": [
      "goodbye",
      "bye",
      "see you"
    ],
    "success": "Goodbye! See you soon!",
    "completion": "你说出了 Goodbye!",
    "sceneReward": "👋 挥手告别"
  },
  {
    "id": "level-49",
    "number": 49,
    "worldId": "life-island",
    "title": "找到果汁",
    "skill": "听单词选物品",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the juice.",
    "words": [
      "juice"
    ],
    "options": [
      {
        "id": "milk",
        "emoji": "🥛",
        "label": "milk"
      },
      {
        "id": "water",
        "emoji": "💧",
        "label": "water"
      },
      {
        "id": "juice",
        "emoji": "🧃",
        "label": "juice"
      }
    ],
    "answer": "juice",
    "success": "Yes! Juice! 🧃",
    "completion": "你听懂了 juice",
    "sceneReward": "🧃 果汁出现了"
  },
  {
    "id": "level-50",
    "number": 50,
    "worldId": "life-island",
    "title": "生活岛 Boss",
    "skill": "四项综合任务",
    "type": "boss",
    "instruction": "完成四项任务，点亮生活岛",
    "prompt": "Let's save Life Island!",
    "words": [
      "milk",
      "shoes",
      "hat",
      "coat"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "选择牛奶",
        "prompt": "Find the milk.",
        "answer": "milk",
        "options": [
          {
            "id": "water",
            "emoji": "💧",
            "label": "water"
          },
          {
            "id": "milk",
            "emoji": "🥛",
            "label": "milk"
          },
          {
            "id": "juice",
            "emoji": "🧃",
            "label": "juice"
          }
        ]
      },
      {
        "type": "word-forge",
        "instruction": "拼出 HAT",
        "prompt": "Build hat. H. A. T.",
        "answer": "HAT",
        "letters": [
          "T",
          "H",
          "A"
        ]
      },
      {
        "type": "choice",
        "instruction": "选择鞋子",
        "prompt": "Find the shoes.",
        "answer": "shoes",
        "options": [
          {
            "id": "hat",
            "emoji": "🧢",
            "label": "hat"
          },
          {
            "id": "shoes",
            "emoji": "👟",
            "label": "shoes"
          },
          {
            "id": "coat",
            "emoji": "🧥",
            "label": "coat"
          }
        ]
      },
      {
        "type": "echo",
        "instruction": "跟读句子",
        "prompt": "Put on your coat.",
        "accepted": [
          "put on your coat",
          "put on coat",
          "your coat"
        ]
      }
    ],
    "success": "Life Island is saved!",
    "completion": "你完成了生活岛的所有挑战",
    "completionTitle": "生活岛得救了！",
    "sceneReward": "✨ 生活岛完全修复"
  },
  {
    "id": "level-51",
    "number": 51,
    "worldId": "life-island",
    "title": "一诺千金",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个孩子说话算数",
    "prompt": "一诺千金。Keep your promise!",
    "words": [
      "一诺千金",
      "promise"
    ],
    "options": [
      {
        "id": "break",
        "emoji": "🧒🤞💔",
        "label": "说话不算数"
      },
      {
        "id": "promise",
        "emoji": "🧒🤝✨",
        "label": "说到做到"
      },
      {
        "id": "forget",
        "emoji": "🧒🤷",
        "label": "忘了答应的事"
      }
    ],
    "answer": "promise",
    "success": "一诺千金，承诺很值钱。Keep your promise!",
    "completion": "你理解了 一诺千金 (promise)",
    "sceneReward": "🤝 诚信勋章"
  },
  {
    "id": "level-52",
    "number": 52,
    "worldId": "life-island",
    "title": "言而有信",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是言而有信",
    "prompt": "言而有信。Honest and trustworthy!",
    "words": [
      "言而有信",
      "honest"
    ],
    "options": [
      {
        "id": "lie",
        "emoji": "🧒🤥",
        "label": "说谎话"
      },
      {
        "id": "honest",
        "emoji": "🧒✅💖",
        "label": "说话算数"
      },
      {
        "id": "late",
        "emoji": "🧒⏰😰",
        "label": "总是迟到"
      }
    ],
    "answer": "honest",
    "success": "言而有信，说话讲信用。Honest!",
    "completion": "你理解了 言而有信 (honest)",
    "sceneReward": "✅ 诚信章"
  },
  {
    "id": "level-53",
    "number": 53,
    "worldId": "life-island",
    "title": "知足常乐",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个孩子知足常乐",
    "prompt": "知足常乐。Be happy with what you have!",
    "words": [
      "知足常乐",
      "content"
    ],
    "options": [
      {
        "id": "greedy",
        "emoji": "🧒🍪🍪🍪😰",
        "label": "总想要更多"
      },
      {
        "id": "content",
        "emoji": "🧒🍪😊",
        "label": "有一个就很开心"
      },
      {
        "id": "sad",
        "emoji": "🧒😢",
        "label": "什么都不开心"
      }
    ],
    "answer": "content",
    "success": "知足常乐，满足就快乐。Be happy with what you have!",
    "completion": "你理解了 知足常乐 (content)",
    "sceneReward": "😊 满足星"
  },
  {
    "id": "level-54",
    "number": 54,
    "worldId": "life-island",
    "title": "精打细算",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是精打细算",
    "prompt": "精打细算。Save carefully!",
    "words": [
      "精打细算",
      "save"
    ],
    "options": [
      {
        "id": "waste",
        "emoji": "🧒💰💥",
        "label": "乱花钱"
      },
      {
        "id": "save",
        "emoji": "🧒💰📝✅",
        "label": "仔细计算着花"
      },
      {
        "id": "steal",
        "emoji": "🧒💰🤫",
        "label": "偷钱"
      }
    ],
    "answer": "save",
    "success": "精打细算，仔细计算不浪费。Save carefully!",
    "completion": "你理解了 精打细算 (save)",
    "sceneReward": "💰 省钱罐"
  },
  {
    "id": "level-55",
    "number": 55,
    "worldId": "life-island",
    "title": "未雨绸缪",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是未雨绸缪",
    "prompt": "未雨绸缪。Prepare before it rains!",
    "words": [
      "未雨绸缪",
      "prepare"
    ],
    "options": [
      {
        "id": "wet",
        "emoji": "🧒🌧️😰",
        "label": "下雨淋湿了"
      },
      {
        "id": "prepare",
        "emoji": "🧒☂️☁️✅",
        "label": "提前带伞出门"
      },
      {
        "id": "rain",
        "emoji": "🧒🌧️🏠",
        "label": "下雨待在家"
      }
    ],
    "answer": "prepare",
    "success": "未雨绸缪，提前准备。Prepare before it rains!",
    "completion": "你理解了 未雨绸缪 (prepare)",
    "sceneReward": "☂️ 伞准备好了"
  },
  {
    "id": "level-56",
    "number": 56,
    "worldId": "life-island",
    "title": "有备无患",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是有备无患？(英文关键词：prepared)",
    "prompt": "有备无患。Be prepared!",
    "words": [
      "有备无患",
      "prepared"
    ],
    "options": [
      {
        "id": "prepared",
        "emoji": "🧒🎒✅😊",
        "label": "提前准备有备无患"
      },
      {
        "id": "worry",
        "emoji": "🧒😰💥",
        "label": "没有准备手忙脚乱"
      },
      {
        "id": "lucky",
        "emoji": "🧒🍀",
        "label": "靠运气"
      }
    ],
    "answer": "prepared",
    "success": "有备无患，有准备就不怕。Be prepared!",
    "completion": "你理解了 有备无患 (prepared)",
    "sceneReward": "🎒 准备好了"
  },
  {
    "id": "level-57",
    "number": 57,
    "worldId": "life-island",
    "title": "防微杜渐",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是防微杜渐",
    "prompt": "防微杜渐。Fix small problems early!",
    "words": [
      "防微杜渐",
      "prevent"
    ],
    "options": [
      {
        "id": "big",
        "emoji": "🧒🐛💥😰",
        "label": "小问题变成大问题"
      },
      {
        "id": "prevent",
        "emoji": "🧒🐜✅✨",
        "label": "小问题早处理"
      },
      {
        "id": "ignore",
        "emoji": "🧒🙈",
        "label": "假装看不见"
      }
    ],
    "answer": "prevent",
    "success": "防微杜渐，小问题早点解决。Fix small problems early!",
    "completion": "你理解了 防微杜渐 (prevent)",
    "sceneReward": "🔍 仔细检查"
  },
  {
    "id": "level-58",
    "number": 58,
    "worldId": "life-island",
    "title": "因地制宜",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是因地制宜？(英文关键词：adapt)",
    "prompt": "因地制宜。Adapt to the situation!",
    "words": [
      "因地制宜",
      "adapt"
    ],
    "options": [
      {
        "id": "same",
        "emoji": "🧒📋❌",
        "label": "所有地方用一样的方法"
      },
      {
        "id": "adapt",
        "emoji": "🧒🏔️🌾🏖️✅",
        "label": "根据不同地方调整"
      },
      {
        "id": "copy",
        "emoji": "🧒📋📋",
        "label": "照抄别人"
      }
    ],
    "answer": "adapt",
    "success": "因地制宜，根据实际情况来。Adapt!",
    "completion": "你理解了 因地制宜 (adapt)",
    "sceneReward": "🗺️ 适应地图"
  },
  {
    "id": "level-59",
    "number": 59,
    "worldId": "life-island",
    "title": "居安思危",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是居安思危",
    "prompt": "居安思危。Think of danger in peace!",
    "words": [
      "居安思危",
      "cautious"
    ],
    "options": [
      {
        "id": "relax",
        "emoji": "🧒🏖️😊💤",
        "label": "太安逸忘了危险"
      },
      {
        "id": "cautious",
        "emoji": "🧒🏠⚠️✅",
        "label": "安全时也想危险"
      },
      {
        "id": "scared",
        "emoji": "🧒😨",
        "label": "总是害怕"
      }
    ],
    "answer": "cautious",
    "success": "居安思危，安全时也想到危险。Be cautious!",
    "completion": "你理解了 居安思危 (cautious)",
    "sceneReward": "⚠️ 安全意识"
  },
  {
    "id": "level-60",
    "number": 60,
    "worldId": "life-island",
    "title": "生活成语大挑战",
    "skill": "四项成语综合",
    "type": "boss",
    "instruction": "完成四项成语任务",
    "prompt": "生活成语大闯关！",
    "words": [
      "一诺千金",
      "知足常乐",
      "未雨绸缪",
      "有备无患"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "哪个是 一诺千金",
        "prompt": "一诺千金",
        "answer": "promise",
        "options": [
          {
            "id": "break",
            "emoji": "🤞💔",
            "label": "说话不算数"
          },
          {
            "id": "promise",
            "emoji": "🤝✨",
            "label": "一诺千金 promise"
          },
          {
            "id": "forget",
            "emoji": "🤷",
            "label": "忘了"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 知足常乐",
        "prompt": "知足常乐",
        "answer": "content",
        "options": [
          {
            "id": "greedy",
            "emoji": "🍪🍪😰",
            "label": "贪心"
          },
          {
            "id": "content",
            "emoji": "🍪😊",
            "label": "知足常乐 content"
          },
          {
            "id": "sad",
            "emoji": "😢",
            "label": "难过"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 未雨绸缪",
        "prompt": "未雨绸缪",
        "answer": "prepare",
        "options": [
          {
            "id": "wet",
            "emoji": "🌧️😰",
            "label": "淋湿了"
          },
          {
            "id": "prepare",
            "emoji": "☂️✅",
            "label": "未雨绸缪 prepare"
          },
          {
            "id": "home",
            "emoji": "🏠",
            "label": "待在家"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 有备无患",
        "prompt": "有备无患",
        "answer": "prepared",
        "options": [
          {
            "id": "prepared",
            "emoji": "🎒✅",
            "label": "有备无患 prepared"
          },
          {
            "id": "worry",
            "emoji": "😰💥",
            "label": "手忙脚乱"
          },
          {
            "id": "lucky",
            "emoji": "🍀",
            "label": "靠运气"
          }
        ]
      }
    ],
    "success": "太棒了！生活成语全部通关！",
    "completion": "你掌握了生活成语四题",
    "completionTitle": "生活成语通关！",
    "sceneReward": "🏆 生活成语勋章"
  },
  {
    "id": "level-61",
    "number": 61,
    "worldId": "food-island",
    "title": "找到蛋糕",
    "skill": "听单词选食物",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the cake.",
    "words": [
      "cake"
    ],
    "options": [
      {
        "id": "bread",
        "emoji": "🍞",
        "label": "bread"
      },
      {
        "id": "cake",
        "emoji": "🍰",
        "label": "cake"
      },
      {
        "id": "rice",
        "emoji": "🍚",
        "label": "rice"
      }
    ],
    "answer": "cake",
    "success": "Yes! Cake! 🍰",
    "completion": "你听懂了 cake",
    "sceneReward": "🍰 蛋糕出现了"
  },
  {
    "id": "level-62",
    "number": 62,
    "worldId": "food-island",
    "title": "找到面包",
    "skill": "听单词选食物",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the bread.",
    "words": [
      "bread"
    ],
    "options": [
      {
        "id": "cake",
        "emoji": "🍰",
        "label": "cake"
      },
      {
        "id": "egg",
        "emoji": "🥚",
        "label": "egg"
      },
      {
        "id": "bread",
        "emoji": "🍞",
        "label": "bread"
      }
    ],
    "answer": "bread",
    "success": "Yes! Bread! 🍞",
    "completion": "你听懂了 bread",
    "sceneReward": "🍞 面包出现了"
  },
  {
    "id": "level-63",
    "number": 63,
    "worldId": "food-island",
    "title": "找到苹果",
    "skill": "听单词选食物",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the apple.",
    "words": [
      "apple"
    ],
    "options": [
      {
        "id": "banana",
        "emoji": "🍌",
        "label": "banana"
      },
      {
        "id": "apple",
        "emoji": "🍎",
        "label": "apple"
      },
      {
        "id": "candy",
        "emoji": "🍬",
        "label": "candy"
      }
    ],
    "answer": "apple",
    "success": "Yes! Apple! 🍎",
    "completion": "你听懂了 apple",
    "sceneReward": "🍎 苹果出现了"
  },
  {
    "id": "level-64",
    "number": 64,
    "worldId": "food-island",
    "title": "找到香蕉",
    "skill": "听单词选食物",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the banana.",
    "words": [
      "banana"
    ],
    "options": [
      {
        "id": "apple",
        "emoji": "🍎",
        "label": "apple"
      },
      {
        "id": "pizza",
        "emoji": "🍕",
        "label": "pizza"
      },
      {
        "id": "banana",
        "emoji": "🍌",
        "label": "banana"
      }
    ],
    "answer": "banana",
    "success": "Yes! Banana! 🍌",
    "completion": "你听懂了 banana",
    "sceneReward": "🍌 香蕉出现了"
  },
  {
    "id": "level-65",
    "number": 65,
    "worldId": "food-island",
    "title": "我想要",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "I would like some rice.",
    "words": [
      "I would like",
      "rice"
    ],
    "options": [
      {
        "id": "cake",
        "emoji": "🍰🙋",
        "label": "want cake"
      },
      {
        "id": "rice",
        "emoji": "🍚🙋",
        "label": "want rice"
      },
      {
        "id": "bread",
        "emoji": "🍞🙋",
        "label": "want bread"
      }
    ],
    "answer": "rice",
    "success": "Yes! I would like some rice!",
    "completion": "你听懂了 I would like some rice",
    "sceneReward": "🍚 米饭出现了"
  },
  {
    "id": "level-66",
    "number": 66,
    "worldId": "food-island",
    "title": "我能要吗",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "Can I have some water?",
    "words": [
      "Can I have",
      "water"
    ],
    "options": [
      {
        "id": "juice",
        "emoji": "🧃🙋",
        "label": "ask for juice"
      },
      {
        "id": "water",
        "emoji": "💧🙋",
        "label": "ask for water"
      },
      {
        "id": "milk",
        "emoji": "🥛🙋",
        "label": "ask for milk"
      }
    ],
    "answer": "water",
    "success": "Yes! Can I have some water?",
    "completion": "你听懂了 Can I have some water?",
    "sceneReward": "💧 水来了"
  },
  {
    "id": "level-67",
    "number": 67,
    "worldId": "food-island",
    "title": "拼出 CAKE",
    "skill": "按顺序拼单词",
    "type": "word-forge",
    "instruction": "按听到的顺序点字母",
    "prompt": "Build cake. C. A. K. E. Cake.",
    "words": [
      "cake",
      "c",
      "a",
      "k",
      "e"
    ],
    "letters": [
      "E",
      "K",
      "A",
      "C"
    ],
    "answer": "CAKE",
    "success": "Yes! C. A. K. E. Cake!",
    "completion": "你拼出了 CAKE",
    "sceneReward": "🍰 蛋糕拼好了"
  },
  {
    "id": "level-68",
    "number": 68,
    "worldId": "food-island",
    "title": "跟读：我饿了",
    "skill": "听示范并跟读",
    "type": "echo",
    "instruction": "听完示范，再说同一句话",
    "prompt": "I am hungry.",
    "words": [
      "hungry",
      "I am"
    ],
    "accepted": [
      "i am hungry",
      "am hungry",
      "hungry"
    ],
    "success": "Let's eat something!",
    "completion": "你说出了 I am hungry",
    "sceneReward": "🍽️ 餐桌准备好了"
  },
  {
    "id": "level-69",
    "number": 69,
    "worldId": "food-island",
    "title": "找到披萨",
    "skill": "听单词选食物",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the pizza.",
    "words": [
      "pizza"
    ],
    "options": [
      {
        "id": "bread",
        "emoji": "🍞",
        "label": "bread"
      },
      {
        "id": "cake",
        "emoji": "🍰",
        "label": "cake"
      },
      {
        "id": "pizza",
        "emoji": "🍕",
        "label": "pizza"
      }
    ],
    "answer": "pizza",
    "success": "Yes! Pizza! 🍕",
    "completion": "你听懂了 pizza",
    "sceneReward": "🍕 披萨出现了"
  },
  {
    "id": "level-70",
    "number": 70,
    "worldId": "food-island",
    "title": "美食岛 Boss",
    "skill": "四项综合任务",
    "type": "boss",
    "instruction": "完成四项任务，点亮美食岛",
    "prompt": "Let's save Food Island!",
    "words": [
      "cake",
      "bread",
      "apple",
      "pizza"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "选择蛋糕",
        "prompt": "Find the cake.",
        "answer": "cake",
        "options": [
          {
            "id": "bread",
            "emoji": "🍞",
            "label": "bread"
          },
          {
            "id": "cake",
            "emoji": "🍰",
            "label": "cake"
          },
          {
            "id": "rice",
            "emoji": "🍚",
            "label": "rice"
          }
        ]
      },
      {
        "type": "word-forge",
        "instruction": "拼出 RICE",
        "prompt": "Build rice. R. I. C. E.",
        "answer": "RICE",
        "letters": [
          "E",
          "C",
          "I",
          "R"
        ]
      },
      {
        "type": "choice",
        "instruction": "选择苹果",
        "prompt": "Find the apple.",
        "answer": "apple",
        "options": [
          {
            "id": "banana",
            "emoji": "🍌",
            "label": "banana"
          },
          {
            "id": "apple",
            "emoji": "🍎",
            "label": "apple"
          },
          {
            "id": "candy",
            "emoji": "🍬",
            "label": "candy"
          }
        ]
      },
      {
        "type": "echo",
        "instruction": "跟读句子",
        "prompt": "I would like some cake.",
        "accepted": [
          "i would like some cake",
          "would like some cake",
          "some cake"
        ]
      }
    ],
    "success": "Food Island is saved!",
    "completion": "你完成了美食岛的所有挑战",
    "completionTitle": "美食岛得救了！",
    "sceneReward": "✨ 美食岛完全修复"
  },
  {
    "id": "level-71",
    "number": 71,
    "worldId": "food-island",
    "title": "津津有味",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个孩子吃得很香",
    "prompt": "津津有味。Eat with pleasure!",
    "words": [
      "津津有味",
      "delicious"
    ],
    "options": [
      {
        "id": "hate",
        "emoji": "😖🥦",
        "label": "不喜欢吃"
      },
      {
        "id": "enjoy",
        "emoji": "👧😋🍕",
        "label": "吃得很香"
      },
      {
        "id": "full",
        "emoji": "🥵🍽️",
        "label": "吃饱了"
      }
    ],
    "answer": "enjoy",
    "success": "津津有味，吃得非常香。Delicious!",
    "completion": "你理解了 津津有味 (delicious)",
    "sceneReward": "😋 美味星"
  },
  {
    "id": "level-72",
    "number": 72,
    "worldId": "food-island",
    "title": "狼吞虎咽",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是狼吞虎咽",
    "prompt": "狼吞虎咽。Eat very fast!",
    "words": [
      "狼吞虎咽",
      "fast"
    ],
    "options": [
      {
        "id": "slow",
        "emoji": "🧒🍽️😊",
        "label": "慢慢品尝"
      },
      {
        "id": "fast",
        "emoji": "🧒🍽️💨😰",
        "label": "大口快速吞"
      },
      {
        "id": "small",
        "emoji": "🧒🥄",
        "label": "小口小口吃"
      }
    ],
    "answer": "fast",
    "success": "狼吞虎咽，吃得太快。Eat very fast!",
    "completion": "你理解了 狼吞虎咽 (fast)",
    "sceneReward": "💨 快吃星"
  },
  {
    "id": "level-73",
    "number": 73,
    "worldId": "food-island",
    "title": "丰衣足食",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是丰衣足食",
    "prompt": "丰衣足食。Have enough food and clothes!",
    "words": [
      "丰衣足食",
      "enough"
    ],
    "options": [
      {
        "id": "poor",
        "emoji": "🧒🥶😰",
        "label": "吃不饱穿不暖"
      },
      {
        "id": "enough",
        "emoji": "🧒👗🍽️😊",
        "label": "吃穿都不愁"
      },
      {
        "id": "waste",
        "emoji": "🧒🍽️💥",
        "label": "浪费粮食"
      }
    ],
    "answer": "enough",
    "success": "丰衣足食，吃穿都不愁。Have enough!",
    "completion": "你理解了 丰衣足食 (enough)",
    "sceneReward": "👗🍽️ 丰衣足食"
  },
  {
    "id": "level-74",
    "number": 74,
    "worldId": "food-island",
    "title": "粗茶淡饭",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是粗茶淡饭",
    "prompt": "粗茶淡饭。Simple food!",
    "words": [
      "粗茶淡饭",
      "simple"
    ],
    "options": [
      {
        "id": "fancy",
        "emoji": "🧒🦞🍰🍷",
        "label": "豪华大餐"
      },
      {
        "id": "simple",
        "emoji": "🧒🍵🍚😊",
        "label": "简单饭菜也满足"
      },
      {
        "id": "no",
        "emoji": "🧒😰",
        "label": "没有饭吃"
      }
    ],
    "answer": "simple",
    "success": "粗茶淡饭，简单朴素。Simple food!",
    "completion": "你理解了 粗茶淡饭 (simple)",
    "sceneReward": "🍵 清茶淡饭"
  },
  {
    "id": "level-75",
    "number": 75,
    "worldId": "food-island",
    "title": "饮水思源",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是饮水思源",
    "prompt": "饮水思源。Remember the source!",
    "words": [
      "饮水思源",
      "grateful"
    ],
    "options": [
      {
        "id": "forget",
        "emoji": "🧒💧🤷",
        "label": "喝水忘了水源"
      },
      {
        "id": "grateful",
        "emoji": "🧒💧🙏✨",
        "label": "喝水不忘来源"
      },
      {
        "id": "waste",
        "emoji": "🧒💧💥",
        "label": "浪费水"
      }
    ],
    "answer": "grateful",
    "success": "饮水思源，不忘本。Be grateful!",
    "completion": "你理解了 饮水思源 (grateful)",
    "sceneReward": "💧 感恩水滴"
  },
  {
    "id": "level-76",
    "number": 76,
    "worldId": "food-island",
    "title": "粒粒皆辛苦",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是粒粒皆辛苦",
    "prompt": "粒粒皆辛苦。Every grain is hard work!",
    "words": [
      "粒粒皆辛苦",
      "hard work"
    ],
    "options": [
      {
        "id": "waste",
        "emoji": "🧒🍚💥",
        "label": "浪费粮食"
      },
      {
        "id": "cherish",
        "emoji": "🧒🌾🍚🙏",
        "label": "珍惜每一粒米"
      },
      {
        "id": "pick",
        "emoji": "🧒🍚❌",
        "label": "挑食不吃"
      }
    ],
    "answer": "cherish",
    "success": "粒粒皆辛苦，珍惜粮食。Every grain is hard work!",
    "completion": "你理解了 粒粒皆辛苦 (hard work)",
    "sceneReward": "🌾 珍惜粮食"
  },
  {
    "id": "level-77",
    "number": 77,
    "worldId": "food-island",
    "title": "甜言蜜语",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是甜言蜜语？(英文关键词：sweet words)",
    "prompt": "甜言蜜语。Sweet words!",
    "words": [
      "甜言蜜语",
      "sweet words"
    ],
    "options": [
      {
        "id": "honest",
        "emoji": "🧒💬✅",
        "label": "说实话 honest"
      },
      {
        "id": "sweet",
        "emoji": "🧒🍬💬😏",
        "label": "甜言蜜语 sweet words"
      },
      {
        "id": "mean",
        "emoji": "🧒😡💬",
        "label": "说坏话"
      }
    ],
    "answer": "sweet",
    "success": "甜言蜜语，好听但不一定真心。Sweet words!",
    "completion": "你理解了 甜言蜜语 (sweet words)",
    "sceneReward": "🍬 甜蜜语言"
  },
  {
    "id": "level-78",
    "number": 78,
    "worldId": "food-island",
    "title": "苦尽甘来",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是苦尽甘来",
    "prompt": "苦尽甘来。After hardship comes happiness!",
    "words": [
      "苦尽甘来",
      "sweet after bitter"
    ],
    "options": [
      {
        "id": "bitter",
        "emoji": "🧒😰➡️😰",
        "label": "一直苦"
      },
      {
        "id": "sweet",
        "emoji": "🧒😰➡️😊✨",
        "label": "先苦后甜"
      },
      {
        "id": "easy",
        "emoji": "🧒😊➡️😊",
        "label": "一直轻松"
      }
    ],
    "answer": "sweet",
    "success": "苦尽甘来，苦完后甜就来了。Sweet after bitter!",
    "completion": "你理解了 苦尽甘来 (sweet after bitter)",
    "sceneReward": "🌈 苦尽甘来"
  },
  {
    "id": "level-79",
    "number": 79,
    "worldId": "food-island",
    "title": "五谷丰登",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是五谷丰登？(英文关键词：harvest)",
    "prompt": "五谷丰登。Good harvest!",
    "words": [
      "五谷丰登",
      "harvest"
    ],
    "options": [
      {
        "id": "dry",
        "emoji": "🏜️🌾😰",
        "label": "干旱歉收"
      },
      {
        "id": "harvest",
        "emoji": "🌾🌽🍚🍎✨",
        "label": "丰收五谷丰登"
      },
      {
        "id": "plant",
        "emoji": "🌱🧒",
        "label": "刚播种"
      }
    ],
    "answer": "harvest",
    "success": "五谷丰登，粮食大丰收。Good harvest!",
    "completion": "你理解了 五谷丰登 (harvest)",
    "sceneReward": "🌾 丰收节"
  },
  {
    "id": "level-80",
    "number": 80,
    "worldId": "food-island",
    "title": "美食成语大挑战",
    "skill": "四项成语综合",
    "type": "boss",
    "instruction": "完成四项成语任务",
    "prompt": "美食成语大闯关！",
    "words": [
      "津津有味",
      "狼吞虎咽",
      "饮水思源",
      "苦尽甘来"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "哪个是 津津有味",
        "prompt": "津津有味",
        "answer": "enjoy",
        "options": [
          {
            "id": "hate",
            "emoji": "😖🥦",
            "label": "不喜欢"
          },
          {
            "id": "enjoy",
            "emoji": "😋🍕",
            "label": "津津有味 delicious"
          },
          {
            "id": "full",
            "emoji": "🥵",
            "label": "吃饱了"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 狼吞虎咽",
        "prompt": "狼吞虎咽",
        "answer": "fast",
        "options": [
          {
            "id": "slow",
            "emoji": "🍽️😊",
            "label": "慢慢吃"
          },
          {
            "id": "fast",
            "emoji": "🍽️💨",
            "label": "狼吞虎咽 fast"
          },
          {
            "id": "small",
            "emoji": "🥄",
            "label": "小口吃"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 饮水思源",
        "prompt": "饮水思源",
        "answer": "grateful",
        "options": [
          {
            "id": "forget",
            "emoji": "💧🤷",
            "label": "忘了来源"
          },
          {
            "id": "grateful",
            "emoji": "💧🙏",
            "label": "饮水思源 grateful"
          },
          {
            "id": "waste",
            "emoji": "💧💥",
            "label": "浪费"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 苦尽甘来",
        "prompt": "苦尽甘来",
        "answer": "sweet",
        "options": [
          {
            "id": "bitter",
            "emoji": "😰➡️😰",
            "label": "一直苦"
          },
          {
            "id": "sweet",
            "emoji": "😰➡️😊",
            "label": "苦尽甘来"
          },
          {
            "id": "easy",
            "emoji": "😊➡️😊",
            "label": "一直轻松"
          }
        ]
      }
    ],
    "success": "太棒了！美食成语全部通关！",
    "completion": "你掌握了美食成语四题",
    "completionTitle": "美食成语通关！",
    "sceneReward": "🏆 美食成语勋章"
  },
  {
    "id": "level-81",
    "number": 81,
    "worldId": "feeling-island",
    "title": "找到开心",
    "skill": "听音选情感",
    "type": "choice",
    "instruction": "听到口令后，选择正确的表情",
    "prompt": "Find happy.",
    "words": [
      "happy"
    ],
    "options": [
      {
        "id": "sad",
        "emoji": "😢",
        "label": "sad"
      },
      {
        "id": "happy",
        "emoji": "😄",
        "label": "happy"
      },
      {
        "id": "angry",
        "emoji": "😡",
        "label": "angry"
      }
    ],
    "answer": "happy",
    "success": "Yes! Happy! 😄",
    "completion": "你听懂了 happy",
    "sceneReward": "😄 开心出现了"
  },
  {
    "id": "level-82",
    "number": 82,
    "worldId": "feeling-island",
    "title": "找到难过",
    "skill": "听音选情感",
    "type": "choice",
    "instruction": "听到口令后，选择正确的表情",
    "prompt": "Find sad.",
    "words": [
      "sad"
    ],
    "options": [
      {
        "id": "happy",
        "emoji": "😄",
        "label": "happy"
      },
      {
        "id": "sad",
        "emoji": "😢",
        "label": "sad"
      },
      {
        "id": "tired",
        "emoji": "🥱",
        "label": "tired"
      }
    ],
    "answer": "sad",
    "success": "Yes! Sad! 😢",
    "completion": "你听懂了 sad",
    "sceneReward": "😢 难过出现了"
  },
  {
    "id": "level-83",
    "number": 83,
    "worldId": "feeling-island",
    "title": "找到生气",
    "skill": "听音选情感",
    "type": "choice",
    "instruction": "听到口令后，选择正确的表情",
    "prompt": "Find angry.",
    "words": [
      "angry"
    ],
    "options": [
      {
        "id": "happy",
        "emoji": "😄",
        "label": "happy"
      },
      {
        "id": "scared",
        "emoji": "😨",
        "label": "scared"
      },
      {
        "id": "angry",
        "emoji": "😡",
        "label": "angry"
      }
    ],
    "answer": "angry",
    "success": "Yes! Angry! 😡",
    "completion": "你听懂了 angry",
    "sceneReward": "😡 生气出现了"
  },
  {
    "id": "level-84",
    "number": 84,
    "worldId": "feeling-island",
    "title": "找到害怕",
    "skill": "听音选情感",
    "type": "choice",
    "instruction": "听到口令后，选择正确的表情",
    "prompt": "Find scared.",
    "words": [
      "scared"
    ],
    "options": [
      {
        "id": "angry",
        "emoji": "😡",
        "label": "angry"
      },
      {
        "id": "scared",
        "emoji": "😨",
        "label": "scared"
      },
      {
        "id": "happy",
        "emoji": "😄",
        "label": "happy"
      }
    ],
    "answer": "scared",
    "success": "Yes! Scared! 😨",
    "completion": "你听懂了 scared",
    "sceneReward": "😨 害怕出现了"
  },
  {
    "id": "level-85",
    "number": 85,
    "worldId": "feeling-island",
    "title": "我感觉很开心",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "I feel happy.",
    "words": [
      "I feel",
      "happy"
    ],
    "options": [
      {
        "id": "sad",
        "emoji": "😢💔",
        "label": "feeling sad"
      },
      {
        "id": "happy",
        "emoji": "😄🎉",
        "label": "feeling happy"
      },
      {
        "id": "tired",
        "emoji": "🥱💤",
        "label": "feeling tired"
      }
    ],
    "answer": "happy",
    "success": "Yes! I feel happy!",
    "completion": "你听懂了 I feel happy",
    "sceneReward": "🎉 开心气球"
  },
  {
    "id": "level-86",
    "number": 86,
    "worldId": "feeling-island",
    "title": "你还好吗",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "Are you OK?",
    "words": [
      "Are you OK"
    ],
    "options": [
      {
        "id": "hello",
        "emoji": "👋😊",
        "label": "saying hello"
      },
      {
        "id": "ok",
        "emoji": "🧒😢❓💕",
        "label": "asking if OK"
      },
      {
        "id": "bye",
        "emoji": "👋",
        "label": "saying goodbye"
      }
    ],
    "answer": "ok",
    "success": "Yes! Are you OK?",
    "completion": "你听懂了 Are you OK?",
    "sceneReward": "💕 关心来了"
  },
  {
    "id": "level-87",
    "number": 87,
    "worldId": "feeling-island",
    "title": "拼出 HAPPY",
    "skill": "按顺序拼单词",
    "type": "word-forge",
    "instruction": "按听到的顺序点字母",
    "prompt": "Build happy. H. A. P. P. Y. Happy.",
    "words": [
      "happy",
      "h",
      "a",
      "p",
      "y"
    ],
    "letters": [
      "Y",
      "P",
      "A",
      "H",
      "P"
    ],
    "answer": "HAPPY",
    "success": "Yes! H. A. P. P. Y. Happy!",
    "completion": "你拼出了 HAPPY",
    "sceneReward": "😄 开心拼好了"
  },
  {
    "id": "level-88",
    "number": 88,
    "worldId": "feeling-island",
    "title": "跟读：我很累",
    "skill": "听示范并跟读",
    "type": "echo",
    "instruction": "听完示范，再说同一句话",
    "prompt": "I am tired.",
    "words": [
      "tired",
      "I am"
    ],
    "accepted": [
      "i am tired",
      "am tired",
      "tired"
    ],
    "success": "Take a rest!",
    "completion": "你说出了 I am tired",
    "sceneReward": "🛌 休息一下"
  },
  {
    "id": "level-89",
    "number": 89,
    "worldId": "feeling-island",
    "title": "找到紧张",
    "skill": "听音选情感",
    "type": "choice",
    "instruction": "听到口令后，选择正确的表情",
    "prompt": "Find nervous.",
    "words": [
      "nervous"
    ],
    "options": [
      {
        "id": "happy",
        "emoji": "😄",
        "label": "happy"
      },
      {
        "id": "nervous",
        "emoji": "😰",
        "label": "nervous"
      },
      {
        "id": "angry",
        "emoji": "😡",
        "label": "angry"
      }
    ],
    "answer": "nervous",
    "success": "Yes! Nervous! 😰",
    "completion": "你听懂了 nervous",
    "sceneReward": "😰 紧张出现了"
  },
  {
    "id": "level-90",
    "number": 90,
    "worldId": "feeling-island",
    "title": "情感岛 Boss",
    "skill": "四项综合任务",
    "type": "boss",
    "instruction": "完成四项任务，点亮情感岛",
    "prompt": "Let's save Feeling Island!",
    "words": [
      "happy",
      "sad",
      "angry",
      "scared"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "选择开心",
        "prompt": "Find happy.",
        "answer": "happy",
        "options": [
          {
            "id": "sad",
            "emoji": "😢",
            "label": "sad"
          },
          {
            "id": "happy",
            "emoji": "😄",
            "label": "happy"
          },
          {
            "id": "angry",
            "emoji": "😡",
            "label": "angry"
          }
        ]
      },
      {
        "type": "word-forge",
        "instruction": "拼出 SAD",
        "prompt": "Build sad. S. A. D.",
        "answer": "SAD",
        "letters": [
          "D",
          "A",
          "S"
        ]
      },
      {
        "type": "choice",
        "instruction": "选择害怕",
        "prompt": "Find scared.",
        "answer": "scared",
        "options": [
          {
            "id": "happy",
            "emoji": "😄",
            "label": "happy"
          },
          {
            "id": "scared",
            "emoji": "😨",
            "label": "scared"
          },
          {
            "id": "tired",
            "emoji": "🥱",
            "label": "tired"
          }
        ]
      },
      {
        "type": "echo",
        "instruction": "跟读句子",
        "prompt": "I feel happy.",
        "accepted": [
          "i feel happy",
          "feel happy",
          "happy"
        ]
      }
    ],
    "success": "Feeling Island is saved!",
    "completion": "你完成了情感岛的所有挑战",
    "completionTitle": "情感岛得救了！",
    "sceneReward": "✨ 情感岛完全修复"
  },
  {
    "id": "level-91",
    "number": 91,
    "worldId": "feeling-island",
    "title": "心花怒放",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个孩子非常开心",
    "prompt": "心花怒放。Overjoyed!",
    "words": [
      "心花怒放",
      "overjoyed"
    ],
    "options": [
      {
        "id": "angry",
        "emoji": "😡",
        "label": "生气"
      },
      {
        "id": "overjoyed",
        "emoji": "👧🌸😄",
        "label": "开心得像花开"
      },
      {
        "id": "tired",
        "emoji": "🥱",
        "label": "疲惫"
      }
    ],
    "answer": "overjoyed",
    "success": "心花怒放，心里高兴得像花儿开。Overjoyed!",
    "completion": "你理解了 心花怒放 (overjoyed)",
    "sceneReward": "🌸 心花开了"
  },
  {
    "id": "level-92",
    "number": 92,
    "worldId": "feeling-island",
    "title": "喜出望外",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是喜出望外",
    "prompt": "喜出望外。Pleasant surprise!",
    "words": [
      "喜出望外",
      "surprise"
    ],
    "options": [
      {
        "id": "expect",
        "emoji": "🧒🎁😊",
        "label": "收到期待的礼物"
      },
      {
        "id": "surprise",
        "emoji": "🧒🎁✨😲",
        "label": "意外惊喜太开心"
      },
      {
        "id": "disappoint",
        "emoji": "🧒📦😰",
        "label": "失望"
      }
    ],
    "answer": "surprise",
    "success": "喜出望外，意外的惊喜。Surprise!",
    "completion": "你理解了 喜出望外 (surprise)",
    "sceneReward": "✨ 惊喜星"
  },
  {
    "id": "level-93",
    "number": 93,
    "worldId": "feeling-island",
    "title": "怒发冲冠",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是怒发冲冠",
    "prompt": "怒发冲冠。Very angry!",
    "words": [
      "怒发冲冠",
      "furious"
    ],
    "options": [
      {
        "id": "mild",
        "emoji": "🧒😤",
        "label": "有点不高兴"
      },
      {
        "id": "furious",
        "emoji": "🧒😡💨",
        "label": "气得头发竖起来"
      },
      {
        "id": "calm",
        "emoji": "🧒😌",
        "label": "很平静"
      }
    ],
    "answer": "furious",
    "success": "怒发冲冠，气极了。Furious!",
    "completion": "你理解了 怒发冲冠 (furious)",
    "sceneReward": "😡 愤怒火山"
  },
  {
    "id": "level-94",
    "number": 94,
    "worldId": "feeling-island",
    "title": "胆小如鼠",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是胆小如鼠",
    "prompt": "胆小如鼠。As timid as a mouse!",
    "words": [
      "胆小如鼠",
      "timid"
    ],
    "options": [
      {
        "id": "brave",
        "emoji": "🧒💪",
        "label": "勇敢"
      },
      {
        "id": "timid",
        "emoji": "🧒🐭😰",
        "label": "胆子很小"
      },
      {
        "id": "happy",
        "emoji": "🧒😊",
        "label": "开心"
      }
    ],
    "answer": "timid",
    "success": "胆小如鼠，胆子特别小。Timid!",
    "completion": "你理解了 胆小如鼠 (timid)",
    "sceneReward": "🐭 小老鼠"
  },
  {
    "id": "level-95",
    "number": 95,
    "worldId": "feeling-island",
    "title": "垂头丧气",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是垂头丧气",
    "prompt": "垂头丧气。Very discouraged!",
    "words": [
      "垂头丧气",
      "discouraged"
    ],
    "options": [
      {
        "id": "proud",
        "emoji": "🧒😊💪",
        "label": "很自豪"
      },
      {
        "id": "discouraged",
        "emoji": "🧒😔👇",
        "label": "低着头很沮丧"
      },
      {
        "id": "angry",
        "emoji": "🧒😡",
        "label": "生气"
      }
    ],
    "answer": "discouraged",
    "success": "垂头丧气，非常沮丧。Discouraged!",
    "completion": "你理解了 垂头丧气 (discouraged)",
    "sceneReward": "😔 鼓励星"
  },
  {
    "id": "level-96",
    "number": 96,
    "worldId": "feeling-island",
    "title": "欢天喜地",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是欢天喜地？(英文关键词：joyful)",
    "prompt": "欢天喜地。Joyful!",
    "words": [
      "欢天喜地",
      "joyful"
    ],
    "options": [
      {
        "id": "sad",
        "emoji": "😢💔",
        "label": "悲伤"
      },
      {
        "id": "joyful",
        "emoji": "😄🎉🎊✨",
        "label": "欢天喜地 joyful"
      },
      {
        "id": "calm",
        "emoji": "😌",
        "label": "平静"
      }
    ],
    "answer": "joyful",
    "success": "欢天喜地，非常高兴。Joyful!",
    "completion": "你理解了 欢天喜地 (joyful)",
    "sceneReward": "🎉 欢乐烟花"
  },
  {
    "id": "level-97",
    "number": 97,
    "worldId": "feeling-island",
    "title": "心惊肉跳",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是心惊肉跳",
    "prompt": "心惊肉跳。Terrified!",
    "words": [
      "心惊肉跳",
      "terrified"
    ],
    "options": [
      {
        "id": "excited",
        "emoji": "🧒😄💓",
        "label": "兴奋"
      },
      {
        "id": "terrified",
        "emoji": "🧒😨💓💨",
        "label": "害怕得心跳加速"
      },
      {
        "id": "bored",
        "emoji": "🧒🥱",
        "label": "无聊"
      }
    ],
    "answer": "terrified",
    "success": "心惊肉跳，害怕得心砰砰跳。Terrified!",
    "completion": "你理解了 心惊肉跳 (terrified)",
    "sceneReward": "💓 心跳星"
  },
  {
    "id": "level-98",
    "number": 98,
    "worldId": "feeling-island",
    "title": "笑容可掬",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是笑容可掬？(英文关键词：beaming)",
    "prompt": "笑容可掬。Beaming with smiles!",
    "words": [
      "笑容可掬",
      "beaming"
    ],
    "options": [
      {
        "id": "frown",
        "emoji": "😟",
        "label": "皱眉"
      },
      {
        "id": "beaming",
        "emoji": "😊🤗✨",
        "label": "笑容可掬 beaming"
      },
      {
        "id": "cry",
        "emoji": "😭",
        "label": "哭泣"
      }
    ],
    "answer": "beaming",
    "success": "笑容可掬，笑得满脸都是。Beaming!",
    "completion": "你理解了 笑容可掬 (beaming)",
    "sceneReward": "😊 笑容星"
  },
  {
    "id": "level-99",
    "number": 99,
    "worldId": "feeling-island",
    "title": "愁眉苦脸",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是愁眉苦脸",
    "prompt": "愁眉苦脸。Worried and sad!",
    "words": [
      "愁眉苦脸",
      "worried"
    ],
    "options": [
      {
        "id": "happy",
        "emoji": "😄",
        "label": "开心"
      },
      {
        "id": "worried",
        "emoji": "😟😢😖",
        "label": "皱着眉头苦着脸"
      },
      {
        "id": "think",
        "emoji": "🤔",
        "label": "思考"
      }
    ],
    "answer": "worried",
    "success": "愁眉苦脸，愁眉不展。Worried!",
    "completion": "你理解了 愁眉苦脸 (worried)",
    "sceneReward": "🌈 别愁了"
  },
  {
    "id": "level-100",
    "number": 100,
    "worldId": "feeling-island",
    "title": "情感成语大挑战",
    "skill": "四项成语综合",
    "type": "boss",
    "instruction": "完成四项成语任务",
    "prompt": "情感成语大闯关！",
    "words": [
      "心花怒放",
      "喜出望外",
      "垂头丧气",
      "欢天喜地"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "哪个是 心花怒放",
        "prompt": "心花怒放",
        "answer": "overjoyed",
        "options": [
          {
            "id": "angry",
            "emoji": "😡",
            "label": "生气"
          },
          {
            "id": "overjoyed",
            "emoji": "🌸😄",
            "label": "心花怒放 overjoyed"
          },
          {
            "id": "tired",
            "emoji": "🥱",
            "label": "疲惫"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 喜出望外",
        "prompt": "喜出望外",
        "answer": "surprise",
        "options": [
          {
            "id": "expect",
            "emoji": "🎁😊",
            "label": "期待"
          },
          {
            "id": "surprise",
            "emoji": "🎁✨😲",
            "label": "喜出望外 surprise"
          },
          {
            "id": "sad",
            "emoji": "📦😰",
            "label": "失望"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 垂头丧气",
        "prompt": "垂头丧气",
        "answer": "discouraged",
        "options": [
          {
            "id": "proud",
            "emoji": "😊💪",
            "label": "自豪"
          },
          {
            "id": "discouraged",
            "emoji": "😔👇",
            "label": "垂头丧气"
          },
          {
            "id": "angry2",
            "emoji": "😡",
            "label": "生气"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 欢天喜地",
        "prompt": "欢天喜地",
        "answer": "joyful",
        "options": [
          {
            "id": "sad2",
            "emoji": "😢",
            "label": "悲伤"
          },
          {
            "id": "joyful",
            "emoji": "😄🎉",
            "label": "欢天喜地 joyful"
          },
          {
            "id": "calm",
            "emoji": "😌",
            "label": "平静"
          }
        ]
      }
    ],
    "success": "太棒了！情感成语全部通关！",
    "completion": "你掌握了情感成语四题",
    "completionTitle": "情感成语通关！",
    "sceneReward": "🏆 情感成语勋章"
  },
  {
    "id": "level-101",
    "number": 101,
    "worldId": "nature-island",
    "title": "找到太阳",
    "skill": "听单词选自然",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the sun.",
    "words": [
      "sun"
    ],
    "options": [
      {
        "id": "moon",
        "emoji": "🌙",
        "label": "moon"
      },
      {
        "id": "sun",
        "emoji": "☀️",
        "label": "sun"
      },
      {
        "id": "star",
        "emoji": "⭐",
        "label": "star"
      }
    ],
    "answer": "sun",
    "success": "Yes! Sun! ☀️",
    "completion": "你听懂了 sun",
    "sceneReward": "☀️ 太阳出现了"
  },
  {
    "id": "level-102",
    "number": 102,
    "worldId": "nature-island",
    "title": "找到月亮",
    "skill": "听单词选自然",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the moon.",
    "words": [
      "moon"
    ],
    "options": [
      {
        "id": "sun",
        "emoji": "☀️",
        "label": "sun"
      },
      {
        "id": "cloud",
        "emoji": "☁️",
        "label": "cloud"
      },
      {
        "id": "moon",
        "emoji": "🌙",
        "label": "moon"
      }
    ],
    "answer": "moon",
    "success": "Yes! Moon! 🌙",
    "completion": "你听懂了 moon",
    "sceneReward": "🌙 月亮出现了"
  },
  {
    "id": "level-103",
    "number": 103,
    "worldId": "nature-island",
    "title": "找到花",
    "skill": "听单词选自然",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the flower.",
    "words": [
      "flower"
    ],
    "options": [
      {
        "id": "tree",
        "emoji": "🌳",
        "label": "tree"
      },
      {
        "id": "flower",
        "emoji": "🌸",
        "label": "flower"
      },
      {
        "id": "rain",
        "emoji": "🌧️",
        "label": "rain"
      }
    ],
    "answer": "flower",
    "success": "Yes! Flower! 🌸",
    "completion": "你听懂了 flower",
    "sceneReward": "🌸 花儿出现了"
  },
  {
    "id": "level-104",
    "number": 104,
    "worldId": "nature-island",
    "title": "找到树",
    "skill": "听单词选自然",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the tree.",
    "words": [
      "tree"
    ],
    "options": [
      {
        "id": "flower",
        "emoji": "🌸",
        "label": "flower"
      },
      {
        "id": "cloud",
        "emoji": "☁️",
        "label": "cloud"
      },
      {
        "id": "tree",
        "emoji": "🌳",
        "label": "tree"
      }
    ],
    "answer": "tree",
    "success": "Yes! Tree! 🌳",
    "completion": "你听懂了 tree",
    "sceneReward": "🌳 大树出现"
  },
  {
    "id": "level-105",
    "number": 105,
    "worldId": "nature-island",
    "title": "下雨了",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "It is raining.",
    "words": [
      "raining",
      "it is"
    ],
    "options": [
      {
        "id": "sunny",
        "emoji": "☀️😊",
        "label": "sunny day"
      },
      {
        "id": "rainy",
        "emoji": "🌧️☔",
        "label": "raining"
      },
      {
        "id": "snowy",
        "emoji": "❄️☃️",
        "label": "snowing"
      }
    ],
    "answer": "rainy",
    "success": "Yes! It is raining!",
    "completion": "你听懂了 It is raining",
    "sceneReward": "🌧️ 下雨了"
  },
  {
    "id": "level-106",
    "number": 106,
    "worldId": "nature-island",
    "title": "天气怎么样",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "What's the weather like?",
    "words": [
      "weather",
      "what's the"
    ],
    "options": [
      {
        "id": "ask",
        "emoji": "🧒☁️❓",
        "label": "asking about weather"
      },
      {
        "id": "time",
        "emoji": "🧒⏰❓",
        "label": "asking about time"
      },
      {
        "id": "food",
        "emoji": "🧒🍕❓",
        "label": "asking about food"
      }
    ],
    "answer": "ask",
    "success": "Yes! What's the weather like?",
    "completion": "你听懂了 What's the weather like?",
    "sceneReward": "🌤️ 天气站"
  },
  {
    "id": "level-107",
    "number": 107,
    "worldId": "nature-island",
    "title": "拼出 RAIN",
    "skill": "按顺序拼单词",
    "type": "word-forge",
    "instruction": "按听到的顺序点字母",
    "prompt": "Build rain. R. A. I. N. Rain.",
    "words": [
      "rain",
      "r",
      "a",
      "i",
      "n"
    ],
    "letters": [
      "I",
      "N",
      "A",
      "R"
    ],
    "answer": "RAIN",
    "success": "Yes! R. A. I. N. Rain!",
    "completion": "你拼出了 RAIN",
    "sceneReward": "🌧️ 雨拼好了"
  },
  {
    "id": "level-108",
    "number": 108,
    "worldId": "nature-island",
    "title": "跟读：天在下雪",
    "skill": "听示范并跟读",
    "type": "echo",
    "instruction": "听完示范，再说同一句话",
    "prompt": "It is snowing.",
    "words": [
      "snowing",
      "it is"
    ],
    "accepted": [
      "it is snowing",
      "is snowing",
      "snowing"
    ],
    "success": "Let's make a snowman!",
    "completion": "你说出了 It is snowing",
    "sceneReward": "☃️ 雪人出现了"
  },
  {
    "id": "level-109",
    "number": 109,
    "worldId": "nature-island",
    "title": "找到云",
    "skill": "听单词选自然",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the cloud.",
    "words": [
      "cloud"
    ],
    "options": [
      {
        "id": "sun",
        "emoji": "☀️",
        "label": "sun"
      },
      {
        "id": "rain",
        "emoji": "🌧️",
        "label": "rain"
      },
      {
        "id": "cloud",
        "emoji": "☁️",
        "label": "cloud"
      }
    ],
    "answer": "cloud",
    "success": "Yes! Cloud! ☁️",
    "completion": "你听懂了 cloud",
    "sceneReward": "☁️ 云朵出现了"
  },
  {
    "id": "level-110",
    "number": 110,
    "worldId": "nature-island",
    "title": "自然岛 Boss",
    "skill": "四项综合任务",
    "type": "boss",
    "instruction": "完成四项任务，点亮自然岛",
    "prompt": "Let's save Nature Island!",
    "words": [
      "sun",
      "rain",
      "flower",
      "tree"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "选择太阳",
        "prompt": "Find the sun.",
        "answer": "sun",
        "options": [
          {
            "id": "moon",
            "emoji": "🌙",
            "label": "moon"
          },
          {
            "id": "sun",
            "emoji": "☀️",
            "label": "sun"
          },
          {
            "id": "star",
            "emoji": "⭐",
            "label": "star"
          }
        ]
      },
      {
        "type": "word-forge",
        "instruction": "拼出 TREE",
        "prompt": "Build tree. T. R. E. E.",
        "answer": "TREE",
        "letters": [
          "E",
          "R",
          "T",
          "E"
        ]
      },
      {
        "type": "choice",
        "instruction": "选择花",
        "prompt": "Find the flower.",
        "answer": "flower",
        "options": [
          {
            "id": "tree",
            "emoji": "🌳",
            "label": "tree"
          },
          {
            "id": "flower",
            "emoji": "🌸",
            "label": "flower"
          },
          {
            "id": "cloud",
            "emoji": "☁️",
            "label": "cloud"
          }
        ]
      },
      {
        "type": "echo",
        "instruction": "跟读句子",
        "prompt": "It is raining.",
        "accepted": [
          "it is raining",
          "is raining",
          "raining"
        ]
      }
    ],
    "success": "Nature Island is saved!",
    "completion": "你完成了自然岛的所有挑战",
    "completionTitle": "自然岛得救了！",
    "sceneReward": "✨ 自然岛完全修复"
  },
  {
    "id": "level-111",
    "number": 111,
    "worldId": "nature-island",
    "title": "风和日丽",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是风和日丽",
    "prompt": "风和日丽。Fine and warm!",
    "words": [
      "风和日丽",
      "fine"
    ],
    "options": [
      {
        "id": "storm",
        "emoji": "⛈️💨😰",
        "label": "狂风暴雨"
      },
      {
        "id": "fine",
        "emoji": "☀️🍃😊",
        "label": "风和日丽天气好"
      },
      {
        "id": "cold",
        "emoji": "❄️🥶",
        "label": "天寒地冻"
      }
    ],
    "answer": "fine",
    "success": "风和日丽，天气晴朗和暖。Fine and warm!",
    "completion": "你理解了 風和日丽 (fine)",
    "sceneReward": "☀️ 好天气"
  },
  {
    "id": "level-112",
    "number": 112,
    "worldId": "nature-island",
    "title": "雨过天晴",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是雨过天晴",
    "prompt": "雨过天晴。Sun after rain!",
    "words": [
      "雨过天晴",
      "clear after rain"
    ],
    "options": [
      {
        "id": "rain",
        "emoji": "🌧️☁️",
        "label": "一直下雨"
      },
      {
        "id": "clear",
        "emoji": "🌧️➡️☀️🌈",
        "label": "雨后出太阳"
      },
      {
        "id": "dry",
        "emoji": "☀️🏜️",
        "label": "一直干旱"
      }
    ],
    "answer": "clear",
    "success": "雨过天晴，雨后天气放晴。Sun after rain!",
    "completion": "你理解了 雨过天晴 (clear after rain)",
    "sceneReward": "🌈 彩虹出现"
  },
  {
    "id": "level-113",
    "number": 113,
    "worldId": "nature-island",
    "title": "鸟语花香",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是鸟语花香",
    "prompt": "鸟语花香。Birds sing, flowers bloom!",
    "words": [
      "鸟语花香",
      "spring"
    ],
    "options": [
      {
        "id": "winter",
        "emoji": "❄️🌨️",
        "label": "冬天"
      },
      {
        "id": "spring",
        "emoji": "🐦🌸🌳✨",
        "label": "春天花园鸟语花香"
      },
      {
        "id": "desert",
        "emoji": "🏜️☀️",
        "label": "沙漠"
      }
    ],
    "answer": "spring",
    "success": "鸟语花香，春天生机勃勃。Birds sing, flowers bloom!",
    "completion": "你理解了 鸟语花香 (spring)",
    "sceneReward": "🌸 花园盛开"
  },
  {
    "id": "level-114",
    "number": 114,
    "worldId": "nature-island",
    "title": "山清水秀",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是山清水秀",
    "prompt": "山清水秀。Beautiful scenery!",
    "words": [
      "山清水秀",
      "scenery"
    ],
    "options": [
      {
        "id": "polluted",
        "emoji": "🏭🌫️",
        "label": "污染"
      },
      {
        "id": "beautiful",
        "emoji": "🏔️💧🌲✨",
        "label": "青山绿水"
      },
      {
        "id": "dry",
        "emoji": "🏜️🌵",
        "label": "干旱"
      }
    ],
    "answer": "beautiful",
    "success": "山清水秀，风景优美。Beautiful scenery!",
    "completion": "你理解了 山清水秀 (scenery)",
    "sceneReward": "🏔️ 山水美景"
  },
  {
    "id": "level-115",
    "number": 115,
    "worldId": "nature-island",
    "title": "万紫千红",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是万紫千红",
    "prompt": "万紫千红。Colorful flowers everywhere!",
    "words": [
      "万紫千红",
      "colorful"
    ],
    "options": [
      {
        "id": "wilt",
        "emoji": "🥀🍂",
        "label": "花都枯萎了"
      },
      {
        "id": "colorful",
        "emoji": "🌸🌺🌻🌷💐",
        "label": "百花盛开万紫千红"
      },
      {
        "id": "one",
        "emoji": "🌸",
        "label": "只有一朵花"
      }
    ],
    "answer": "colorful",
    "success": "万紫千红，花色繁多。Colorful!",
    "completion": "你理解了 万紫千红 (colorful)",
    "sceneReward": "💐 百花齐放"
  },
  {
    "id": "level-116",
    "number": 116,
    "worldId": "nature-island",
    "title": "春暖花开",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是春暖花开？(英文关键词：spring blooms)",
    "prompt": "春暖花开。Spring blooms!",
    "words": [
      "春暖花开",
      "spring blooms"
    ],
    "options": [
      {
        "id": "snow",
        "emoji": "❄️☃️",
        "label": "下雪"
      },
      {
        "id": "spring",
        "emoji": "🌷🌱🐝✨",
        "label": "春暖花开 spring"
      },
      {
        "id": "autumn",
        "emoji": "🍂🍁",
        "label": "秋天"
      }
    ],
    "answer": "spring",
    "success": "春暖花开，春天温暖花开。Spring blooms!",
    "completion": "你理解了 春暖花开 (spring blooms)",
    "sceneReward": "🌷 春天来了"
  },
  {
    "id": "level-117",
    "number": 117,
    "worldId": "nature-island",
    "title": "秋高气爽",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是秋高气爽",
    "prompt": "秋高气爽。Crisp autumn weather!",
    "words": [
      "秋高气爽",
      "autumn"
    ],
    "options": [
      {
        "id": "humid",
        "emoji": "🥵💧",
        "label": "闷热潮湿"
      },
      {
        "id": "autumn",
        "emoji": "🍂🍁🌤️😊",
        "label": "秋高气爽天晴朗"
      },
      {
        "id": "rainy",
        "emoji": "🌧️",
        "label": "下雨天"
      }
    ],
    "answer": "autumn",
    "success": "秋高气爽，秋天天气清爽。Crisp autumn!",
    "completion": "你理解了 秋高气爽 (autumn)",
    "sceneReward": "🍁 秋天美景"
  },
  {
    "id": "level-118",
    "number": 118,
    "worldId": "nature-island",
    "title": "冰天雪地",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是冰天雪地？(英文关键词：freezing)",
    "prompt": "冰天雪地。Freezing cold!",
    "words": [
      "冰天雪地",
      "freezing"
    ],
    "options": [
      {
        "id": "warm",
        "emoji": "☀️🏖️",
        "label": "温暖"
      },
      {
        "id": "freezing",
        "emoji": "❄️🏔️🥶",
        "label": "冰天雪地 freezing"
      },
      {
        "id": "rainy",
        "emoji": "🌧️",
        "label": "下雨"
      }
    ],
    "answer": "freezing",
    "success": "冰天雪地，到处是冰和雪。Freezing!",
    "completion": "你理解了 冰天雪地 (freezing)",
    "sceneReward": "❄️ 冰雪世界"
  },
  {
    "id": "level-119",
    "number": 119,
    "worldId": "nature-island",
    "title": "云淡风轻",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是云淡风轻",
    "prompt": "云淡风轻。Light clouds and gentle breeze!",
    "words": [
      "云淡风轻",
      "gentle"
    ],
    "options": [
      {
        "id": "storm",
        "emoji": "⛈️💨",
        "label": "狂风暴雨"
      },
      {
        "id": "gentle",
        "emoji": "☁️🍃😊",
        "label": "云淡风轻好天气"
      },
      {
        "id": "dark",
        "emoji": "🌑💨",
        "label": "乌云密布"
      }
    ],
    "answer": "gentle",
    "success": "云淡风轻，天气温和晴朗。Gentle breeze!",
    "completion": "你理解了 云淡风轻 (gentle)",
    "sceneReward": "🍃 微风拂面"
  },
  {
    "id": "level-120",
    "number": 120,
    "worldId": "nature-island",
    "title": "自然成语大挑战",
    "skill": "四项成语综合",
    "type": "boss",
    "instruction": "完成四项成语任务",
    "prompt": "自然成语大闯关！",
    "words": [
      "风和日丽",
      "雨过天晴",
      "鸟语花香",
      "春暖花开"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "哪个是 风和日丽",
        "prompt": "风和日丽",
        "answer": "fine",
        "options": [
          {
            "id": "storm",
            "emoji": "⛈️",
            "label": "暴风雨"
          },
          {
            "id": "fine",
            "emoji": "☀️🍃",
            "label": "风和日丽 fine"
          },
          {
            "id": "cold",
            "emoji": "❄️",
            "label": "天寒地冻"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 雨过天晴",
        "prompt": "雨过天晴",
        "answer": "clear",
        "options": [
          {
            "id": "rain",
            "emoji": "🌧️",
            "label": "一直下雨"
          },
          {
            "id": "clear",
            "emoji": "🌧️➡️☀️",
            "label": "雨过天晴"
          },
          {
            "id": "dry",
            "emoji": "🏜️",
            "label": "干旱"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 鸟语花香",
        "prompt": "鸟语花香",
        "answer": "spring",
        "options": [
          {
            "id": "winter",
            "emoji": "❄️",
            "label": "冬天"
          },
          {
            "id": "spring",
            "emoji": "🐦🌸",
            "label": "鸟语花香 spring"
          },
          {
            "id": "desert",
            "emoji": "🏜️",
            "label": "沙漠"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 春暖花开",
        "prompt": "春暖花开",
        "answer": "spring2",
        "options": [
          {
            "id": "snow",
            "emoji": "❄️",
            "label": "下雪"
          },
          {
            "id": "spring2",
            "emoji": "🌷🌱",
            "label": "春暖花开"
          },
          {
            "id": "autumn",
            "emoji": "🍂",
            "label": "秋天"
          }
        ]
      }
    ],
    "success": "太棒了！自然成语全部通关！",
    "completion": "你掌握了自然成语四题",
    "completionTitle": "自然成语通关！",
    "sceneReward": "🏆 自然成语勋章"
  },
  {
    "id": "level-121",
    "number": 121,
    "worldId": "family-island",
    "title": "找到妈妈",
    "skill": "听单词选家人",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find mom.",
    "words": [
      "mom"
    ],
    "options": [
      {
        "id": "dad",
        "emoji": "👨",
        "label": "dad"
      },
      {
        "id": "mom",
        "emoji": "👩",
        "label": "mom"
      },
      {
        "id": "baby",
        "emoji": "👶",
        "label": "baby"
      }
    ],
    "answer": "mom",
    "success": "Yes! Mom! 👩",
    "completion": "你听懂了 mom",
    "sceneReward": "👩 妈妈出现了"
  },
  {
    "id": "level-122",
    "number": 122,
    "worldId": "family-island",
    "title": "找到爸爸",
    "skill": "听单词选家人",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find dad.",
    "words": [
      "dad"
    ],
    "options": [
      {
        "id": "mom",
        "emoji": "👩",
        "label": "mom"
      },
      {
        "id": "brother",
        "emoji": "👦",
        "label": "brother"
      },
      {
        "id": "dad",
        "emoji": "👨",
        "label": "dad"
      }
    ],
    "answer": "dad",
    "success": "Yes! Dad! 👨",
    "completion": "你听懂了 dad",
    "sceneReward": "👨 爸爸出现了"
  },
  {
    "id": "level-123",
    "number": 123,
    "worldId": "family-island",
    "title": "找到姐姐",
    "skill": "听单词选家人",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find sister.",
    "words": [
      "sister"
    ],
    "options": [
      {
        "id": "brother",
        "emoji": "👦",
        "label": "brother"
      },
      {
        "id": "sister",
        "emoji": "👧",
        "label": "sister"
      },
      {
        "id": "baby",
        "emoji": "👶",
        "label": "baby"
      }
    ],
    "answer": "sister",
    "success": "Yes! Sister! 👧",
    "completion": "你听懂了 sister",
    "sceneReward": "👧 姐姐出现了"
  },
  {
    "id": "level-124",
    "number": 124,
    "worldId": "family-island",
    "title": "找到弟弟",
    "skill": "听单词选家人",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find brother.",
    "words": [
      "brother"
    ],
    "options": [
      {
        "id": "sister",
        "emoji": "👧",
        "label": "sister"
      },
      {
        "id": "dad",
        "emoji": "👨",
        "label": "dad"
      },
      {
        "id": "brother",
        "emoji": "👦",
        "label": "brother"
      }
    ],
    "answer": "brother",
    "success": "Yes! Brother! 👦",
    "completion": "你听懂了 brother",
    "sceneReward": "👦 弟弟出现了"
  },
  {
    "id": "level-125",
    "number": 125,
    "worldId": "family-island",
    "title": "这是我妈妈",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "This is my mom.",
    "words": [
      "This is my",
      "mom"
    ],
    "options": [
      {
        "id": "dad",
        "emoji": "🧒👨➡️",
        "label": "introducing dad"
      },
      {
        "id": "mom",
        "emoji": "🧒👩➡️",
        "label": "introducing mom"
      },
      {
        "id": "dog",
        "emoji": "🧒🐶➡️",
        "label": "introducing dog"
      }
    ],
    "answer": "mom",
    "success": "Yes! This is my mom!",
    "completion": "你听懂了 This is my mom",
    "sceneReward": "👩‍👧 母女出现"
  },
  {
    "id": "level-126",
    "number": 126,
    "worldId": "family-island",
    "title": "我爱我的家",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "I love my family.",
    "words": [
      "I love",
      "family"
    ],
    "options": [
      {
        "id": "alone",
        "emoji": "🧒🏠😢",
        "label": "alone at home"
      },
      {
        "id": "love",
        "emoji": "👨‍👩‍👧‍👦❤️✨",
        "label": "loving family"
      },
      {
        "id": "sad",
        "emoji": "👨‍👩‍👧‍👦😢",
        "label": "family arguing"
      }
    ],
    "answer": "love",
    "success": "Yes! I love my family!",
    "completion": "你听懂了 I love my family",
    "sceneReward": "❤️ 爱心满溢"
  },
  {
    "id": "level-127",
    "number": 127,
    "worldId": "family-island",
    "title": "拼出 HOME",
    "skill": "按顺序拼单词",
    "type": "word-forge",
    "instruction": "按听到的顺序点字母",
    "prompt": "Build home. H. O. M. E. Home.",
    "words": [
      "home",
      "h",
      "o",
      "m",
      "e"
    ],
    "letters": [
      "E",
      "M",
      "O",
      "H"
    ],
    "answer": "HOME",
    "success": "Yes! H. O. M. E. Home!",
    "completion": "你拼出了 HOME",
    "sceneReward": "🏠 家拼好了"
  },
  {
    "id": "level-128",
    "number": 128,
    "worldId": "family-island",
    "title": "跟读：我爱妈妈",
    "skill": "听示范并跟读",
    "type": "echo",
    "instruction": "听完示范，再说同一句话",
    "prompt": "I love Mom.",
    "words": [
      "I love",
      "Mom"
    ],
    "accepted": [
      "i love mom",
      "love mom",
      "i love"
    ],
    "success": "Mom loves you too!",
    "completion": "你说出了 I love Mom",
    "sceneReward": "💕 对妈妈的爱"
  },
  {
    "id": "level-129",
    "number": 129,
    "worldId": "family-island",
    "title": "找到宝宝",
    "skill": "听单词选家人",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the baby.",
    "words": [
      "baby"
    ],
    "options": [
      {
        "id": "mom",
        "emoji": "👩",
        "label": "mom"
      },
      {
        "id": "baby",
        "emoji": "👶",
        "label": "baby"
      },
      {
        "id": "dad",
        "emoji": "👨",
        "label": "dad"
      }
    ],
    "answer": "baby",
    "success": "Yes! Baby! 👶",
    "completion": "你听懂了 baby",
    "sceneReward": "👶 宝宝出现了"
  },
  {
    "id": "level-130",
    "number": 130,
    "worldId": "family-island",
    "title": "家庭岛 Boss",
    "skill": "四项综合任务",
    "type": "boss",
    "instruction": "完成四项任务，点亮家庭岛",
    "prompt": "Let's save Family Island!",
    "words": [
      "mom",
      "dad",
      "sister",
      "brother"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "选择妈妈",
        "prompt": "Find mom.",
        "answer": "mom",
        "options": [
          {
            "id": "dad",
            "emoji": "👨",
            "label": "dad"
          },
          {
            "id": "mom",
            "emoji": "👩",
            "label": "mom"
          },
          {
            "id": "baby",
            "emoji": "👶",
            "label": "baby"
          }
        ]
      },
      {
        "type": "word-forge",
        "instruction": "拼出 DAD",
        "prompt": "Build dad. D. A. D.",
        "answer": "DAD",
        "letters": [
          "A",
          "D",
          "D"
        ]
      },
      {
        "type": "choice",
        "instruction": "选择姐姐",
        "prompt": "Find sister.",
        "answer": "sister",
        "options": [
          {
            "id": "brother",
            "emoji": "👦",
            "label": "brother"
          },
          {
            "id": "sister",
            "emoji": "👧",
            "label": "sister"
          },
          {
            "id": "baby",
            "emoji": "👶",
            "label": "baby"
          }
        ]
      },
      {
        "type": "echo",
        "instruction": "跟读句子",
        "prompt": "I love my family.",
        "accepted": [
          "i love my family",
          "love my family",
          "my family"
        ]
      }
    ],
    "success": "Family Island is saved!",
    "completion": "你完成了家庭岛的所有挑战",
    "completionTitle": "家庭岛得救了！",
    "sceneReward": "✨ 家庭岛完全修复"
  },
  {
    "id": "level-131",
    "number": 131,
    "worldId": "family-island",
    "title": "尊老爱幼",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是尊老爱幼",
    "prompt": "尊老爱幼。Respect the old, love the young!",
    "words": [
      "尊老爱幼",
      "respect"
    ],
    "options": [
      {
        "id": "ignore",
        "emoji": "🧒👴👶❌",
        "label": "不理老人小孩"
      },
      {
        "id": "respect",
        "emoji": "🧒👴🤝👶💖",
        "label": "尊重老人爱护小孩"
      },
      {
        "id": "bully",
        "emoji": "🧒👴😤👶😰",
        "label": "欺负老人小孩"
      }
    ],
    "answer": "respect",
    "success": "尊老爱幼，尊重老人爱护小孩。Respect!",
    "completion": "你理解了 尊老爱幼 (respect)",
    "sceneReward": "🤝 尊老爱幼"
  },
  {
    "id": "level-132",
    "number": 132,
    "worldId": "family-island",
    "title": "兄友弟恭",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是兄友弟恭",
    "prompt": "兄友弟恭。Brothers love each other!",
    "words": [
      "兄友弟恭",
      "brothers"
    ],
    "options": [
      {
        "id": "fight",
        "emoji": "👦💢👦",
        "label": "兄弟打架"
      },
      {
        "id": "love",
        "emoji": "👦🤝👦😊",
        "label": "兄弟友爱"
      },
      {
        "id": "ignore",
        "emoji": "👦📱👦📱",
        "label": "各玩各的"
      }
    ],
    "answer": "love",
    "success": "兄友弟恭，兄弟友爱。Brothers love each other!",
    "completion": "你理解了 兄友弟恭 (brothers)",
    "sceneReward": "👦🤝👦 兄弟友爱"
  },
  {
    "id": "level-133",
    "number": 133,
    "worldId": "family-island",
    "title": "相亲相爱",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是相亲相爱",
    "prompt": "相亲相爱。Love each other!",
    "words": [
      "相亲相爱",
      "love"
    ],
    "options": [
      {
        "id": "argue",
        "emoji": "👨‍👩‍👧‍👦💢",
        "label": "家人吵架"
      },
      {
        "id": "love",
        "emoji": "👨‍👩‍👧‍👦💖✨",
        "label": "家人相亲相爱"
      },
      {
        "id": "away",
        "emoji": "👨‍👩‍👧‍👦✈️",
        "label": "家人分离"
      }
    ],
    "answer": "love",
    "success": "相亲相爱，互相关爱。Love each other!",
    "completion": "你理解了 相亲相爱 (love)",
    "sceneReward": "💖 爱心之家"
  },
  {
    "id": "level-134",
    "number": 134,
    "worldId": "family-island",
    "title": "血浓于水",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是血浓于水",
    "prompt": "血浓于水。Family bonds are strong!",
    "words": [
      "血浓于水",
      "family bonds"
    ],
    "options": [
      {
        "id": "stranger",
        "emoji": "🧒🤝🧒📱",
        "label": "和陌生人更亲"
      },
      {
        "id": "bonds",
        "emoji": "👨‍👩‍👧‍👦💪✨",
        "label": "家人感情最深"
      },
      {
        "id": "far",
        "emoji": "👨‍👩‍👧‍👦✈️💫",
        "label": "离家很远"
      }
    ],
    "answer": "bonds",
    "success": "血浓于水，亲情最深厚。Family bonds are strong!",
    "completion": "你理解了 血浓于水 (family bonds)",
    "sceneReward": "💪 亲情力量"
  },
  {
    "id": "level-135",
    "number": 135,
    "worldId": "family-island",
    "title": "天伦之乐",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是天伦之乐",
    "prompt": "天伦之乐。Family happiness!",
    "words": [
      "天伦之乐",
      "happiness"
    ],
    "options": [
      {
        "id": "alone",
        "emoji": "🧒🏠😢",
        "label": "独自在家"
      },
      {
        "id": "happiness",
        "emoji": "👨‍👩‍👧‍👦🎉😊",
        "label": "全家幸福快乐"
      },
      {
        "id": "work",
        "emoji": "👨💼",
        "label": "爸爸在工作"
      }
    ],
    "answer": "happiness",
    "success": "天伦之乐，家庭幸福快乐。Family happiness!",
    "completion": "你理解了 天伦之乐 (happiness)",
    "sceneReward": "🎉 天伦之乐"
  },
  {
    "id": "level-136",
    "number": 136,
    "worldId": "family-island",
    "title": "骨肉相连",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是骨肉相连？(英文关键词：close kinship)",
    "prompt": "骨肉相连。Close kinship!",
    "words": [
      "骨肉相连",
      "kinship"
    ],
    "options": [
      {
        "id": "stranger",
        "emoji": "🧒🧍",
        "label": "陌生人"
      },
      {
        "id": "kinship",
        "emoji": "👨‍👩‍👧❤️🔗",
        "label": "骨肉相连 kinship"
      },
      {
        "id": "friend",
        "emoji": "🧒🤝🧒",
        "label": "普通朋友"
      }
    ],
    "answer": "kinship",
    "success": "骨肉相连，亲人关系密切。Close kinship!",
    "completion": "你理解了 骨肉相连 (kinship)",
    "sceneReward": "🔗 亲情纽带"
  },
  {
    "id": "level-137",
    "number": 137,
    "worldId": "family-island",
    "title": "和睦相处",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是和睦相处",
    "prompt": "和睦相处。Live in harmony!",
    "words": [
      "和睦相处",
      "harmony"
    ],
    "options": [
      {
        "id": "argue",
        "emoji": "👨‍👩‍👧‍👦💢😰",
        "label": "天天吵架"
      },
      {
        "id": "harmony",
        "emoji": "👨‍👩‍👧‍👦😊✨",
        "label": "和和睦睦过日子"
      },
      {
        "id": "cold",
        "emoji": "👨‍👩‍👧‍👦🥶",
        "label": "互不理睬"
      }
    ],
    "answer": "harmony",
    "success": "和睦相处，和和气气。Live in harmony!",
    "completion": "你理解了 和睦相处 (harmony)",
    "sceneReward": "🕊️ 和睦之家"
  },
  {
    "id": "level-138",
    "number": 138,
    "worldId": "family-island",
    "title": "其乐融融",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是其乐融融？(英文关键词：joyful harmony)",
    "prompt": "其乐融融。Joyful harmony!",
    "words": [
      "其乐融融",
      "joyful"
    ],
    "options": [
      {
        "id": "tense",
        "emoji": "👨‍👩‍👧‍👦😰",
        "label": "气氛紧张"
      },
      {
        "id": "joyful",
        "emoji": "👨‍👩‍👧‍👦😊🎉✨",
        "label": "其乐融融 joyful"
      },
      {
        "id": "bored",
        "emoji": "👨‍👩‍👧‍👦🥱",
        "label": "无聊"
      }
    ],
    "answer": "joyful",
    "success": "其乐融融，快乐融洽。Joyful harmony!",
    "completion": "你理解了 其乐融融 (joyful)",
    "sceneReward": "✨ 融融快乐"
  },
  {
    "id": "level-139",
    "number": 139,
    "worldId": "family-island",
    "title": "舐犊情深",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是舐犊情深",
    "prompt": "舐犊情深。Deep parental love!",
    "words": [
      "舐犊情深",
      "parental love"
    ],
    "options": [
      {
        "id": "strict",
        "emoji": "👩😤👧",
        "label": "很严厉"
      },
      {
        "id": "love",
        "emoji": "👩🥰👧💖",
        "label": "父母深深爱孩子"
      },
      {
        "id": "ignore",
        "emoji": "👩📱👧",
        "label": "不理孩子"
      }
    ],
    "answer": "love",
    "success": "舐犊情深，父母深深爱孩子。Deep parental love!",
    "completion": "你理解了 舐犊情深 (parental love)",
    "sceneReward": "🥰 父母之爱"
  },
  {
    "id": "level-140",
    "number": 140,
    "worldId": "family-island",
    "title": "家庭成语大挑战",
    "skill": "四项成语综合",
    "type": "boss",
    "instruction": "完成四项成语任务",
    "prompt": "家庭成语大闯关！",
    "words": [
      "尊老爱幼",
      "相亲相爱",
      "天伦之乐",
      "和睦相处"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "哪个是 尊老爱幼",
        "prompt": "尊老爱幼",
        "answer": "respect",
        "options": [
          {
            "id": "ignore",
            "emoji": "👴👶❌",
            "label": "不理"
          },
          {
            "id": "respect",
            "emoji": "👴🤝👶",
            "label": "尊老爱幼 respect"
          },
          {
            "id": "bully",
            "emoji": "😤",
            "label": "欺负"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 相亲相爱",
        "prompt": "相亲相爱",
        "answer": "love",
        "options": [
          {
            "id": "argue",
            "emoji": "💢",
            "label": "吵架"
          },
          {
            "id": "love",
            "emoji": "👨‍👩‍👧‍👦💖",
            "label": "相亲相爱 love"
          },
          {
            "id": "away",
            "emoji": "✈️",
            "label": "分离"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 天伦之乐",
        "prompt": "天伦之乐",
        "answer": "happiness",
        "options": [
          {
            "id": "alone",
            "emoji": "😢",
            "label": "孤独"
          },
          {
            "id": "happiness",
            "emoji": "👨‍👩‍👧‍👦🎉",
            "label": "天伦之乐 happiness"
          },
          {
            "id": "work",
            "emoji": "💼",
            "label": "在工作"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 和睦相处",
        "prompt": "和睦相处",
        "answer": "harmony",
        "options": [
          {
            "id": "argue2",
            "emoji": "💢",
            "label": "吵架"
          },
          {
            "id": "harmony",
            "emoji": "😊✨",
            "label": "和睦相处 harmony"
          },
          {
            "id": "cold",
            "emoji": "🥶",
            "label": "不理睬"
          }
        ]
      }
    ],
    "success": "太棒了！家庭成语全部通关！",
    "completion": "你掌握了家庭成语四题",
    "completionTitle": "家庭成语通关！",
    "sceneReward": "🏆 家庭成语勋章"
  },
  {
    "id": "level-141",
    "number": 141,
    "worldId": "sport-island",
    "title": "找到跑",
    "skill": "听音选动作",
    "type": "choice",
    "instruction": "听到口令后，选择正确的动作",
    "prompt": "Find run.",
    "words": [
      "run"
    ],
    "options": [
      {
        "id": "jump",
        "emoji": "🦘",
        "label": "jump"
      },
      {
        "id": "run",
        "emoji": "🏃",
        "label": "run"
      },
      {
        "id": "swim",
        "emoji": "🏊",
        "label": "swim"
      }
    ],
    "answer": "run",
    "success": "Yes! Run! 🏃",
    "completion": "你听懂了 run",
    "sceneReward": "🏃 跑步出现"
  },
  {
    "id": "level-142",
    "number": 142,
    "worldId": "sport-island",
    "title": "找到跳",
    "skill": "听音选动作",
    "type": "choice",
    "instruction": "听到口令后，选择正确的动作",
    "prompt": "Find jump.",
    "words": [
      "jump"
    ],
    "options": [
      {
        "id": "run",
        "emoji": "🏃",
        "label": "run"
      },
      {
        "id": "jump",
        "emoji": "🦘",
        "label": "jump"
      },
      {
        "id": "dance",
        "emoji": "💃",
        "label": "dance"
      }
    ],
    "answer": "jump",
    "success": "Yes! Jump! 🦘",
    "completion": "你听懂了 jump",
    "sceneReward": "🦘 跳跃出现"
  },
  {
    "id": "level-143",
    "number": 143,
    "worldId": "sport-island",
    "title": "找到游泳",
    "skill": "听音选动作",
    "type": "choice",
    "instruction": "听到口令后，选择正确的动作",
    "prompt": "Find swim.",
    "words": [
      "swim"
    ],
    "options": [
      {
        "id": "run",
        "emoji": "🏃",
        "label": "run"
      },
      {
        "id": "swim",
        "emoji": "🏊",
        "label": "swim"
      },
      {
        "id": "fly",
        "emoji": "🦸",
        "label": "fly"
      }
    ],
    "answer": "swim",
    "success": "Yes! Swim! 🏊",
    "completion": "你听懂了 swim",
    "sceneReward": "🏊 游泳出现"
  },
  {
    "id": "level-144",
    "number": 144,
    "worldId": "sport-island",
    "title": "找到唱歌",
    "skill": "听音选动作",
    "type": "choice",
    "instruction": "听到口令后，选择正确的动作",
    "prompt": "Find sing.",
    "words": [
      "sing"
    ],
    "options": [
      {
        "id": "dance",
        "emoji": "💃",
        "label": "dance"
      },
      {
        "id": "sing",
        "emoji": "🎤",
        "label": "sing"
      },
      {
        "id": "draw",
        "emoji": "🎨",
        "label": "draw"
      }
    ],
    "answer": "sing",
    "success": "Yes! Sing! 🎤",
    "completion": "你听懂了 sing",
    "sceneReward": "🎤 唱歌出现"
  },
  {
    "id": "level-145",
    "number": 145,
    "worldId": "sport-island",
    "title": "我会跑",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "I can run.",
    "words": [
      "I can",
      "run"
    ],
    "options": [
      {
        "id": "cant",
        "emoji": "🧒🚫🏃",
        "label": "can't run"
      },
      {
        "id": "can",
        "emoji": "🧒🏃✨",
        "label": "can run"
      },
      {
        "id": "want",
        "emoji": "🧒🤔🏃",
        "label": "want to run"
      }
    ],
    "answer": "can",
    "success": "Yes! I can run!",
    "completion": "你听懂了 I can run",
    "sceneReward": "🏃 能跑起来"
  },
  {
    "id": "level-146",
    "number": 146,
    "worldId": "sport-island",
    "title": "我们去玩吧",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "Let's play!",
    "words": [
      "Let's",
      "play"
    ],
    "options": [
      {
        "id": "study",
        "emoji": "📚✏️",
        "label": "let's study"
      },
      {
        "id": "play",
        "emoji": "⚽🎮✨",
        "label": "let's play"
      },
      {
        "id": "eat",
        "emoji": "🍽️",
        "label": "let's eat"
      }
    ],
    "answer": "play",
    "success": "Yes! Let's play!",
    "completion": "你听懂了 Let's play!",
    "sceneReward": "⚽ 开玩"
  },
  {
    "id": "level-147",
    "number": 147,
    "worldId": "sport-island",
    "title": "拼出 RUN",
    "skill": "按顺序拼单词",
    "type": "word-forge",
    "instruction": "按听到的顺序点字母",
    "prompt": "Build run. R. U. N. Run.",
    "words": [
      "run",
      "r",
      "u",
      "n"
    ],
    "letters": [
      "N",
      "U",
      "R"
    ],
    "answer": "RUN",
    "success": "Yes! R. U. N. Run!",
    "completion": "你拼出了 RUN",
    "sceneReward": "🏃 跑拼好了"
  },
  {
    "id": "level-148",
    "number": 148,
    "worldId": "sport-island",
    "title": "跟读：我会跳",
    "skill": "听示范并跟读",
    "type": "echo",
    "instruction": "听完示范，再说同一句话",
    "prompt": "I can jump.",
    "words": [
      "I can",
      "jump"
    ],
    "accepted": [
      "i can jump",
      "can jump",
      "jump"
    ],
    "success": "Great! You can jump!",
    "completion": "你说出了 I can jump",
    "sceneReward": "🦘 跳起来"
  },
  {
    "id": "level-149",
    "number": 149,
    "worldId": "sport-island",
    "title": "找到跳舞",
    "skill": "听音选动作",
    "type": "choice",
    "instruction": "听到口令后，选择正确的动作",
    "prompt": "Find dance.",
    "words": [
      "dance"
    ],
    "options": [
      {
        "id": "sing",
        "emoji": "🎤",
        "label": "sing"
      },
      {
        "id": "dance",
        "emoji": "💃",
        "label": "dance"
      },
      {
        "id": "draw",
        "emoji": "🎨",
        "label": "draw"
      }
    ],
    "answer": "dance",
    "success": "Yes! Dance! 💃",
    "completion": "你听懂了 dance",
    "sceneReward": "💃 跳舞出现"
  },
  {
    "id": "level-150",
    "number": 150,
    "worldId": "sport-island",
    "title": "运动岛 Boss",
    "skill": "四项综合任务",
    "type": "boss",
    "instruction": "完成四项任务，点亮运动岛",
    "prompt": "Let's save Sport Island!",
    "words": [
      "run",
      "jump",
      "swim",
      "sing"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "选择跑",
        "prompt": "Find run.",
        "answer": "run",
        "options": [
          {
            "id": "jump",
            "emoji": "🦘",
            "label": "jump"
          },
          {
            "id": "run",
            "emoji": "🏃",
            "label": "run"
          },
          {
            "id": "swim",
            "emoji": "🏊",
            "label": "swim"
          }
        ]
      },
      {
        "type": "word-forge",
        "instruction": "拼出 JUMP",
        "prompt": "Build jump. J. U. M. P.",
        "answer": "JUMP",
        "letters": [
          "P",
          "M",
          "U",
          "J"
        ]
      },
      {
        "type": "choice",
        "instruction": "选择游泳",
        "prompt": "Find swim.",
        "answer": "swim",
        "options": [
          {
            "id": "run",
            "emoji": "🏃",
            "label": "run"
          },
          {
            "id": "swim",
            "emoji": "🏊",
            "label": "swim"
          },
          {
            "id": "fly",
            "emoji": "🦸",
            "label": "fly"
          }
        ]
      },
      {
        "type": "echo",
        "instruction": "跟读句子",
        "prompt": "I can jump.",
        "accepted": [
          "i can jump",
          "can jump",
          "jump"
        ]
      }
    ],
    "success": "Sport Island is saved!",
    "completion": "你完成了运动岛的所有挑战",
    "completionTitle": "运动岛得救了！",
    "sceneReward": "✨ 运动岛完全修复"
  },
  {
    "id": "level-151",
    "number": 151,
    "worldId": "sport-island",
    "title": "奋勇争先",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是奋勇争先",
    "prompt": "奋勇争先。Strive to be first!",
    "words": [
      "奋勇争先",
      "strive"
    ],
    "options": [
      {
        "id": "lazy",
        "emoji": "🧒🛌",
        "label": "懒洋洋"
      },
      {
        "id": "strive",
        "emoji": "🧒🏃💨✨",
        "label": "努力冲在前面"
      },
      {
        "id": "slow",
        "emoji": "🧒🚶",
        "label": "慢慢走"
      }
    ],
    "answer": "strive",
    "success": "奋勇争先，努力争第一。Strive to be first!",
    "completion": "你理解了 奋勇争先 (strive)",
    "sceneReward": "🥇 冲刺星"
  },
  {
    "id": "level-152",
    "number": 152,
    "worldId": "sport-island",
    "title": "坚持不懈",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是坚持不懈",
    "prompt": "坚持不懈。Never give up!",
    "words": [
      "坚持不懈",
      "persist"
    ],
    "options": [
      {
        "id": "quit",
        "emoji": "🧒🛑😢",
        "label": "中途放弃"
      },
      {
        "id": "persist",
        "emoji": "🧒💪✨➡️✅",
        "label": "一直坚持不放弃"
      },
      {
        "id": "try",
        "emoji": "🧒🔄",
        "label": "试试看"
      }
    ],
    "answer": "persist",
    "success": "坚持不懈，一直不放弃。Never give up!",
    "completion": "你理解了 坚持不懈 (persist)",
    "sceneReward": "💪 坚持勋章"
  },
  {
    "id": "level-153",
    "number": 153,
    "worldId": "sport-island",
    "title": "再接再厉",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是再接再厉",
    "prompt": "再接再厉。Keep improving!",
    "words": [
      "再接再厉",
      "improve"
    ],
    "options": [
      {
        "id": "rest",
        "emoji": "🧒🏆😴",
        "label": "赢了就休息"
      },
      {
        "id": "improve",
        "emoji": "🧒🏆➡️💪➡️🏆✨",
        "label": "赢了继续努力"
      },
      {
        "id": "sad",
        "emoji": "🧒😢",
        "label": "输了就哭"
      }
    ],
    "answer": "improve",
    "success": "再接再厉，继续努力更好。Keep improving!",
    "completion": "你理解了 再接再厉 (improve)",
    "sceneReward": "📈 进步箭头"
  },
  {
    "id": "level-154",
    "number": 154,
    "worldId": "sport-island",
    "title": "百折不挠",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是百折不挠",
    "prompt": "百折不挠。Unyielding!",
    "words": [
      "百折不挠",
      "unyielding"
    ],
    "options": [
      {
        "id": "giveup",
        "emoji": "🧒💥😢",
        "label": "失败就放弃"
      },
      {
        "id": "unyielding",
        "emoji": "🧒💥➡️💪➡️✨",
        "label": "失败很多次仍不屈服"
      },
      {
        "id": "lucky",
        "emoji": "🧒🍀",
        "label": "靠运气"
      }
    ],
    "answer": "unyielding",
    "success": "百折不挠，再难也不屈服。Unyielding!",
    "completion": "你理解了 百折不挠 (unyielding)",
    "sceneReward": "🔥 不屈之火"
  },
  {
    "id": "level-155",
    "number": 155,
    "worldId": "sport-island",
    "title": "勇往直前",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是勇往直前？(英文关键词：forge ahead)",
    "prompt": "勇往直前。Forge ahead!",
    "words": [
      "勇往直前",
      "forge ahead"
    ],
    "options": [
      {
        "id": "back",
        "emoji": "🧒⬅️😰",
        "label": "退缩"
      },
      {
        "id": "forge",
        "emoji": "🧒➡️💪✨",
        "label": "勇往直前 forge ahead"
      },
      {
        "id": "wait",
        "emoji": "🧒⏸️",
        "label": "等一等"
      }
    ],
    "answer": "forge",
    "success": "勇往直前，勇敢向前。Forge ahead!",
    "completion": "你理解了 勇往直前 (forge ahead)",
    "sceneReward": "⚔️ 勇敢之剑"
  },
  {
    "id": "level-156",
    "number": 156,
    "worldId": "sport-island",
    "title": "全力以赴",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是全力以赴",
    "prompt": "全力以赴。Give it your all!",
    "words": [
      "全力以赴",
      "all out"
    ],
    "options": [
      {
        "id": "half",
        "emoji": "🧒50%💪",
        "label": "只使了一半力气"
      },
      {
        "id": "allout",
        "emoji": "🧒100%💪🔥✨",
        "label": "使出全部力量"
      },
      {
        "id": "skip",
        "emoji": "🧒🙅",
        "label": "不参加"
      }
    ],
    "answer": "allout",
    "success": "全力以赴，拿出全部力量。Give it your all!",
    "completion": "你理解了 全力以赴 (all out)",
    "sceneReward": "🔥 全力之火"
  },
  {
    "id": "level-157",
    "number": 157,
    "worldId": "sport-island",
    "title": "锲而不舍",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是锲而不舍？(英文关键词：persevere)",
    "prompt": "锲而不舍。Persevere!",
    "words": [
      "锲而不舍",
      "persevere"
    ],
    "options": [
      {
        "id": "quit",
        "emoji": "🧒🛑",
        "label": "放弃"
      },
      {
        "id": "persevere",
        "emoji": "🧒🔨💎✨",
        "label": "锲而不舍 persevere"
      },
      {
        "id": "try",
        "emoji": "🧒🤔",
        "label": "试试看"
      }
    ],
    "answer": "persevere",
    "success": "锲而不舍，不停地刻。Persevere!",
    "completion": "你理解了 锲而不舍 (persevere)",
    "sceneReward": "💎 恒心钻石"
  },
  {
    "id": "level-158",
    "number": 158,
    "worldId": "sport-island",
    "title": "持之以恒",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是持之以恒",
    "prompt": "持之以恒。Keep it up consistently!",
    "words": [
      "持之以恒",
      "consistent"
    ],
    "options": [
      {
        "id": "offon",
        "emoji": "🧒📅⏸️📅⏸️",
        "label": "三天打鱼两天晒网"
      },
      {
        "id": "consistent",
        "emoji": "🧒📅✅📅✅📅✨",
        "label": "每天坚持"
      },
      {
        "id": "start",
        "emoji": "🧒📅",
        "label": "刚开始"
      }
    ],
    "answer": "consistent",
    "success": "持之以恒，长久坚持。Keep it up!",
    "completion": "你理解了 持之以恒 (consistent)",
    "sceneReward": "📅 日历之星"
  },
  {
    "id": "level-159",
    "number": 159,
    "worldId": "sport-island",
    "title": "精益求精",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是精益求精？(英文关键词：perfect)",
    "prompt": "精益求精。Always perfecting!",
    "words": [
      "精益求精",
      "perfect"
    ],
    "options": [
      {
        "id": "ok",
        "emoji": "🧒👍",
        "label": "差不多就行"
      },
      {
        "id": "perfect",
        "emoji": "🧒✨💎✨",
        "label": "精益求精 perfect"
      },
      {
        "id": "worse",
        "emoji": "🧒📉",
        "label": "越做越差"
      }
    ],
    "answer": "perfect",
    "success": "精益求精，追求更好。Always perfecting!",
    "completion": "你理解了 精益求精 (perfect)",
    "sceneReward": "💎 完美之钻"
  },
  {
    "id": "level-160",
    "number": 160,
    "worldId": "sport-island",
    "title": "运动成语大挑战",
    "skill": "四项成语综合",
    "type": "boss",
    "instruction": "完成四项成语任务",
    "prompt": "运动成语大闯关！",
    "words": [
      "奋勇争先",
      "坚持不懈",
      "百折不挠",
      "勇往直前"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "哪个是 奋勇争先",
        "prompt": "奋勇争先",
        "answer": "strive",
        "options": [
          {
            "id": "lazy",
            "emoji": "🛌",
            "label": "懒洋洋"
          },
          {
            "id": "strive",
            "emoji": "🏃💨✨",
            "label": "奋勇争先 strive"
          },
          {
            "id": "slow",
            "emoji": "🚶",
            "label": "慢慢走"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 坚持不懈",
        "prompt": "坚持不懈",
        "answer": "persist",
        "options": [
          {
            "id": "quit",
            "emoji": "🛑😢",
            "label": "放弃"
          },
          {
            "id": "persist",
            "emoji": "💪✨",
            "label": "坚持不懈 persist"
          },
          {
            "id": "try",
            "emoji": "🔄",
            "label": "试试看"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 百折不挠",
        "prompt": "百折不挠",
        "answer": "unyielding",
        "options": [
          {
            "id": "giveup",
            "emoji": "💥😢",
            "label": "放弃"
          },
          {
            "id": "unyielding",
            "emoji": "💥➡️💪",
            "label": "百折不挠"
          },
          {
            "id": "lucky",
            "emoji": "🍀",
            "label": "靠运气"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 勇往直前",
        "prompt": "勇往直前",
        "answer": "forge",
        "options": [
          {
            "id": "back",
            "emoji": "⬅️😰",
            "label": "退缩"
          },
          {
            "id": "forge",
            "emoji": "➡️💪",
            "label": "勇往直前 forge"
          },
          {
            "id": "wait",
            "emoji": "⏸️",
            "label": "等一等"
          }
        ]
      }
    ],
    "success": "太棒了！运动成语全部通关！",
    "completion": "你掌握了运动成语四题",
    "completionTitle": "运动成语通关！",
    "sceneReward": "🏆 运动成语勋章"
  },
  {
    "id": "level-161",
    "number": 161,
    "worldId": "body-island",
    "title": "找到头",
    "skill": "听单词选身体",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the head.",
    "words": [
      "head"
    ],
    "options": [
      {
        "id": "hand",
        "emoji": "✋",
        "label": "hand"
      },
      {
        "id": "head",
        "emoji": "🧑",
        "label": "head"
      },
      {
        "id": "foot",
        "emoji": "🦶",
        "label": "foot"
      }
    ],
    "answer": "head",
    "success": "Yes! Head! 🧑",
    "completion": "你听懂了 head",
    "sceneReward": "🧑 头出现了"
  },
  {
    "id": "level-162",
    "number": 162,
    "worldId": "body-island",
    "title": "找到眼睛",
    "skill": "听单词选身体",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the eye.",
    "words": [
      "eye"
    ],
    "options": [
      {
        "id": "ear",
        "emoji": "👂",
        "label": "ear"
      },
      {
        "id": "eye",
        "emoji": "👁️",
        "label": "eye"
      },
      {
        "id": "nose",
        "emoji": "👃",
        "label": "nose"
      }
    ],
    "answer": "eye",
    "success": "Yes! Eye! 👁️",
    "completion": "你听懂了 eye",
    "sceneReward": "👁️ 眼睛出现了"
  },
  {
    "id": "level-163",
    "number": 163,
    "worldId": "body-island",
    "title": "找到耳朵",
    "skill": "听单词选身体",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the ear.",
    "words": [
      "ear"
    ],
    "options": [
      {
        "id": "eye",
        "emoji": "👁️",
        "label": "eye"
      },
      {
        "id": "mouth",
        "emoji": "👄",
        "label": "mouth"
      },
      {
        "id": "ear",
        "emoji": "👂",
        "label": "ear"
      }
    ],
    "answer": "ear",
    "success": "Yes! Ear! 👂",
    "completion": "你听懂了 ear",
    "sceneReward": "👂 耳朵出现了"
  },
  {
    "id": "level-164",
    "number": 164,
    "worldId": "body-island",
    "title": "找到鼻子",
    "skill": "听单词选身体",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the nose.",
    "words": [
      "nose"
    ],
    "options": [
      {
        "id": "eye",
        "emoji": "👁️",
        "label": "eye"
      },
      {
        "id": "nose",
        "emoji": "👃",
        "label": "nose"
      },
      {
        "id": "mouth",
        "emoji": "👄",
        "label": "mouth"
      }
    ],
    "answer": "nose",
    "success": "Yes! Nose! 👃",
    "completion": "你听懂了 nose",
    "sceneReward": "👃 鼻子出现了"
  },
  {
    "id": "level-165",
    "number": 165,
    "worldId": "body-island",
    "title": "摸摸你的头",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "Touch your head.",
    "words": [
      "Touch your",
      "head"
    ],
    "options": [
      {
        "id": "nose",
        "emoji": "✋👃",
        "label": "touch nose"
      },
      {
        "id": "head",
        "emoji": "✋🧑",
        "label": "touch head"
      },
      {
        "id": "ear",
        "emoji": "✋👂",
        "label": "touch ear"
      }
    ],
    "answer": "head",
    "success": "Yes! Touch your head!",
    "completion": "你听懂了 Touch your head",
    "sceneReward": "✋ 摸摸头"
  },
  {
    "id": "level-166",
    "number": 166,
    "worldId": "body-island",
    "title": "张开嘴巴",
    "skill": "听句子选场景",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "Open your mouth.",
    "words": [
      "Open your",
      "mouth"
    ],
    "options": [
      {
        "id": "close",
        "emoji": "🤐",
        "label": "mouth closed"
      },
      {
        "id": "open",
        "emoji": "😮✨",
        "label": "mouth open"
      },
      {
        "id": "nose",
        "emoji": "👃",
        "label": "touch nose"
      }
    ],
    "answer": "open",
    "success": "Yes! Open your mouth!",
    "completion": "你听懂了 Open your mouth",
    "sceneReward": "😮 张嘴"
  },
  {
    "id": "level-167",
    "number": 167,
    "worldId": "body-island",
    "title": "拼出 HAND",
    "skill": "按顺序拼单词",
    "type": "word-forge",
    "instruction": "按听到的顺序点字母",
    "prompt": "Build hand. H. A. N. D. Hand.",
    "words": [
      "hand",
      "h",
      "a",
      "n",
      "d"
    ],
    "letters": [
      "N",
      "D",
      "A",
      "H"
    ],
    "answer": "HAND",
    "success": "Yes! H. A. N. D. Hand!",
    "completion": "你拼出了 HAND",
    "sceneReward": "✋ 手拼好了"
  },
  {
    "id": "level-168",
    "number": 168,
    "worldId": "body-island",
    "title": "跟读：摸摸你的鼻子",
    "skill": "听示范并跟读",
    "type": "echo",
    "instruction": "听完示范，再说同一句话",
    "prompt": "Touch your nose.",
    "words": [
      "Touch your",
      "nose"
    ],
    "accepted": [
      "touch your nose",
      "your nose",
      "touch nose"
    ],
    "success": "Good job!",
    "completion": "你说出了 Touch your nose",
    "sceneReward": "👃 摸鼻子"
  },
  {
    "id": "level-169",
    "number": 169,
    "worldId": "body-island",
    "title": "找到手",
    "skill": "听单词选身体",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the hand.",
    "words": [
      "hand"
    ],
    "options": [
      {
        "id": "foot",
        "emoji": "🦶",
        "label": "foot"
      },
      {
        "id": "hand",
        "emoji": "✋",
        "label": "hand"
      },
      {
        "id": "head",
        "emoji": "🧑",
        "label": "head"
      }
    ],
    "answer": "hand",
    "success": "Yes! Hand! ✋",
    "completion": "你听懂了 hand",
    "sceneReward": "✋ 手出现了"
  },
  {
    "id": "level-170",
    "number": 170,
    "worldId": "body-island",
    "title": "身体岛 Boss",
    "skill": "四项综合任务",
    "type": "boss",
    "instruction": "完成四项任务，点亮身体岛",
    "prompt": "Let's save Body Island!",
    "words": [
      "head",
      "eye",
      "nose",
      "hand"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "选择头",
        "prompt": "Find the head.",
        "answer": "head",
        "options": [
          {
            "id": "hand",
            "emoji": "✋",
            "label": "hand"
          },
          {
            "id": "head",
            "emoji": "🧑",
            "label": "head"
          },
          {
            "id": "foot",
            "emoji": "🦶",
            "label": "foot"
          }
        ]
      },
      {
        "type": "word-forge",
        "instruction": "拼出 EYE",
        "prompt": "Build eye. E. Y. E.",
        "answer": "EYE",
        "letters": [
          "Y",
          "E",
          "E"
        ]
      },
      {
        "type": "choice",
        "instruction": "选择鼻子",
        "prompt": "Find the nose.",
        "answer": "nose",
        "options": [
          {
            "id": "eye",
            "emoji": "👁️",
            "label": "eye"
          },
          {
            "id": "nose",
            "emoji": "👃",
            "label": "nose"
          },
          {
            "id": "mouth",
            "emoji": "👄",
            "label": "mouth"
          }
        ]
      },
      {
        "type": "echo",
        "instruction": "跟读句子",
        "prompt": "Touch your head.",
        "accepted": [
          "touch your head",
          "your head",
          "touch head"
        ]
      }
    ],
    "success": "Body Island is saved!",
    "completion": "你完成了身体岛的所有挑战",
    "completionTitle": "身体岛得救了！",
    "sceneReward": "✨ 身体岛完全修复"
  },
  {
    "id": "level-171",
    "number": 171,
    "worldId": "body-island",
    "title": "眼明手快",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是眼明手快",
    "prompt": "眼明手快。Quick eyes and hands!",
    "words": [
      "眼明手快",
      "quick"
    ],
    "options": [
      {
        "id": "slow",
        "emoji": "🧒👀🦥✋",
        "label": "反应很慢"
      },
      {
        "id": "quick",
        "emoji": "🧒👀⚡✋✨",
        "label": "眼明手快反应快"
      },
      {
        "id": "careless",
        "emoji": "🧒😵💥",
        "label": "粗心大意"
      }
    ],
    "answer": "quick",
    "success": "眼明手快，眼力好动作快。Quick!",
    "completion": "你理解了 眼明手快 (quick)",
    "sceneReward": "⚡ 灵敏星"
  },
  {
    "id": "level-172",
    "number": 172,
    "worldId": "body-island",
    "title": "耳聪目明",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是耳聪目明",
    "prompt": "耳聪目明。Sharp ears and eyes!",
    "words": [
      "耳聪目明",
      "sharp"
    ],
    "options": [
      {
        "id": "deaf",
        "emoji": "🧒👂🔇👁️🔇",
        "label": "听不清看不清"
      },
      {
        "id": "sharp",
        "emoji": "🧒👂✨👁️✨",
        "label": "耳聪目明很灵敏"
      },
      {
        "id": "young",
        "emoji": "🧒😊",
        "label": "只是年轻"
      }
    ],
    "answer": "sharp",
    "success": "耳聪目明，听觉视觉都好。Sharp!",
    "completion": "你理解了 耳聪目明 (sharp)",
    "sceneReward": "👂👁️ 灵敏之耳目"
  },
  {
    "id": "level-173",
    "number": 173,
    "worldId": "body-island",
    "title": "口若悬河",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是口若悬河？(英文关键词：eloquent)",
    "prompt": "口若悬河。Eloquent!",
    "words": [
      "口若悬河",
      "eloquent"
    ],
    "options": [
      {
        "id": "quiet",
        "emoji": "🧒🤐",
        "label": "沉默寡言 quiet"
      },
      {
        "id": "eloquent",
        "emoji": "🧒🗣️🌊✨",
        "label": "口若悬河 eloquent"
      },
      {
        "id": "mumble",
        "emoji": "🧒😬",
        "label": "吞吞吐吐"
      }
    ],
    "answer": "eloquent",
    "success": "口若悬河，说话滔滔不绝。Eloquent!",
    "completion": "你理解了 口若悬河 (eloquent)",
    "sceneReward": "🌊 滔滔不绝"
  },
  {
    "id": "level-174",
    "number": 174,
    "worldId": "body-island",
    "title": "手舞足蹈",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是手舞足蹈",
    "prompt": "手舞足蹈。Jump for joy!",
    "words": [
      "手舞足蹈",
      "jump for joy"
    ],
    "options": [
      {
        "id": "sad",
        "emoji": "😢",
        "label": "难过"
      },
      {
        "id": "dance",
        "emoji": "💃🕺🎶",
        "label": "开心得又跳又舞"
      },
      {
        "id": "sit",
        "emoji": "🪑",
        "label": "坐着"
      }
    ],
    "answer": "dance",
    "success": "手舞足蹈，高兴得又跳又舞。Jump for joy!",
    "completion": "你理解了 手舞足蹈 (jump for joy)",
    "sceneReward": "💃 跳舞小人"
  },
  {
    "id": "level-175",
    "number": 175,
    "worldId": "body-island",
    "title": "足智多谋",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是足智多谋？(英文关键词：resourceful)",
    "prompt": "足智多谋。Resourceful!",
    "words": [
      "足智多谋",
      "resourceful"
    ],
    "options": [
      {
        "id": "simple",
        "emoji": "🧒🤷",
        "label": "头脑简单"
      },
      {
        "id": "resourceful",
        "emoji": "🧒💡🧠✨",
        "label": "足智多谋 resourceful"
      },
      {
        "id": "copy",
        "emoji": "🧒📋",
        "label": "抄别人"
      }
    ],
    "answer": "resourceful",
    "success": "足智多谋，智慧多计谋多。Resourceful!",
    "completion": "你理解了 足智多谋 (resourceful)",
    "sceneReward": "💡 智慧星"
  },
  {
    "id": "level-176",
    "number": 176,
    "worldId": "body-island",
    "title": "眉开眼笑",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是眉开眼笑",
    "prompt": "眉开眼笑。Smile happily!",
    "words": [
      "眉开眼笑",
      "smile"
    ],
    "options": [
      {
        "id": "frown",
        "emoji": "😟",
        "label": "皱眉"
      },
      {
        "id": "smile",
        "emoji": "😄😊",
        "label": "开心微笑"
      },
      {
        "id": "cry",
        "emoji": "😭",
        "label": "哭泣"
      }
    ],
    "answer": "smile",
    "success": "眉开眼笑，眉毛舒展眼睛含笑。Smile happily!",
    "completion": "你理解了 眉开眼笑 (smile)",
    "sceneReward": "😊 微笑表情"
  },
  {
    "id": "level-177",
    "number": 177,
    "worldId": "body-island",
    "title": "昂首挺胸",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是昂首挺胸",
    "prompt": "昂首挺胸。Stand tall and proud!",
    "words": [
      "昂首挺胸",
      "proud"
    ],
    "options": [
      {
        "id": "bow",
        "emoji": "🧒😔👇",
        "label": "低着头驼背"
      },
      {
        "id": "proud",
        "emoji": "🧒😊💪✨",
        "label": "昂首挺胸很自信"
      },
      {
        "id": "sit",
        "emoji": "🧒🪑",
        "label": "坐着"
      }
    ],
    "answer": "proud",
    "success": "昂首挺胸，自信挺拔。Stand tall!",
    "completion": "你理解了 昂首挺胸 (proud)",
    "sceneReward": "💪 自信之星"
  },
  {
    "id": "level-178",
    "number": 178,
    "worldId": "body-island",
    "title": "一目十行",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是一目十行",
    "prompt": "一目十行。Read very fast!",
    "words": [
      "一目十行",
      "fast reader"
    ],
    "options": [
      {
        "id": "slow",
        "emoji": "🧒📖🐌",
        "label": "一行一行慢慢读"
      },
      {
        "id": "fast",
        "emoji": "🧒📖⚡✨",
        "label": "一目十行读得快"
      },
      {
        "id": "skip",
        "emoji": "🧒📖❌",
        "label": "不读书"
      }
    ],
    "answer": "fast",
    "success": "一目十行，看书非常快。Read very fast!",
    "completion": "你理解了 一目十行 (fast reader)",
    "sceneReward": "📖 速读之星"
  },
  {
    "id": "level-179",
    "number": 179,
    "worldId": "body-island",
    "title": "七嘴八舌",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是七嘴八舌？(英文关键词：chatter)",
    "prompt": "七嘴八舌。Everyone chatters!",
    "words": [
      "七嘴八舌",
      "chatter"
    ],
    "options": [
      {
        "id": "quiet",
        "emoji": "🤐🤐",
        "label": "安安静静"
      },
      {
        "id": "chatter",
        "emoji": "🗣️🗣️🗣️💬✨",
        "label": "七嘴八舌 chatter"
      },
      {
        "id": "one",
        "emoji": "🗣️",
        "label": "只有一个人说"
      }
    ],
    "answer": "chatter",
    "success": "七嘴八舌，大家争着说话。Chatter!",
    "completion": "你理解了 七嘴八舌 (chatter)",
    "sceneReward": "💬 热闹讨论"
  },
  {
    "id": "level-180",
    "number": 180,
    "worldId": "body-island",
    "title": "身体成语大挑战",
    "skill": "四项成语综合",
    "type": "boss",
    "instruction": "完成四项成语任务",
    "prompt": "身体成语大闯关！",
    "words": [
      "眼明手快",
      "耳聪目明",
      "手舞足蹈",
      "眉开眼笑"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "哪个是 眼明手快",
        "prompt": "眼明手快",
        "answer": "quick",
        "options": [
          {
            "id": "slow",
            "emoji": "🦥",
            "label": "慢"
          },
          {
            "id": "quick",
            "emoji": "⚡",
            "label": "眼明手快 quick"
          },
          {
            "id": "careless",
            "emoji": "💥",
            "label": "粗心"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 耳聪目明",
        "prompt": "耳聪目明",
        "answer": "sharp",
        "options": [
          {
            "id": "deaf",
            "emoji": "🔇",
            "label": "听不清"
          },
          {
            "id": "sharp",
            "emoji": "👂✨👁️",
            "label": "耳聪目明 sharp"
          },
          {
            "id": "young",
            "emoji": "😊",
            "label": "年轻"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 手舞足蹈",
        "prompt": "手舞足蹈",
        "answer": "dance",
        "options": [
          {
            "id": "sad",
            "emoji": "😢",
            "label": "难过"
          },
          {
            "id": "dance",
            "emoji": "💃",
            "label": "手舞足蹈"
          },
          {
            "id": "sit",
            "emoji": "🪑",
            "label": "坐着"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 眉开眼笑",
        "prompt": "眉开眼笑",
        "answer": "smile",
        "options": [
          {
            "id": "frown",
            "emoji": "😟",
            "label": "皱眉"
          },
          {
            "id": "smile",
            "emoji": "😄",
            "label": "眉开眼笑 smile"
          },
          {
            "id": "cry",
            "emoji": "😭",
            "label": "哭泣"
          }
        ]
      }
    ],
    "success": "太棒了！身体成语全部通关！",
    "completion": "你掌握了身体成语四题",
    "completionTitle": "身体成语通关！",
    "sceneReward": "🏆 身体成语勋章"
  },
  {
    "id": "level-181",
    "number": 181,
    "worldId": "rainbow-island",
    "title": "复习：小猫",
    "skill": "综合复习",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the cat.",
    "words": [
      "cat"
    ],
    "options": [
      {
        "id": "dog",
        "emoji": "🐶",
        "label": "dog"
      },
      {
        "id": "cat",
        "emoji": "🐱",
        "label": "cat"
      },
      {
        "id": "bird",
        "emoji": "🐦",
        "label": "bird"
      }
    ],
    "answer": "cat",
    "success": "Yes! Cat! 🐱",
    "completion": "你复习了 cat",
    "sceneReward": "🐱 复习成功"
  },
  {
    "id": "level-182",
    "number": 182,
    "worldId": "rainbow-island",
    "title": "复习：开心",
    "skill": "综合复习",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find happy.",
    "words": [
      "happy"
    ],
    "options": [
      {
        "id": "sad",
        "emoji": "😢",
        "label": "sad"
      },
      {
        "id": "happy",
        "emoji": "😄",
        "label": "happy"
      },
      {
        "id": "angry",
        "emoji": "😡",
        "label": "angry"
      }
    ],
    "answer": "happy",
    "success": "Yes! Happy! 😄",
    "completion": "你复习了 happy",
    "sceneReward": "😄 情感复习"
  },
  {
    "id": "level-183",
    "number": 183,
    "worldId": "rainbow-island",
    "title": "复习：我想要蛋糕",
    "skill": "综合复习",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "I would like some cake.",
    "words": [
      "I would like",
      "cake"
    ],
    "options": [
      {
        "id": "bread",
        "emoji": "🍞🙋",
        "label": "want bread"
      },
      {
        "id": "cake",
        "emoji": "🍰🙋",
        "label": "want cake"
      },
      {
        "id": "rice",
        "emoji": "🍚🙋",
        "label": "want rice"
      }
    ],
    "answer": "cake",
    "success": "Yes! I would like some cake!",
    "completion": "你复习了 I would like some cake",
    "sceneReward": "🍰 美食复习"
  },
  {
    "id": "level-184",
    "number": 184,
    "worldId": "rainbow-island",
    "title": "复习：这是我的妈妈",
    "skill": "综合复习",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "This is my mom.",
    "words": [
      "This is my",
      "mom"
    ],
    "options": [
      {
        "id": "dad",
        "emoji": "🧒👨",
        "label": "introducing dad"
      },
      {
        "id": "mom",
        "emoji": "🧒👩",
        "label": "introducing mom"
      },
      {
        "id": "sister",
        "emoji": "🧒👧",
        "label": "introducing sister"
      }
    ],
    "answer": "mom",
    "success": "Yes! This is my mom!",
    "completion": "你复习了 This is my mom",
    "sceneReward": "👩 家庭复习"
  },
  {
    "id": "level-185",
    "number": 185,
    "worldId": "rainbow-island",
    "title": "复习：太阳",
    "skill": "综合复习",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the sun.",
    "words": [
      "sun"
    ],
    "options": [
      {
        "id": "moon",
        "emoji": "🌙",
        "label": "moon"
      },
      {
        "id": "sun",
        "emoji": "☀️",
        "label": "sun"
      },
      {
        "id": "star",
        "emoji": "⭐",
        "label": "star"
      }
    ],
    "answer": "sun",
    "success": "Yes! Sun! ☀️",
    "completion": "你复习了 sun",
    "sceneReward": "☀️ 自然复习"
  },
  {
    "id": "level-186",
    "number": 186,
    "worldId": "rainbow-island",
    "title": "拼出 RUN",
    "skill": "综合复习",
    "type": "word-forge",
    "instruction": "按听到的顺序点字母",
    "prompt": "Build run. R. U. N. Run.",
    "words": [
      "run",
      "r",
      "u",
      "n"
    ],
    "letters": [
      "N",
      "U",
      "R"
    ],
    "answer": "RUN",
    "success": "Yes! R. U. N. Run!",
    "completion": "你复习了 run",
    "sceneReward": "🏃 运动复习"
  },
  {
    "id": "level-187",
    "number": 187,
    "worldId": "rainbow-island",
    "title": "跟读：摸你的头",
    "skill": "综合复习",
    "type": "echo",
    "instruction": "听完示范，再说同一句话",
    "prompt": "Touch your head.",
    "words": [
      "Touch your",
      "head"
    ],
    "accepted": [
      "touch your head",
      "your head",
      "touch head"
    ],
    "success": "Good job!",
    "completion": "你复习了 Touch your head",
    "sceneReward": "✋ 身体复习"
  },
  {
    "id": "level-188",
    "number": 188,
    "worldId": "rainbow-island",
    "title": "复习：书本",
    "skill": "综合复习",
    "type": "choice",
    "instruction": "听到口令后，选择正确的",
    "prompt": "Find the book.",
    "words": [
      "book"
    ],
    "options": [
      {
        "id": "pencil",
        "emoji": "✏️",
        "label": "pencil"
      },
      {
        "id": "book",
        "emoji": "📘",
        "label": "book"
      },
      {
        "id": "bag",
        "emoji": "🎒",
        "label": "bag"
      }
    ],
    "answer": "book",
    "success": "Yes! Book! 📘",
    "completion": "你复习了 book",
    "sceneReward": "📘 校园复习"
  },
  {
    "id": "level-189",
    "number": 189,
    "worldId": "rainbow-island",
    "title": "复习：穿上鞋子",
    "skill": "综合复习",
    "type": "story",
    "instruction": "听句子，选择它描述的画面",
    "prompt": "Put on your shoes.",
    "words": [
      "put on",
      "shoes"
    ],
    "options": [
      {
        "id": "coat",
        "emoji": "🧥✅",
        "label": "put on coat"
      },
      {
        "id": "shoes",
        "emoji": "👟✅",
        "label": "put on shoes"
      },
      {
        "id": "hat",
        "emoji": "🧢✅",
        "label": "put on hat"
      }
    ],
    "answer": "shoes",
    "success": "Yes! Put on your shoes!",
    "completion": "你复习了 Put on your shoes",
    "sceneReward": "👟 生活复习"
  },
  {
    "id": "level-190",
    "number": 190,
    "worldId": "rainbow-island",
    "title": "彩虹岛 Boss",
    "skill": "四项综合任务",
    "type": "boss",
    "instruction": "完成四项任务，点亮彩虹岛",
    "prompt": "Let's save Rainbow Island!",
    "words": [
      "cat",
      "happy",
      "book",
      "run"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "选择小猫",
        "prompt": "Find the cat.",
        "answer": "cat",
        "options": [
          {
            "id": "dog",
            "emoji": "🐶",
            "label": "dog"
          },
          {
            "id": "cat",
            "emoji": "🐱",
            "label": "cat"
          },
          {
            "id": "bird",
            "emoji": "🐦",
            "label": "bird"
          }
        ]
      },
      {
        "type": "word-forge",
        "instruction": "拼出 BOOK",
        "prompt": "Build book. B. O. O. K.",
        "answer": "BOOK",
        "letters": [
          "O",
          "K",
          "B",
          "O"
        ]
      },
      {
        "type": "choice",
        "instruction": "选择开心",
        "prompt": "Find happy.",
        "answer": "happy",
        "options": [
          {
            "id": "sad",
            "emoji": "😢",
            "label": "sad"
          },
          {
            "id": "happy",
            "emoji": "😄",
            "label": "happy"
          },
          {
            "id": "angry",
            "emoji": "😡",
            "label": "angry"
          }
        ]
      },
      {
        "type": "echo",
        "instruction": "跟读句子",
        "prompt": "I can run.",
        "accepted": [
          "i can run",
          "can run",
          "run"
        ]
      }
    ],
    "success": "Rainbow Island is saved!",
    "completion": "你完成了彩虹岛的所有挑战",
    "completionTitle": "彩虹岛得救了！",
    "sceneReward": "✨ 彩虹岛完全修复"
  },
  {
    "id": "level-191",
    "number": 191,
    "worldId": "rainbow-island",
    "title": "集思广益",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是集思广益",
    "prompt": "集思广益。Pool wisdom!",
    "words": [
      "集思广益",
      "pool wisdom"
    ],
    "options": [
      {
        "id": "alone",
        "emoji": "🧒🤔",
        "label": "一个人想"
      },
      {
        "id": "pool",
        "emoji": "👥💡✨",
        "label": "大家一起想办法"
      },
      {
        "id": "argue",
        "emoji": "👥💢",
        "label": "大家吵架"
      }
    ],
    "answer": "pool",
    "success": "集思广益，集中大家的智慧。Pool wisdom!",
    "completion": "你理解了 集思广益 (pool wisdom)",
    "sceneReward": "💡 智慧集合"
  },
  {
    "id": "level-192",
    "number": 192,
    "worldId": "rainbow-island",
    "title": "众志成城",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是众志成城",
    "prompt": "众志成城。United we stand!",
    "words": [
      "众志成城",
      "united"
    ],
    "options": [
      {
        "id": "divide",
        "emoji": "👥💥",
        "label": "分裂不团结"
      },
      {
        "id": "united",
        "emoji": "👥🤝🏰✨",
        "label": "团结起来力量大"
      },
      {
        "id": "alone2",
        "emoji": "🧒😰",
        "label": "一个人孤军奋战"
      }
    ],
    "answer": "united",
    "success": "众志成城，团结一致力量大。United we stand!",
    "completion": "你理解了 众志成城 (united)",
    "sceneReward": "🏰 团结城堡"
  },
  {
    "id": "level-193",
    "number": 193,
    "worldId": "rainbow-island",
    "title": "同心协力",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是同心协力",
    "prompt": "同心协力。Work together!",
    "words": [
      "同心协力",
      "together"
    ],
    "options": [
      {
        "id": "fight",
        "emoji": "👥💢",
        "label": "互相打架"
      },
      {
        "id": "together",
        "emoji": "👥🤝💪✨",
        "label": "齐心协力一起干"
      },
      {
        "id": "ignore",
        "emoji": "🧒🙈",
        "label": "各管各的"
      }
    ],
    "answer": "together",
    "success": "同心协力，齐心合力。Work together!",
    "completion": "你理解了 同心协力 (together)",
    "sceneReward": "🤝 齐心协力"
  },
  {
    "id": "level-194",
    "number": 194,
    "worldId": "rainbow-island",
    "title": "取长补短",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是取长补短",
    "prompt": "取长补短。Learn from each other!",
    "words": [
      "取长补短",
      "complement"
    ],
    "options": [
      {
        "id": "copy",
        "emoji": "🧒📋",
        "label": "完全抄别人"
      },
      {
        "id": "complement",
        "emoji": "🧒🤝↔️✨",
        "label": "互相学习长处补短处"
      },
      {
        "id": "mock",
        "emoji": "🧒😏",
        "label": "嘲笑别人短处"
      }
    ],
    "answer": "complement",
    "success": "取长补短，学习长处弥补短处。Learn from each other!",
    "completion": "你理解了 取长补短 (complement)",
    "sceneReward": "↔️ 互补"
  },
  {
    "id": "level-195",
    "number": 195,
    "worldId": "rainbow-island",
    "title": "见义勇为",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是见义勇为",
    "prompt": "见义勇为。Act bravely for justice!",
    "words": [
      "见义勇为",
      "brave"
    ],
    "options": [
      {
        "id": "watch",
        "emoji": "🧒👀",
        "label": "看着不管"
      },
      {
        "id": "brave",
        "emoji": "🧒💪❤️✨",
        "label": "勇敢地站出来"
      },
      {
        "id": "run",
        "emoji": "🧒🏃💨",
        "label": "赶紧跑开"
      }
    ],
    "answer": "brave",
    "success": "见义勇为，看到正义的事勇敢去做。Act bravely!",
    "completion": "你理解了 见义勇为 (brave)",
    "sceneReward": "❤️ 勇敢之心"
  },
  {
    "id": "level-196",
    "number": 196,
    "worldId": "rainbow-island",
    "title": "实事求是",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是实事求是？(英文关键词：practical)",
    "prompt": "实事求是。Be practical!",
    "words": [
      "实事求是",
      "practical"
    ],
    "options": [
      {
        "id": "exaggerate",
        "emoji": "🧒📈😄",
        "label": "夸大其词"
      },
      {
        "id": "practical",
        "emoji": "🧒📊✅✨",
        "label": "实事求是 practical"
      },
      {
        "id": "lie",
        "emoji": "🧒🤥",
        "label": "说假话"
      }
    ],
    "answer": "practical",
    "success": "实事求是，从实际出发。Be practical!",
    "completion": "你理解了 实事求是 (practical)",
    "sceneReward": "📊 求实"
  },
  {
    "id": "level-197",
    "number": 197,
    "worldId": "rainbow-island",
    "title": "脚踏实地",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是脚踏实地",
    "prompt": "脚踏实地。Down to earth!",
    "words": [
      "脚踏实地",
      "down to earth"
    ],
    "options": [
      {
        "id": "dream",
        "emoji": "🧒☁️💭",
        "label": "光想不做"
      },
      {
        "id": "earth",
        "emoji": "🧒🦶🌍💪✨",
        "label": "脚踏实地认真干"
      },
      {
        "id": "rush",
        "emoji": "🧒💨",
        "label": "急功近利"
      }
    ],
    "answer": "earth",
    "success": "脚踏实地，认真踏实地干。Down to earth!",
    "completion": "你理解了 脚踏实地 (down to earth)",
    "sceneReward": "🌍 踏实"
  },
  {
    "id": "level-198",
    "number": 198,
    "worldId": "rainbow-island",
    "title": "有始有终",
    "skill": "看画面理解成语",
    "type": "choice",
    "instruction": "哪个是有始有终？(英文关键词：finish what you start)",
    "prompt": "有始有终。Finish what you start!",
    "words": [
      "有始有终",
      "finish"
    ],
    "options": [
      {
        "id": "quit",
        "emoji": "🧒🛑",
        "label": "半途而废"
      },
      {
        "id": "finish",
        "emoji": "🧒✅➡️✅✨",
        "label": "有始有终 finish"
      },
      {
        "id": "start",
        "emoji": "🧒🚀",
        "label": "只有开始"
      }
    ],
    "answer": "finish",
    "success": "有始有终，做事有开头也有结尾。Finish what you start!",
    "completion": "你理解了 有始有终 (finish)",
    "sceneReward": "✅ 有始有终"
  },
  {
    "id": "level-199",
    "number": 199,
    "worldId": "rainbow-island",
    "title": "大公无私",
    "skill": "看画面理解成语",
    "type": "story",
    "instruction": "哪个是大公无私",
    "prompt": "大公无私。Selfless!",
    "words": [
      "大公无私",
      "selfless"
    ],
    "options": [
      {
        "id": "selfish",
        "emoji": "🧒💰😌",
        "label": "只顾自己"
      },
      {
        "id": "selfless",
        "emoji": "🧒🤝❤️✨",
        "label": "大公无私为别人"
      },
      {
        "id": "fair",
        "emoji": "🧒⚖️",
        "label": "只是公平"
      }
    ],
    "answer": "selfless",
    "success": "大公无私，没有私心。Selfless!",
    "completion": "你理解了 大公无私 (selfless)",
    "sceneReward": "❤️ 无私之心"
  },
  {
    "id": "level-200",
    "number": 200,
    "worldId": "rainbow-island",
    "title": "成语大闯关",
    "skill": "四项成语综合",
    "type": "boss",
    "instruction": "完成四项成语任务",
    "prompt": "成语大闯关！最终挑战！",
    "words": [
      "集思广益",
      "众志成城",
      "见义勇为",
      "脚踏实地"
    ],
    "steps": [
      {
        "type": "choice",
        "instruction": "哪个是 集思广益",
        "prompt": "集思广益",
        "answer": "pool",
        "options": [
          {
            "id": "alone",
            "emoji": "🤔",
            "label": "一个人想"
          },
          {
            "id": "pool",
            "emoji": "👥💡",
            "label": "集思广益 pool wisdom"
          },
          {
            "id": "argue",
            "emoji": "💢",
            "label": "吵架"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 众志成城",
        "prompt": "众志成城",
        "answer": "united",
        "options": [
          {
            "id": "divide",
            "emoji": "💥",
            "label": "分裂"
          },
          {
            "id": "united",
            "emoji": "🤝🏰",
            "label": "众志成城 united"
          },
          {
            "id": "alone2",
            "emoji": "😰",
            "label": "孤军奋战"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 见义勇为",
        "prompt": "见义勇为",
        "answer": "brave",
        "options": [
          {
            "id": "watch",
            "emoji": "👀",
            "label": "看着不管"
          },
          {
            "id": "brave",
            "emoji": "💪❤️",
            "label": "见义勇为 brave"
          },
          {
            "id": "run2",
            "emoji": "🏃💨",
            "label": "跑开"
          }
        ]
      },
      {
        "type": "choice",
        "instruction": "哪个是 脚踏实地",
        "prompt": "脚踏实地",
        "answer": "earth",
        "options": [
          {
            "id": "dream",
            "emoji": "☁️💭",
            "label": "光想不做"
          },
          {
            "id": "earth",
            "emoji": "🦶🌍",
            "label": "脚踏实地"
          },
          {
            "id": "rush",
            "emoji": "💨",
            "label": "急功近利"
          }
        ]
      }
    ],
    "success": "太棒了！全部成语通关！",
    "completion": "你掌握了最终成语四题",
    "completionTitle": "成语大闯关通关！",
    "sceneReward": "🏆 最终成语勋章"
  }
];

})(typeof globalThis !== "undefined" ? globalThis : this);
