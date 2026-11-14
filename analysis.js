// ==========================================================================
// 📖 《醉翁亭记》深度文本赏析数据库 (analysis.js) - 马来西亚文言文黄金范例版
// ==========================================================================

const U_TAG = (text) => `<span class="proper-noun">${text}</span>`;

const OMISSION_TAG = (role, text) => 
    `<span style="display:inline-block; background:var(--wrong-bg); color:var(--wrong-text); border:1px dashed var(--wrong-border); padding:0 6px; margin:0 2px; border-radius:4px; font-size:12.5px; font-weight:800;" title="文言省略句补全成分">＋${role}：${text}</span>`;

const GRAMMAR_TAG = (type, text) => 
    `<span style="display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.22); padding:2px 8px; margin:2px 4px 2px 0; border-radius:5px; font-size:12px; font-weight:800; vertical-align:top;">${type}：${text}</span>`;

const ANCIENT_MODERN_TAG = (word, ancient, modern) => 
    `<div style="display:inline-flex; flex-direction:column; background:var(--notebook-bg); border:1px solid rgba(43,76,101,0.22); padding:5px 10px; margin:3px 6px 3px 0; border-radius:6px; font-size:12px; line-height:1.55; vertical-align:middle;">` +
        `<div style="color:var(--primary-color); font-weight:800;">🔹 【${word}】古义：${ancient}</div>` +
        `<div style="color:var(--text-muted); font-weight:600; border-top:1px dashed var(--input-border); margin-top:2px; padding-top:2px;">🔸 【${word}】今义：${modern}</div>` +
    `</div>`;

const CARET = `<span style="color:var(--wrong-color); font-weight:800; padding:0 2px;" title="此处省略了句子成分">‸</span>`;

const lessonTeacherAnalysis = {
    overview: "<strong>【全文白话译文（含省略成分补全）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:6px; line-height:1.95;'>" +
        "<strong>（第1段）</strong>环绕着" + U_TAG("滁州") + "城的都是山。它西南方的各个山峰，树林和山谷尤其优美。远远望去树木茂盛、幽深秀丽的，是" + U_TAG("琅琊山") + "。沿着山路走六七里，渐渐听到水声潺潺，从两座山峰之间倾泻出来的，是酿泉。山势回环，山路弯转，有一座亭子像鸟儿张开翅膀一样靠近在泉水之上的，是醉翁亭。建造亭子的人是" + OMISSION_TAG("判断词", "谁") + "？是山里的僧人" + U_TAG("智仙") + "。给它取名的人是谁？是太守用自己的别号命名的。太守和宾客来到这里饮酒，喝一点点酒就醉了，而且年龄又最大，所以给自己取别号叫“醉翁”。醉翁的情趣不在于喝酒，而在于山水之间啊。欣赏山水的乐趣，领会" + OMISSION_TAG("介词", "于") + "心间，而寄托" + OMISSION_TAG("介词", "于") + "饮酒之中啊。<br>" +
        "<strong>（第2段）</strong>至于太阳出来而树林间的云雾散开，烟云聚拢而山谷洞穴变得昏暗，朝暮明暗交替变化的，是山间的早晨和傍晚。野花开放而散发清幽的香气，美好的树木枝叶滋长而形成浓郁的绿荫，秋风高爽、霜色洁白，溪水落下而溪石显露出来的，是山间的四季景象。早晨前往，傍晚归来，四季的景色各不相同，而那乐趣也是无穷无尽的啊。<br>" +
        "<strong>（第3段）</strong>至于背着东西的人在路上唱歌，走路的人在树下休息，前面的人呼喊，后面的人回应，老人弯着腰走，小孩由大人牵着走，来来往往络绎不绝的，是" + U_TAG("滁州") + "的百姓在出游。来到溪边捕鱼，溪水深而鱼儿肥美；" + OMISSION_TAG("介词", "用") + "酿泉的水酿酒，泉水清香而酒水清冽。野味和野菜错杂地摆在面前的，是太守举行的酒宴。宴会喝酒尽兴的乐趣，不在于管弦音乐，玩投壶的人投中了，下围棋的人赢了，酒杯和酒筹交互错杂，站起坐下大声说笑的，是众位宾客在尽情欢乐。容颜苍老、头发花白，醉醺醺地坐在众人中间的，是喝醉了的太守。<br>" +
        "<strong>（第4段）</strong>不久夕阳落在山头，游人的身影散乱，太守回去而宾客跟从在后。树林枝叶茂密成荫，鸟儿在树林高处和低处到处鸣叫，是游人离开后鸟儿在欢乐啊。然而鸟儿只懂得山林的乐趣，却不懂得游人的乐趣；游人只懂得跟随太守游玩的乐趣，却不懂得太守是以他们的快乐为自己的快乐啊。喝醉了能够同大家一起享受快乐，酒醒后能够用文章记述" + OMISSION_TAG("宾语", "这乐事") + "的人，就是太守。太守是谁？是" + U_TAG("庐陵") + "人" + U_TAG("欧阳修") + "啊。" +
        "</span><br><br>" +
        "<strong>【古代文化常识与阅读提示（课本第27页）】</strong><br>" +
        "<span style='font-weight:500; display:inline-block; margin-top:4px;'>《醉翁亭记》作于北宋庆历六年（1046年），当时作者" + U_TAG("欧阳修") + "（字永叔，号醉翁、六一居士，唐宋八大家之一）因支持" + U_TAG("范仲淹") + "“庆历新政”而被贬为" + U_TAG("滁州") + "太守。相传欧阳修初稿开头写了数十句描写滁州四面诸山，最终全部删去，只留精炼传神的<strong>“环滁皆山也”</strong>五字。全篇共用了<strong>21个“也”字</strong>和<strong>25个“而”字</strong>，以<strong>“乐”和“醉”</strong>为主线，层层递进写出<strong>“山水之乐 → 滁人之乐 → 众宾之乐 → 太守之乐（与民同乐）”</strong>，开创了宋代记体散文借景抒情、托物言志的新典范。</span>",

    paragraphs: {
        1: "<strong>【第1段：由面及点聚焦醉翁亭，点明“醉翁之意不在酒”】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[环]" + U_TAG("滁") + "皆山也。其西南诸峰，[林壑]尤美。望之[蔚然]而深秀[者]，" + U_TAG("琅琊") + "[也]。[山]行六七里，渐闻水声潺潺，而泻出[于]两峰之间者，酿泉也。[峰回路转]，有亭[翼然][临]于泉上者，醉翁亭也。作亭者谁？山之僧" + U_TAG("智仙") + "也。[名]之者谁？太守[自谓]也。太守与客来饮于此，饮少[辄]醉，而年又最高，故自号曰醉翁也。醉翁之[意]不在酒，[在乎]山水之间也。山水之乐，得之" + CARET + "心而[寓]之" + CARET + "酒也。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[环绕着]✓" + U_TAG("滁州") + "城的都是山。它西南方的各个山峰，[树林和山谷]✓尤其优美。远远望去[树木茂盛]✓又幽深秀丽的，[是]✓" + U_TAG("琅琊山") + "。[沿着山路]✓走六七里，渐渐听见水声潺潺，[从]✓两峰之间倾泻出来的，是酿泉。[山势回环，山路弯转]✓，有座亭子[像鸟儿张开翅膀一样]✓[靠近/居高面下]✓在泉水之上的，是醉翁亭。建造亭子的人是谁？是山里的僧人" + U_TAG("智仙") + "。[给它命名]✓的人是谁？是太守[用自己的别号命名]✓的。太守与宾客来这里饮酒，喝一点点[就]✓醉，而且年纪又最大，所以自取别号叫醉翁。醉翁的[情趣]✓不在于酒，而[在于]✓山水之间啊。欣赏山水的乐趣，领会" + OMISSION_TAG("介词", "于") + "心间而[寄托]✓" + OMISSION_TAG("介词", "于") + "饮酒之中啊。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("意", "情趣、意趣（名词）", "意思、心意") +
                       ANCIENT_MODERN_TAG("名（名之）", "给……命名（名词作动词）", "名字、名称") +
                       GRAMMAR_TAG("课本阅读指引（移步换景）", "环滁皆山 → 西南诸峰 → 琅琊山 → 酿泉 → 醉翁亭（由远及近，从大到小）") +
                       GRAMMAR_TAG("名词作状语", "山行（沿着山路）／ 翼然（像鸟张开翅膀一样）") +
                   "</div>" +
               "</div>" +
           "</div>",

        2: "<strong>【第2段：山间之朝暮与四时之景——山水之乐无穷】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[若夫]日出而林[霏]开，云[归]而岩穴[暝]，[晦明]变化者，山间之朝暮也。[野芳][发]而幽香，佳木[秀]而[繁阴]，风霜高洁，水落而石出者，山间之[四时]也。朝而往，暮而归，四时之景不同，而乐亦无穷也。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[至于/像那]✓太阳出来而林间的[云雾]✓散开，烟云[聚拢]✓而山谷洞穴变得[昏暗]✓，[明暗交替]✓变化的，是山间的早晨和傍晚。[野花]✓[开放]✓而散发清幽的香气（春），美好的树木[枝叶滋长繁茂]✓而形成[浓郁的绿荫]✓（夏），秋风高爽、霜色洁白（秋），溪水落下而石头显露出来的（冬），是山间的[四季]✓景象。早晨前往，傍晚归来，四季的景色各不相同，因而乐趣也是无穷无尽的啊。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("归（云归）", "聚集、聚拢", "返回、回家") +
                       ANCIENT_MODERN_TAG("发（野芳发）", "开放、开花", "出发、发生") +
                       ANCIENT_MODERN_TAG("秀（佳木秀）", "开花，此指枝叶滋长繁茂", "秀丽、优秀") +
                       GRAMMAR_TAG("对偶与通假字", "日出而林霏开，云归而岩穴暝 ／ 繁阴（“阴”通“荫”）") +
                       GRAMMAR_TAG("派生固定成语", "水落石出（文中本指冬日溪水退落石头显露之自然景象）") +
                   "</div>" +
               "</div>" +
           "</div>",

        3: "<strong>【第3段：滁人游 → 太守宴 → 众宾欢 → 太守醉（四幅动态风俗画）】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "至于[负者]歌[于]途，行者休[于]树，前者呼，后者应，[伛偻][提携]，往来而不绝者，" + U_TAG("滁") + "人游也。[临]溪而[渔]，溪深而鱼肥；" + CARET + "酿泉为酒，泉香而酒[洌]。[山肴][野蔌]，杂然而前[陈]者，太守宴也。[宴酣]之乐，非[丝]非[竹]，[射]者[中]，[弈]者胜，[觥筹交错]，起坐而喧哗者，众宾欢也。[苍颜]白发，[颓然][乎]其间者，太守醉也。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "至于[背着东西的人]✓[在]✓路上唱歌，走路的人[在]✓树下休息，前面的人呼喊，后面的人回应，[弯腰的老人]✓和[被牵着走的小孩]✓，来来往往络绎不绝的，是" + U_TAG("滁州") + "人在出游。[来到]✓溪边[钓鱼/捕鱼]✓，溪水深而鱼儿肥；" + OMISSION_TAG("介词", "用") + "酿泉的水酿酒，泉水香而酒水[清澈]✓。[山野的肉菜]✓和[野菜]✓，错杂地在面前[摆开]✓的，是太守在设宴。[宴会喝酒尽兴]✓的乐趣，不在于[弦乐器]✓和[管乐器]✓，[玩投壶]✓的人[投中了]✓，[下围棋]✓的人赢了，[酒杯和酒筹交互错杂]✓，站起坐下大声说笑的，是众位宾客在欢乐。[容颜苍老]✓、头发花白，[醉醺醺地坐]✓[在]✓众人中间的，是太守喝醉了。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("提携", "由大人牵着走的小孩", "扶持后辈") +
                       ANCIENT_MODERN_TAG("陈", "陈列、摆开（动词）", "陈旧、姓氏") +
                       GRAMMAR_TAG("借代修辞", "伛偻（老人） ／ 提携（儿童） ／ 丝竹（管弦音乐）") +
                       GRAMMAR_TAG("状语后置句", "负者歌于途，行者休于树 ＝ 于途歌，于树休") +
                       GRAMMAR_TAG("派生固定成语", "觥筹交错") +
                   "</div>" +
               "</div>" +
           "</div>",

        4: "<strong>【第4段：夕阳散归，点亮全篇主旨——“太守之乐其乐也”】</strong>" +
           "<div style='margin-top:10px; display:flex; flex-direction:column; gap:10px;'>" +
               "<div style='padding:12px 15px; background:var(--card-bg); border:1px solid var(--input-border); border-radius:8px; line-height:1.8;'>" +
                   "<div style='color:var(--text-color); font-weight:800;'>" +
                       "<span style='display:inline-block; background:var(--primary-color); color:#fff; font-size:11px; padding:1px 6px; border-radius:4px; margin-right:8px;'>原</span>" +
                       "[已而]夕阳在山，人影散乱，太守归而宾客从也。树林[阴翳]，鸣声[上下]，游人[去]而禽鸟乐也。然而禽鸟知山林之乐，而不知人之乐；人知从太守游而乐，而不知太守之[乐]其[乐]也。醉能[同]其乐，醒能[述]" + CARET + "[以]文者，太守也。太守[谓]谁？" + U_TAG("庐陵") + U_TAG("欧阳修") + "也。" +
                   "</div>" +
                   "<div style='color:var(--primary-color); font-weight:500; margin-top:6px;'>" +
                       "<span style='display:inline-block; background:var(--notebook-bg); color:var(--primary-color); border:1px solid rgba(43,76,101,0.25); font-size:11px; font-weight:800; padding:0 6px; border-radius:4px; margin-right:8px;'>译</span>" +
                       "[不久]✓夕阳落在山头，游人的身影散乱，太守回去而宾客跟从在后。树林[枝叶茂密成荫]✓，鸟鸣声[在高低树林间到处响起]✓，游人[离开]✓而鸟儿在欢乐啊。然而鸟儿只懂得山林的乐趣，却不懂得人的乐趣；人们只懂得跟随太守游玩的乐趣，却不懂得太守是[以]✓他们的[快乐]✓[为快乐]✓啊。喝醉了能[同享]✓他们的快乐，酒醒后能[用]✓文章[记述]✓" + OMISSION_TAG("宾语", "这件事") + "的人，就是太守。太守[是]✓谁？是" + U_TAG("庐陵") + "人" + U_TAG("欧阳修") + "啊。" +
                   "</div>" +
                   "<div style='margin-top:8px; padding-top:6px; border-top:1px dashed var(--input-border);'>" +
                       ANCIENT_MODERN_TAG("去（游人去）", "离开（动词）", "前往某处") +
                       GRAMMAR_TAG("意动用法（全篇文眼）", "乐其乐 ＝ 以其乐为乐（把百姓的快乐当作自己的快乐 → 与民同乐）") +
                       GRAMMAR_TAG("层递衬托手法", "禽鸟之乐 → 游人之乐 → 太守之乐（三层递进，升华政治理想）") +
                       GRAMMAR_TAG("状语后置句", "醒能述（之）以文 ＝ 醒能以文述（之）") +
                   "</div>" +
               "</div>" +
           "</div>"
    }
};
