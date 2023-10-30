const bestSellerList = {
  title : "국내도서 종합 베스트",
  list : 
  [
  { bid : 100,
    // title : "국내도서 종합 베스트",
    bname : "퓨처 셀프",
    bname_comment : "현재와 미래가 달라지는 놀라운 혁명",
    author : "벤저민 하디",
    translator : "최은아",
    publisher : "상상스퀘어",
    pdate : "2023년 8월",
    price : 19800,
    dc : 10
  },
  { bid : 111,
    // title : "국내도서 종합 베스트",
    bname : "퓨처 셀프22222",
    bname_comment : "현재와 미래가 달라지는 놀라운 혁명",
    author : "벤저민 하디",
    translator : "최은아",
    publisher : "상상스퀘어",
    pdate : "2023년 8월",
    price : 19800,
    dc : 10
  }
]};
const realTimeBestSellerList = {
  title : "실시간 베스트",
  list : [ 
    { bid : 101,
      // title : "실시간 베스트",
    bname : "시대예보:핵개인의 시대",
    bname_comment : "",
    author : "송길영",
    translator : "",
    publisher : "교보문고",
    pdate : "2023년 9월",
    price : 21000,
    dc : 10
  }
]};

const dayBestSellerList = {
  title : "국내도서 일별 베스트",
  list : [
  { bid : 102,
    // title : "국내도서 일별 베스트",
    bname : "퓨처 셀프",    
    bname_comment : "현재와 미래가 달라지는 놀라운 혁명",
    author : "벤저민 하디",
    translator : "최은아",
    publisher : "상상스퀘어",
    pdate : "2023년 8월",
    price : 19800,
    dc : 10
  }]};

  const mothWeekBestSellerList = {
    title : "국내도서 월별 베스트",
    list : [
    { bid : 104,
      // title : "국내도서 월별 베스트",
      bname : "도시와 그 불확실한 벽",
      bname_comment : "",
      author : "무라카미 하루키",
      translator : "홍은주",
      publisher : "문학동네",
      pdate : "2023년 9월",
      price : 19500,
      dc : 10
    }]};

    const hotPriceBestSellerList = {
      title : "특가 베스트",
      list : [
      { bid : 105,
        // title : "특가 베스트",
        bname : "024년 애드워드 호퍼 ‘고독이 나를 위로한다’ 탁상달력",
        bname_comment : "",
        author : "편집부",
        translator : "",
        publisher : "북엔",
        pdate : "2023년 9월",
        price : 11500,
        dc : 10
      }]};

      const steadySellerList = {
        title : "국내도서 스테디셀러",
        list : [
        { bid : 106,
          // title : "국내도서 스테디셀러",
          bname : "불편한 편의점",
          bname_comment : "",
          author : "김호연",
          translator : "",
          publisher : "나무옆의자",
          pdate : "2021년 4월",
          price : 12600,
          dc : 10
        },
        { bid : 106,
          // title : "국내도서 스테디셀러",
          bname : "불편한 편의점222",
          bname_comment : "",
          author : "김호연",
          translator : "",
          publisher : "나무옆의자",
          pdate : "2021년 4월",
          price : 12600,
          dc : 10
        }
      ]};




export {bestSellerList, 
        realTimeBestSellerList,
        dayBestSellerList,
        mothWeekBestSellerList,
        hotPriceBestSellerList,
        steadySellerList
      };