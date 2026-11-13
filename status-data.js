// Named effects applied by Factors and by the two native Companion projectiles.
// null icons indicate tracked effects without a separate buff icon.
window.WIKI_STATUSES = {
  poison:{en:'Poisoned',ja:'毒',icon:'vanilla_20.png',kind:'debuff',desc:'A poison effect that deals damage over time.',descJa:'継続ダメージを与える毒です。'},
  fire:{en:'On Fire!',ja:'炎上',icon:'vanilla_24.png',kind:'debuff',desc:'Burning causes damage over time.',descJa:'炎による継続ダメージを受けます。'},
  frostburn:{en:'Frostburn',ja:'凍傷',icon:'vanilla_44.png',kind:'debuff',desc:'Cold fire inflicts damage over time.',descJa:'冷たい炎による継続ダメージを受けます。'},
  hellfire:{en:'Hellfire',ja:'地獄の炎',icon:'vanilla_323.png',kind:'debuff',desc:'A powerful burning effect that deals damage over time.',descJa:'強い炎による継続ダメージを受けます。'},
  shadowflame:{en:'Shadowflame',ja:'シャドウフレイム',icon:'vanilla_153.png',kind:'debuff',desc:'Shadowflame deals damage over time.',descJa:'シャドウフレイムによる継続ダメージを受けます。'},
  bleeding:{en:'Bleeding',ja:'出血',icon:'vanilla_30.png',kind:'debuff',desc:'Prevents natural regeneration; Blood Tears also gives its enemy version periodic damage.',descJa:'自然回復を防ぎます。Blood Tears の敵への出血には定期ダメージもあります。'},
  wet:{en:'Wet',ja:'濡れ',icon:'vanilla_103.png',kind:'debuff',desc:'Marks the target as wet and interacts with effects such as Squid Ink and Frost Step.',descJa:'対象を濡れ状態にし、Squid Ink や Frost Step などと組み合わせられます。'},
  oiled:{en:'Oiled',ja:'油まみれ',icon:'vanilla_204.png',kind:'debuff',desc:'Makes a target more vulnerable to compatible fire effects.',descJa:'対応する炎の効果に弱くなります。'},
  slimed:{en:'Slimed',ja:'スライムまみれ',icon:'vanilla_137.png',kind:'debuff',desc:'A sticky debuff that slows movement; Squid Ink can add a further slow.',descJa:'移動を遅くする粘着性のデバフです。Squid Ink と組み合わせるとさらに減速します。'},
  confused:{en:'Confused',ja:'混乱',icon:'vanilla_31.png',kind:'debuff',desc:'Disorients susceptible targets; immune enemies are unaffected.',descJa:'対応する対象を混乱させます。耐性のある敵には効きません。'},
  stinky:{en:'Stinky',ja:'悪臭',icon:'vanilla_120.png',kind:'debuff',desc:'A Terraria debuff that surrounds the target with a stink effect.',descJa:'対象の周囲に悪臭の効果を出す Terraria のデバフです。'},
  acid_venom:{en:'Acid Venom',ja:'猛毒',icon:'vanilla_70.png',kind:'debuff',desc:'A venom effect that deals damage over time.',descJa:'猛毒による継続ダメージを与えます。'},
  sand_slow:{en:'Sand Dust Slow',ja:'Sand Dust Slow',icon:null,kind:'debuff',desc:'Reduces movement speed; the amount and duration depend on Sand Dust.',descJa:'移動速度を減少させます。減速量と持続時間は Sand Dust に依存します。'},
  flash:{en:'Flash',ja:'Flash',icon:'flash_debuff_icon.png',kind:'debuff',desc:'May deflect newly fired hostile projectiles; contact damage is unchanged.',descJa:'新たに発射される敵弾の狙いをずらすことがあります。接触ダメージは変化しません。'},
  cry:{en:'Cry',ja:'Cry',icon:'cry_debuff_icon.png',kind:'debuff',desc:'Blocks natural regeneration and Blood Tears healing; supported damage-over-time pulses gain 1 damage.',descJa:'自然回復と Blood Tears の回復を防ぎ、対応する継続ダメージの各回を1増加させます。'},
  blood_moisture:{en:'Blood Tears Moisture',ja:'Blood Tears Moisture',icon:'vanilla_103.png',kind:'buff',desc:'Restores 1 HP each second; Cry pauses this healing.',descJa:'毎秒1 HPを回復します。Cry 中は回復が停止します。'},
  moisture:{en:'Moisture',ja:'Moisture',icon:'moisture_buff_icon.png',kind:'buff',desc:'Grants natural regeneration and interacts with Bubble Shield; it does not prevent burns.',descJa:'自然回復を与え、Bubble Shield と連携します。燃焼の予防効果はありません。'},
  natural_poison:{en:'Natural Poison',ja:'Natural Poison',icon:'natural_poison_debuff_icon.png',kind:'debuff',desc:'Deals periodic defense-ignoring damage based on the enemy’s contact ATK when applied.',descJa:'付与時の敵の接触 ATK に基づく、防御無視の定期ダメージを与えます。'},
  natural_poison_resistance:{en:'Natural Poison resistance',ja:'Natural Poison resistance',icon:null,kind:'buff',desc:'After Natural Poison ends, the enemy temporarily resists that poison based on the HP it lost.',descJa:'Natural Poison の終了後、敵は失った HP に応じた時間、その毒への耐性を得ます。'},
  enhanced_poison:{en:'Enhanced Poison',ja:'Enhanced Poison',icon:'enhancedpoison_debuff_icon.png',kind:'debuff',desc:'A rank-dependent poison that replaces ordinary Poisoned on eligible hits.',descJa:'対応する命中時に通常の毒を置き換える、Rank に応じた Enhanced Poison です。'},
  spore_poison:{en:'Spore Poison',ja:'Spore Poison',icon:'spore_poison_debuff_icon.png',kind:'debuff',desc:'Shared stacks deal half their amount as base damage every 0.25 seconds, then decay to one quarter.',descJa:'共有スタックの半分を0.25秒ごとに基礎ダメージとして与え、その後スタックが4分の1になります。'},
  pestilence:{en:'Pestilence',ja:'Pestilence',icon:'pestilence_debuff_icon.png',kind:'debuff',desc:'Infection stacks deal their current amount as base damage each second, then halve.',descJa:'感染スタックと同量の基礎ダメージを毎秒与え、その後スタックが半減します。'},
  snake_venom:{en:'Snake Venom',ja:'Snake Venom',icon:'snake_venom_debuff_icon.png',kind:'debuff',desc:'Deals defense-ignoring damage every 0.25 seconds; higher aptitude adds debuffs.',descJa:'0.25秒ごとに防御無視ダメージを与え、適性が高いと追加の弱体化が発生します。'},
  osteoporosis:{en:'Osteoporosis',ja:'Osteoporosis',icon:'osteoporosis_debuff_icon.png',kind:'debuff',desc:'Stacks reduce enemy DEF; strength and cap depend on the latest applier.',descJa:'スタックに応じて敵 DEF を低下させます。強さと上限は最後の付与者に依存します。'},
  necrosis:{en:'Necrosis',ja:'Necrosis',icon:'necrosis_debuff_icon.png',kind:'debuff',desc:'Limits DEF to at most 8; afterward Resistance blocks related effects temporarily.',descJa:'DEF を最大8に制限します。終了後は Resistance が関連効果を一定時間防ぎます。'},
  squid_ink:{en:'Squid Ink',ja:'Squid Ink',icon:'squid_ink_debuff_icon.png',kind:'debuff',desc:'With Wet, DEF -3; with Slimed, movement speed -9%.',descJa:'Wet と共存すると DEF -3、Slimed と共存すると移動速度 -9% になります。'},
  delicious:{en:'Delicious',ja:'Delicious',icon:'delicious_Buff.png',kind:'debuff',desc:'Surviving damage from a marked enemy heals the Predation wearer.',descJa:'印付きの敵からダメージを受けて生存すると、Predation の装着者が回復します。'},
  viral_order:{en:'Viral Order',ja:'Viral Order',icon:'purple_venom_order_buff_icon.png',kind:'buff',desc:'Grants DEF +8 and lets eligible hits inflict Acid Venom.',descJa:'DEF +8 を与え、対応する命中で猛毒を付与できるようにします。'},
  red_heat:{en:'Red Heat',ja:'Red Heat',icon:'red_heat_buff_icon.png',kind:'buff',desc:'Reduces incoming hit damage until an eligible body hit bursts the shell.',descJa:'対応する本体攻撃で殻が破裂するまで、被命中ダメージを軽減します。'},
  calm:{en:'Calm',ja:'Calm',icon:'red_heat_calm_buff_icon.png',kind:'buff',desc:'ATK -2 and DEF +4; Ice Guardian instead maintains DEF +8. Prevents new Red Heat.',descJa:'ATK -2、DEF +4。Ice Guardian 中は代わりに DEF +8。新たな Red Heat を防ぎます。'},
  ice_guardian:{en:'Ice Guardian',ja:'Ice Guardian',icon:'vanilla_44.png',kind:'buff',desc:'Ice stacks protect the recipient and maintain Calm; a hit may spend a stack to retaliate.',descJa:'氷のスタックで対象を守り Calm を維持します。被弾時はスタックを使って反撃することがあります。'},
  snow_guard:{en:'Snow Guard',ja:'Snow Guard',icon:'snow_guard_buff_icon.png',kind:'buff',desc:'Reduces enemy hit damage by 25% and retaliates as damage is taken.',descJa:'敵からの被命中ダメージを25%軽減し、ダメージを受けると反撃します。'},
  revenge:{en:'Revenge',ja:'Revenge',icon:'revenge_buff_icon.png',kind:'buff',desc:'Each stack adds 2 non-DoT damage against Vision-marked enemies.',descJa:'1スタックごとに Vision 状態の敵への DoT 以外のダメージを2増加します。'},
  avenger:{en:'Avenger',ja:'Avenger',icon:'avenger_Buff.png',kind:'buff',desc:'ATK +4 and +8 non-DoT damage against Vision-marked enemies; prevents new Revenge stacks.',descJa:'ATK +4、Vision 状態の敵への DoT 以外のダメージ +8。新たな Revenge を得ません。'},
  perceived:{en:'Perceived',ja:'Perceived',icon:'vanilla_17.png',kind:'debuff',desc:'Enemy outgoing hit damage -8 and DEF -6; prevents further Vision and Observation while active.',descJa:'敵の与命中ダメージ -8、DEF -6。持続中は Vision と Observation を受けません。'},
  vision:{en:'Vision',ja:'Vision',icon:null,kind:'debuff',desc:'Each stack lowers DEF by 1 and helps eligible allies prioritize the target.',descJa:'1スタックにつき DEF -1。対応する味方が対象を優先しやすくなります。'},
  observation:{en:'Observation',ja:'Observation',icon:null,kind:'debuff',desc:'Reduces the observed enemy’s outgoing damage; can combine with Vision into Perceived.',descJa:'観察した敵の与ダメージを減らし、Vision と組み合わさると Perceived になります。'},
  temperature:{en:'Low temperature',ja:'温度低下',icon:null,kind:'debuff',desc:'Low temperature can slow enemies and, at sufficient aptitude and thresholds, add other effects.',descJa:'温度の低下で敵を減速し、適性と温度に応じて追加効果が発生します。'},
  poison_fangs:{en:'Poison Fangs',ja:'Poison Fangs',icon:null,kind:'buff',desc:'Enables enhanced poison on eligible hits and interacts with Natural Poison and Snake Venom.',descJa:'対応する命中で Enhanced Poison を付与し、Natural Poison と Snake Venom にも作用します。'},
  nature_blessing:{en:'Nature blessing',ja:'Nature blessing',icon:null,kind:'buff',desc:'Grants DEF +2, natural regeneration +3 HP/s and reflection against enemy contact.',descJa:'DEF +2、自然回復 +3 HP/秒、敵の接触攻撃への反射を与えます。'},
  bubble:{en:'Bubble Shield',ja:'Bubble Shield',icon:null,kind:'buff',desc:'Protective bubbles reduce eligible incoming hit damage and are consumed by shielded hits.',descJa:'バブルが対応する被命中ダメージを軽減し、保護した被弾で消費されます。'},
  resistance:{en:'Resistance',ja:'Resistance',icon:null,kind:'buff',desc:'After Necrosis ends, temporarily blocks Osteoporosis, Necrosis and new or refreshed Snake Venom.',descJa:'Necrosis の終了後、Osteoporosis・Necrosis・新規または更新の Snake Venom を一定時間防ぎます。'},
  binding:{en:'Binding',ja:'Binding',icon:null,kind:'debuff',desc:'A chain deals periodic defense-ignoring damage and slows its target without pulling it.',descJa:'鎖が防御無視の定期ダメージを与え、対象を引き寄せずに減速します。'},
  gladiator:{en:'Gladiator',ja:'Gladiator',icon:null,kind:'buff',desc:'At Rank 2+, surviving an enemy hit temporarily grants DEF +8; Rank 3+ adds ATK +8.',descJa:'Rank 2以上では敵の攻撃を受けて生存すると一定時間 DEF +8。Rank 3以上では ATK +8 も得ます。'},
  phalanx:{en:'Phalanx',ja:'Phalanx',icon:null,kind:'buff',desc:'At MASTER, reduces the current Team’s incoming hit damage by 4% per living Contract Companion.',descJa:'MASTER では、現在のチームの被命中ダメージを、生存する契約コンパニオン1体ごとに4%軽減します。'},
  feeding:{en:'Predatory Feeding',ja:'Predatory Feeding',icon:null,kind:'buff',desc:'An allied Token’s defeat temporarily doubles supported attack damage and adds 2 incoming hit damage.',descJa:'味方 Token の敗北により、一時的に対応攻撃ダメージが2倍になり、被命中ダメージが2増加します。'},
  black_feather:{en:'Black Feather',ja:'Black Feather',icon:null,kind:'debuff',desc:'Stacks are spent as the marked enemy takes damage; each consumed stack heals eligible allies.',descJa:'印付きの敵がダメージを受けるとスタックを消費し、消費ごとに対象の味方を回復します。'},
  rage:{en:'Rage',ja:'Rage',icon:null,kind:'buff',desc:'Improves attack speed and damage while increasing incoming hit damage.',descJa:'攻撃速度とダメージが上がる一方、被命中ダメージも増加します。'},
  copper:{en:'Copper',ja:'Copper',icon:'copper_buff_icon.png',kind:'buff',desc:'Grants a Companion or Token ATK +4.',descJa:'コンパニオンまたは Token の ATK +4。'},
  silver:{en:'Silver',ja:'Silver',icon:'silver_buff_icon.png',kind:'buff',desc:'Grants a Companion or Token DEF +12.',descJa:'コンパニオンまたは Token の DEF +12。'},
  gold:{en:'Gold',ja:'Gold',icon:'gold_buff_icon.png',kind:'buff',desc:'Grants a Companion or Token ATK and DEF +20%.',descJa:'コンパニオンまたは Token の ATK と DEF +20%。'},
  detection:{en:'Detection',ja:'Detection',icon:'vanilla_104.png',kind:'buff',desc:'Grants the owner mining speed +15% and Luck +0.05 while support is active.',descJa:'支援中の所有者に採掘速度 +15%、Luck +0.05。'},
  fortune:{en:'Fortune',ja:'Fortune',icon:'luck_buff_icon.png',kind:'buff',desc:'Grants the critical chance and damage support of Luck Factor without changing Luck itself.',descJa:'Luck 自体を変えず、Luck Factor のクリティカル率・ダメージ支援を与えます。'}
};

// Relations describe effects that a Factor can cause, including conditional combinations.
window.FACTOR_STATUSES = {
  Binding:['binding'], BloodTears:['blood_moisture','wet','bleeding','cry'], Bloodstained:['bleeding'], Brightness:['flash'],
  BubbleShield:['bubble','snow_guard'], Cold:['temperature','frostburn'], Corrosion:['poison'], Currency:['copper','silver','gold'],
  Detection:['detection'], EightfoldFrost:['temperature'], Flame:['fire'], FrostStep:['frostburn','wet','temperature'],
  FrozenDeath:['frostburn'], FungalInfection:['poison','stinky','spore_poison','acid_venom','wet','slimed'], Gladiator:['gladiator','phalanx'],
  GreaterDemon:['shadowflame','oiled'], Host:['poison','stinky','spore_poison','acid_venom'],
  IceGuardian:['ice_guardian','calm','snow_guard'], Icicle:['temperature'], IllOmen:['black_feather'],
  LesserDemon:['hellfire','oiled'], LuckFactor:['fortune'], Moisture:['moisture'], MushroomBomb:['spore_poison'],
  Mushroom:['spore_poison'], NaturalPoison:['natural_poison','natural_poison_resistance'], Nature:['nature_blessing'], Parasitism:['confused','spore_poison'],
  Pestilence:['pestilence'], PoisonCarrier:['poison','poison_fangs','enhanced_poison'], Predation:['delicious'], PredatoryFeeding:['feeding'],
  PurpleVenom:['viral_order','poison','acid_venom'], QuickToAnger:['rage'], RankAndFile:['observation','perceived'],
  RedHeat:['red_heat','calm'], Revenge:['vision','revenge','avenger','perceived'], SandDust:['sand_slow'],
  Scavenger:['pestilence'], Scout:['observation','perceived'], SleightOfHand:['poison'],
  SnakeBone:['osteoporosis','necrosis','resistance'], SnakeVenom:['poison','snake_venom'], Spark:['fire'], Spiderling:['poison'],
  Spore:['spore_poison'], SquidInk:['oiled','wet','slimed','squid_ink'], Stare:['vision','perceived'],
  TorrentialRain:['pestilence','poison']
};

window.FACTOR_STATUS_NOTES = {
  LesserDemon:{oiled:{en:'Requires Greater Demon on the same wearer and a successful Hellfire application.',ja:'同じ装着者に Greater Demon があり、Hellfire の付与に成功する必要があります。'}}
};

window.COMPANION_NATIVE_STATUSES = {
  fire_imp:[{id:'fire',en:'Fireball hits apply it for 3 seconds.',ja:'火球の命中で3秒付与します。'}],
  salamander:[{id:'poison',en:'Poison Spit hits apply it for 5 seconds.',ja:'Poison Spit の命中で5秒付与します。'}]
};
