import $ from 'jquery';
import plugin from 'malihu-custom-scrollbar-plugin';

plugin($);

const lyric = `
  《海豚刑警悲傷物語》- 海豚刑警

  夢醒之後 反正是什ㄇ都妹有
  海豚ㄉ窩 只有眼罩和一盆盆香油
  姍姍ㄉ流動

  黑夜盡頭 是一層層包圍ㄉ鎖
  細數白晝 帶著浴帽做漢堡無限量ㄉ酒
  深深ㄉ赤裸

  幻想著某一天刑警不再失落
  ８８味醬油 牽起ㄌ婐ㄉ主題狗
  墜落地球ㄉ那一秒開始夢遊
  刑警沒頭頭 只留下超人外殼與抽屜緊閉火浪德性

  整齊衣袖 像被主管扒光ㄉ螺
  繁天星空 花錢喝麥香也找ㄅ到婐
  外太空沒有

  ☆★☆★☆★婐就這樣直接ㄉ說吧！
  之後那一天ㄋ會相信..
  可能聽著一首歌哭泣，
  站在很笨ㄉ星球只有自己！☆★☆★☆★

  夢醒之後 反正是什麼都妹有
  海豚ㄉ窩 只有眼罩和一盆盆香油
  閃閃ㄉ流動

  愛上天使ㄉ誘惑
  沒結果 火車沒山洞
`;

$(window).on('load', function(){
  $('#content').text(lyric);

  $('#content').mCustomScrollbar({
    theme: 'dark',
    scrollButtons: { enable: true },
  });
});
