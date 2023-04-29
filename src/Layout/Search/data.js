import { v4 as uuid } from "uuid";

export const posts = [
  {
    id: uuid(),
    displayName: "Hải đăng",
    avatarUrl:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/323024105_923579831991876_8843654213659125002_n.jpg?stp=dst-jpg_p148x148&_nc_cat=100&ccb=1-7&_nc_sid=aa3c98&_nc_ohc=eiQR1k2Mu_8AX_Sqisi&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfBQZV5g0aPaX-3L8ZdEdBtjUD_qKTwxK_-0F0ZrYOp6_A&oe=6450CEF7",
    content: `Chào mọi người, em mới hoàn thành clone trang web Spotify bằng Reactjs.
    Tech:
    Reactjs
    Redux-toolkit
    Scss
    MUI
    Axios
    React-router-dom, ….
    Features:
    Đăng nhập, đăng xuất
    Play, replay, next, prev, change volume, bài hát
    Thêm, xóa bài hát, playlist, album, podcast yêu thích
    Tạo playlist
    Edit details playlist
    Thêm, xóa bài hát vào my playlist
    Follow nghệ sĩ
    Và một số tính năng khác
    Do spotify yêu cầu tài khoản premium nên 1 số tính năng em không clone được.
    Rất mong mọi người có thể xem qua và góp ý cho em về trang web ạ.
    Vì để mọi người đăng nhập bằng account riêng thì phải làm đơn đăng kí lên spotify, nên mọi người đăng nhập bằng tài khoản, mật khẩu dưới đây giúp em với ạ.`,
    createdAt: "1 hours ago",
  },
];

export const pages = [
  {
    namePage: "Học lập trình F8",
    photoURL:
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/313209665_526415922829139_1931573599479211662_n.png?stp=c25.0.64.64a_cp0_dst-png_p64x64&_nc_cat=107&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=4i2szxrVVFAAX-E8pDm&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfA35YweOG4wzYXYLwqTfOIIkFpgm667Fn_01wH5eEZsZA&oe=64512028",
    id: uuid(),
    des: "Tại F8, các khóa học luôn có phần thực hành để làm ra sản phẩm thực tế.",
    detail:
      "Là sản phẩm thực tế, nên luôn luôn có những kỹ thuật khó, thời lượng dài, nhiều video trên mỗi khóa học.",
  },
  {
    namePage: "Học lập trình F8",
    photoURL:
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/313209665_526415922829139_1931573599479211662_n.png?stp=c25.0.64.64a_cp0_dst-png_p64x64&_nc_cat=107&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=4i2szxrVVFAAX-E8pDm&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfA35YweOG4wzYXYLwqTfOIIkFpgm667Fn_01wH5eEZsZA&oe=64512028",
    id: uuid(),
    des: "Tại F8, các khóa học luôn có phần thực hành để làm ra sản phẩm thực tế.",
    detail:
      "Là sản phẩm thực tế, nên luôn luôn có những kỹ thuật khó, thời lượng dài, nhiều video trên mỗi khóa học.",
  },
];

export const peoples = [
  {
    name: "John",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/334099210_201585792452402_2473078645089024612_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yah6BebQlKIAX8w7l5j&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAeXZpNy5vf3yZJ_CRPhWAE0fZbC6MnkSY7rmQP27JRTw&oe=6450B37E",
  },
  {
    name: "Dương Hải Đăng",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/323024105_923579831991876_8843654213659125002_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=100&ccb=1-7&_nc_sid=2fc63d&_nc_ohc=eiQR1k2Mu_8AX_Sqisi&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCBcgYAgf75Y4Ib6_VcpJj8-t-Ek_8p7mxcud7DJWIppQ&oe=6450CEF7",
  },
  {
    name: "Lương Quang Vinh",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-1/336278597_1972796436390643_2808735501635770916_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=100&ccb=1-7&_nc_sid=2fc63d&_nc_ohc=_7AFEgqvGhkAX9VBsCT&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfCmzSM6x1fj9_tg8wgOGV5kQ5JfIPojizvVe_vqnbyy8g&oe=6451B57D",
  },
  {
    name: "Lữ Phú",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/334099210_201585792452402_2473078645089024612_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yah6BebQlKIAX8w7l5j&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAeXZpNy5vf3yZJ_CRPhWAE0fZbC6MnkSY7rmQP27JRTw&oe=6450B37E",
  },
  {
    name: "Nguyễn Quốc Việt",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/341871629_817890656595043_1716951169986999795_n.jpg?stp=dst-jpg_p160x160&_nc_cat=110&ccb=1-7&_nc_sid=2fc63d&_nc_ohc=5MRb8c3Hs68AX-3jtfF&_nc_oc=AQlKcndEEjHfrCoe6UnvKABH-q_zvyXIzVGwYIzXUo-BnL3zA4Hg7AYnsVMLieLek1I&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBb9ZbDFj-KTNIzZgrepC6tzFy8QdqKSvFJKjmH1hR-iQ&oe=64523B12",
  },
  {
    name: "Nguyễn Lợi",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/300134808_798276788007877_1384183634936892033_n.jpg?stp=cp6_dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=2fc63d&_nc_ohc=xJt6X-GYIJIAX8ixL8D&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfBTeitopf9GydXTJEUgfrSCjjQq4SKaPqtgQHCc3Psuhw&oe=64519408",
  },
  {
    name: "Thanh Bầm",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-1/324253764_1174292720115087_641435200620768919_n.jpg?stp=dst-jpg_p160x160&_nc_cat=111&ccb=1-7&_nc_sid=2fc63d&_nc_ohc=0gEYkoNGnp4AX-CYS1d&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfBIxgEK2pk6Y05wQ54T2rY2td_ZwQQR3_2GWEGHh8K80Q&oe=64511427",
  },
  {
    name: "Hồ Minh Nhân",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/317417788_1145641259678101_4823609771703744111_n.jpg?stp=dst-jpg_p160x160&_nc_cat=106&ccb=1-7&_nc_sid=2fc63d&_nc_ohc=rDys7kNKahUAX9pjSg1&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfBCncHqU3aQGeNzBrXqTFfYlMEsHfcxyZSWCKYUPQqk9A&oe=64524215",
  },
  {
    name: "Trương trọng khải",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-1/331337300_953684468974878_1926608543228332310_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=2fc63d&_nc_ohc=9_V9dCeJxJcAX8x8CBa&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfCWUTBlrsAQC3Olar4fN2SAB5NUKEkIh0lnfnYOZCQcNg&oe=645158C9",
  },
  {
    name: "Thành Lê",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/340164366_746974720360406_7121126560944171880_n.jpg?stp=dst-jpg_p160x160&_nc_cat=105&ccb=1-7&_nc_sid=2fc63d&_nc_ohc=xb_M10pA1xoAX_nRz2o&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfD1u27uKGB0NDrkdRCb_qWxstu82pWtBC5bVjzuIqwTCQ&oe=64517E4D",
  },
  {
    name: "Toàn",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p160x160&_nc_cat=1&ccb=1-7&_nc_sid=2fc63d&_nc_ohc=cG-NBXyr0AkAX9QPUdw&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfCmDN7Eo30DhFOw7FGWsMiq7Vkl5Oi9HJyRUOkjU0Op2w&oe=64741438",
  },
  {
    name: "Thanh Nghĩa",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/341455213_186089854268234_6668297215071413940_n.jpg?stp=c27.0.160.160a_dst-jpg_p160x160&_nc_cat=107&ccb=1-7&_nc_sid=2fc63d&_nc_ohc=GOxjdbpJdxEAX-6HSVB&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCU0EU-xtkvtZql4N_wgHKdtzfcPUfAFv1JbNCNz4T7_w&oe=64518D96",
  },
  {
    name: "John",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/334099210_201585792452402_2473078645089024612_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yah6BebQlKIAX8w7l5j&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAeXZpNy5vf3yZJ_CRPhWAE0fZbC6MnkSY7rmQP27JRTw&oe=6450B37E",
  },
  {
    name: "John",
    id: uuid(),
    photoURL:
      "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/334099210_201585792452402_2473078645089024612_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yah6BebQlKIAX8w7l5j&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfAeXZpNy5vf3yZJ_CRPhWAE0fZbC6MnkSY7rmQP27JRTw&oe=6450B37E",
  },
];
