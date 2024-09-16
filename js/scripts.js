/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    //Class time table generate
    /*
    var generateDateTable = () => {
        const ctTable = document.body.querySelector("#classtime-table");

    }
    generateDateTable();
    */

    //Video list
    let youkuVideoNameList1 = [
        "脊椎矫正教学 - 介绍",
        "上肢矫正 - 锁骨后偏(胸骨端)",
        "上肢矫正 - 锁骨前偏(胸骨端)",
        "肩关节 - 肱骨头下前偏",
        "肩关节 - 肱骨头下后偏",
        "肘关节 - 桡骨后外偏",
        "肘关节 - 尺骨后内偏",
        "腕关节-舟状骨,月状骨背侧偏",
        "掌骨头 - 背侧偏",
        "近端指骨底 - 掌侧偏",
        "指间关节",
        "下肢矫正 - 膝关节 股骨内前偏",
        "下肢矫正 - 膝关节 胫骨外后偏",
        "下肢矫正 - 上胫骨后偏",
        "下肢矫正 - 上腓骨后外偏",
        "下肢矫正 - 上腓骨后内偏",
        "下肢矫正 - 下腓骨后偏",
        "足部 - 跟骨后偏",
        "足部-1,2,3楔状骨,舟状骨下内偏",
        "足部 - 骰骨上外偏",
        "足部 - 跖骨头下偏",
        "足部 - 大拇趾外偏",
        "足部 - 趾间关节",
        "荐骨简介",
        "荐骨偏位与俯卧矫正 BP, AP(L5→P), PL, PR",
        "课本精华讲解",
        "髂骨简介",
        "髂骨偏位与侧卧矫正 AS、PI、IN、EX",
        "课本精华讲解-髂骨偏位 AS、PI、IN、EX",
        "如何选择(髂骨或荐骨)矫正",
        "曹式手法(ㄧ)专门矫正手 → 酸、痛、麻"
    ];
    let youkuVideoLinkList1 = [
        "http://v.youku.com/v_show/id_XNjE1MjYzMjI0.html",
        "http://v.youku.com/v_show/id_XNjE1Mzg0MjY0.html%20",
        "https://v.youku.com/v_show/id_XNjE1Mzg3NzA4.html",
        "http://v.youku.com/v_show/id_XNjE1MzkwOTA0.html%20",
        "http://v.youku.com/v_show/id_XNjE1MzkzNTk2.html%20",
        "http://v.youku.com/v_show/id_XNjE1Mzk2NDk2.html%20",
        "http://v.youku.com/v_show/id_XNjE1NDAwMzk2.html%20",
        "http://v.youku.com/v_show/id_XNjE1NDA4ODIw.html%20",
        "http://v.youku.com/v_show/id_XNjE1NDA4ODIw.html",
        "http://v.youku.com/v_show/id_XNjE1NDEzOTIw.html%20",
        "http://v.youku.com/v_show/id_XNjE1NDI1MDM2.html%20",
        "http://v.youku.com/v_show/id_XNjE1NDIyOTc2.html",
        "http://v.youku.com/v_show/id_XNjE1NDMzNDA0.html",
        "http://v.youku.com/v_show/id_XNjE1NDM2MTA4.html",
        "http://v.youku.com/v_show/id_XNjE5NzU5ODY4.html",
        "http://v.youku.com/v_show/id_XNjE5NzYyMzAw.html",
        "http://v.youku.com/v_show/id_XNjE5NzYzOTYw.html%20",
        "http://v.youku.com/v_show/id_XNjE5NzY1OTIw.html%20",
        "http://v.youku.com/v_show/id_XNjE5Nzg5OTQw.html",
        "http://v.youku.com/v_show/id_XNjE5NzcxNDA0.html",
        "http://v.youku.com/v_show/id_XNjE5NzcyOTUy.html",
        "http://v.youku.com/v_show/id_XNjE5NzczNzgw.html",
        "http://v.youku.com/v_show/id_XNjE5NzgyMDA4.html",
        "http://v.youku.com/v_show/id_XNjI2NzA4NDM2.html%20",
        "http://v.youku.com/v_show/id_XNjMxNDE2NDg4.html%20",
        "http://v.youku.com/v_show/id_XNjMyMjYwMTQ4.html%20",
        "http://v.youku.com/v_show/id_XNjM1MjY3MjMy.html%20",
        "http://v.youku.com/v_show/id_XNjM1NDY3ODA0.html%20",
        "http://v.youku.com/v_show/id_XNjM1NTUyNzg4.html%20",
        "http://v.youku.com/v_show/id_XNjM4MzA0Njg4.html%20",
        "http://v.youku.com/v_show/id_XNjUwMDY5MjQw.html"
    ];

    let youkuVideoNameList2 = [
        "寰椎,枢椎 - 简介",
        "寰椎-12偏位介绍 ASLA, ASL, ASLP, ASRA, ASR, ASRP,AILA, AIL, AILP, AIRA, AIR, AIRP"
    ];
    let youkuVideoLinkList2 = [
        "http://v.youku.com/v_show/id_XNjU1MTA0Nzc2.html",
        "http://v.youku.com/v_show/id_XNjU1MTE2ODU2"
    ];

    let youtubeVideoNameList1 = [
        "脊椎矫正教学 - 介绍",
        "上肢矫正 - 锁骨后偏(胸骨端)",
        "上肢矫正 - 锁骨前偏(胸骨端)",
        "肩关节 - 肱骨头下前偏",
        "肩关节 - 肱骨头下后偏",
        "肘关节 - 桡骨后外偏",
        "肘关节 - 尺骨后内偏",
        "腕关节-舟状骨,月状骨背侧偏",
        "掌骨头 - 背侧偏",
        "近端指骨底 - 掌侧偏",
        "指间关节",
        "下肢矫正 - 膝关节 股骨内前偏",
        "下肢矫正 - 膝关节 胫骨外后偏",
        "下肢矫正 - 上胫骨后偏",
        "下肢矫正 - 上腓骨后外偏",
        "下肢矫正 - 上腓骨后内偏",
        "下肢矫正 - 下腓骨后偏",
        "足部 - 跟骨后偏",
        "足部-1,2,3楔状骨,舟状骨下内偏",
        "足部 - 骰骨上外偏",
        "足部 - 跖骨头下偏",
        "足部 - 大拇趾外偏",
        "足部 - 趾间关节",
        "荐骨简介",
        "荐骨偏位与俯卧矫正 BP, AP(L5→P), PL, PR",
        "课本精华讲解-荐骨",
        "髂骨简介",
        "髂骨偏位与侧卧矫正 AS、PI、IN、EX",
        "课本精华讲解-髂骨偏位 AS、PI、IN、EX",
        "如何选择(髂骨或荐骨)矫正",
        "曹氏手法(ㄧ)专门矫正 - 手 → 酸、痛、麻"
    ];
    let youtubeVideoLinkList1 = [
        "http://youtu.be/pf3NRV58IMo",
        "http://youtu.be/WCFJCyOk1dE",
        "http://youtu.be/3a_3zDjKyEI",
        "http://youtu.be/MF4n8krYx7U",
        "http://youtu.be/wAjjrLPMeak",
        "http://youtu.be/9JYickc28Fw",
        "http://youtu.be/3N7ZmqKu1DA",
        "http://youtu.be/GTq8w-RRhLQ",
        "http://youtu.be/nENuocT_EkA",
        "http://youtu.be/uOc0SFOEXQA",
        "http://youtu.be/0_0RqVjZqwU",
        "http://youtu.be/NpofaE6-sQQ",
        "http://youtu.be/uYjchMWtDGM",
        "http://youtu.be/AyXrVt8dyeQ",
        "http://youtu.be/gfjB2OQth9I",
        "http://youtu.be/YRgcy4FhIHk",
        "http://youtu.be/n519xomYFQ8",
        "http://youtu.be/-T_aBAYe-hQ",
        "http://youtu.be/8U7ce2kD034",
        "http://youtu.be/8cbpmXuU6yU",
        "http://youtu.be/LQxmjSjA-hQ",
        "http://youtu.be/rNZsyxW2Gis",
        "http://youtu.be/-QZ1CYlGg-Y",
        "http://youtu.be/2mlZ7Z2kHjw",
        "http://youtu.be/uJPJj1f6aBw",
        "http://youtu.be/lT7Fp01NE80",
        "http://youtu.be/Sao3hF5aaXk",
        "http://youtu.be/nONgm7zv-sA",
        "http://youtu.be/DqlciVqful4",
        "http://youtu.be/QUrkqv1Hlb8",
        "http://youtu.be/0dLAP4Hw0t0"
    ];

    let youtubeVideoNameList2 = [
        "寰椎,枢椎 - 简介",
        "寰椎-12偏位介绍 ASLA, ASL, ASLP, ASRA, ASR, ASRP, AILA, AIL, AILP, AIRA, AIR, AIRP"
    ];
    let youtubeVideoLinkList2 = [
        "http://youtu.be/UUdwtgAYCBk",
        "http://youtu.be/a-NUsvnptdg"
    ];

    var generateVideoList = (listId, videoName, videoLink) => {
        var table = document.getElementById(listId);

        var header = document.createElement("tr");
        var th1 = document.createElement("th");
        th1.className = "th-boder-right";
        th1.textContent = "片名";
        var th2 = document.createElement("th");
        th2.textContent = "连结";

        header.appendChild(th1);
        header.appendChild(th2);

        table.appendChild(header);

        for (let i = 0; i < videoName.length; i++) {
            var videoRow = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.className = "text-left";
            td1.textContent = videoName[i];

            var td2 = document.createElement("td");
            var link = document.createElement("a");
            link.href = videoLink[i];
            link.textContent = videoLink[i];
            td2.appendChild(link);

            videoRow.appendChild(td1);
            videoRow.appendChild(td2);

            table.appendChild(videoRow);
        }
    }

    generateVideoList("youku-video1", youkuVideoNameList1, youkuVideoLinkList1);
    generateVideoList("youku-video2", youkuVideoNameList2, youkuVideoLinkList2);

    generateVideoList("youtube-video1", youtubeVideoNameList1, youtubeVideoLinkList1);
    generateVideoList("youtube-video2", youtubeVideoNameList2, youtubeVideoLinkList2);
});
