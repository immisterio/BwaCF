class PornHub {

    async fetch(init, request, fp, outHeaders) {
        let outBody;
        let uri = new URL(request.url);
        let params = uri.searchParams;
        let url = request.url.substr(8); 
        url = decodeURIComponent(url.substr(url.indexOf('/') + 5));
        url = this.fixUrl(url, params);

        fp.headers['cookie'] = 'platform=pc; bs=ukbqk2g03joiqzu68gitadhx5bhkm48j; ss=250837987735652383; fg_0d2ec4cbd943df07ec161982a603817e=56239.100000; atatusScript=hide; _gid=GA1.2.309162272.1686472069; d_fs=1; d_uidb=2f5e522a-fa28-a0fe-0ab2-fd90f45d96c0; d_uid=2f5e522a-fa28-a0fe-0ab2-fd90f45d96c0; d_uidb=2f5e522a-fa28-a0fe-0ab2-fd90f45d96c0; accessAgeDisclaimerPH=1; cookiesBannerSeen=1; _gat=1; __s=64858645-42FE722901BBA6E6-125476E1; __l=64858645-42FE722901BBA6E6-125476E1; hasVisited=1; fg_f916a4d27adf4fc066cd2d778b4d388e=78731.100000; fg_fa3f0973fd973fca3dfabc86790b408b=12606.100000; _ga_B39RFFWGYY=GS1.1.1686472069.1.1.1686472268.0.0.0; _ga=GA1.1.1515398043.1686472069';

        let fr = (await fetch(url, fp));

        /*return new Response(await fr.text(), 
            { headers: { "Content-Type": "text/html" } }
        );*/

        if (url.indexOf('viewkey=') >= 0) { 
            outBody = this.StreamLinks(init, await fr.text());
        } else {
            outBody = {
                menu: this.Menu(init, params),
                list: this.Playlist(init, await fr.text(), false)
            };
        }

        outHeaders.set("content-type", 'application/json; charset=utf-8');

        return new Response(JSON.stringify(outBody), {
            status: fr.status,
            statusText: fr.statusText,
            headers: outHeaders
        })
    }

    fixUrl(url, params) {
        if (url.indexOf('search=') >= 0) {
            return "https://rt.pornhub.com/video/search?search=" + encodeURIComponent(params.get('search')) + (params.has('pg') ? `&page=${params.get('pg')}` : '');
        } else if (url.indexOf('viewkey=') >= 0) {
            return "https://rt.pornhub.com" + url;
        }

        return "https://rt.pornhub.com/video" + url.replace('pg=', 'page=').replace('c=&', '').replace('o=&', '');
    }


    Playlist(init, html, related) {
        let videoCategory = null;
        const playlists = [];

        if (related) {
            const ids = html.split("id=\"relatedVideosCenter\"");
            if (ids.length > 1)
                videoCategory = ids[1];
        } else if (html.includes("id=\"videoCategory\"")) {
            const ids = html.split("id=\"videoCategory\"");
            if (ids.length > 1)
                videoCategory = ids[1];
        } else {
            const videorows = html.split(/id="(content-tv-container|lazyVids|videoSearchResult)"/);
            if (videorows.length > 2)
                videoCategory = videorows[2];
        }

        if (videoCategory == null)
            return playlists;

        const splitkey = videoCategory.includes("pcVideoListItem ") ? "pcVideoListItem " : videoCategory.includes("data-video-segment") ? "data-video-segment" : "<li data-id=";
        const videoRows = videoCategory.split("<h2>Languages</h2>")[0].split(splitkey);

        for (let i = 1; i < videoRows.length; i++) {
            const row = videoRows[i];

            function m(pattern, index = 1) {
                const res = row.match(pattern)?.[index] || null;
                if (!res || res.trim() === "")
                    return null;

                return res;
            }

            const vkey = m("(-|_)vkey=\"([^\"]+)\"", 2) || m("viewkey=([^\"]+)\"");
            if (vkey == null)
                continue;

            const title = m("href=\"/[^\"]+\" title=\"([^\"]+)\"") || m("class=\"videoTitle\">([^<]+)<") || m("href=\"/view_[^\"]+\" onclick=[^>]+>([^<]+)<");
            if (title == null)
                continue;

            const img = m("data-mediumthumb=\"(https?://[^\"]+)\"") || m("data-path=\"(https?://[^\"]+)\"")?.replace("{index}", "3") || m("<img src=\"([^\"]+)\"");
            if (img == null)
                continue;

            const pl = {
                name: title,
                video: init.host + '/phub/view_video.php?viewkey=' + vkey,
                picture: img,
                preview: init.proxy + m("data-mediabook=\"(https?://[^\"]+)\""),
                time: m("<var class=\"duration\">([^<]+)</var>") || m("class=\"time\">([^<]+)<") || m("class=\"videoDuration floatLeft\">([^<]+)<"),
                json: true
            };

            playlists.push(pl);

            if (playlists.length === 32)
                break;
        }

        return playlists;
    }


    StreamLinks(init, html) {
        var link = this.getDirectLinks(html).replace(/\\/g, "").replace("///", "//");
        return {
            qualitys: {
                auto: link
            },
            qualitys_proxy: {
                auto: init.proxy + link
            },
            recomends: this.Playlist(init, html, true)
        };
    }


    getDirectLinks(pageCode) {
        const vars = [];

        let hls = pageCode.match("\"hls\",\"videoUrl\":\"([^\"]+urlset\\\\/master\\.m3u[^\"]+)\"")[1];
        if (hls)
            return hls;

        let mainParamBody = pageCode.split('player_mp4_seek')[1].split('</script>')[0];
        mainParamBody = mainParamBody.replace(/\/\*[^/]+\*\//g, "");
        mainParamBody = mainParamBody.replace('" + "', '');

        for (const currVar of mainParamBody.matchAll(/var ([^=]+)=([^;]+);/g))
            vars.push([currVar[1], currVar[2].replace(/\"/g, "").replace(' + ', '')]);

        for (const m of mainParamBody.matchAll(/var media_([0-9]+)=([^;]+);/g)) {
            let link = "";

            for (const curr of m[2].replace(/ /g, "").split('+')) {
                const param = vars.find(x => x[0] === curr)?.[1];
                if (param === undefined)
                    continue;

                link += param;
            }

            if (link.includes("urlset/master.m3u8"))
                return link;
        }

        return null;
    }


    Menu(init, params) {
        var sort = params.get("o") || '';
        var c = params.get("c") || '';
        var host = init.host + '/phub';

        var sortmenu = [{
                title: "Недавно в избранном",
                playlist_url: host,
            },
            {
                title: "Новейшее",
                playlist_url: host + `?c=${c}&o=cm`,
            },
            {
                title: "Самые горячие",
                playlist_url: host + `?c=${c}&o=ht`,
            },
            {
                title: "Лучшие",
                playlist_url: host + `?c=${c}&o=tr`,
            }
        ]

        var catmenu = [{
                title: "Все",
                playlist_url: host + `?o=${sort}`
            },
            {
                title: "Женский Выбор",
                playlist_url: host + `?o=${sort}&c=73`
            },
            {
                title: "Русское",
                playlist_url: host + `?o=${sort}&c=99`
            },
            {
                title: "Немецкое",
                playlist_url: host + `?o=${sort}&c=95`
            },
            {
                title: "60FPS",
                playlist_url: host + `?o=${sort}&c=105`
            },
            {
                title: "Азиатки",
                playlist_url: host + `?o=${sort}&c=1`
            },
            {
                title: "Анальный секс",
                playlist_url: host + `?o=${sort}&c=35`
            },
            {
                title: "Арабское",
                playlist_url: host + `?o=${sort}&c=98`
            },
            {
                title: "БДСМ",
                playlist_url: host + `?o=${sort}&c=10`
            },
            {
                title: "Безобидный контент",
                playlist_url: host + `?o=${sort}&c=221`
            },
            {
                title: "Бисексуалы",
                playlist_url: host + `?o=${sort}&c=76`
            },
            {
                title: "Блондинки",
                playlist_url: host + `?o=${sort}&c=9`
            },
            {
                title: "Большая грудь",
                playlist_url: host + `?o=${sort}&c=8`
            },
            {
                title: "Большие члены",
                playlist_url: host + `?o=${sort}&c=7`
            },
            {
                title: "Бразильское",
                playlist_url: host + `?o=${sort}&c=102`
            },
            {
                title: "Британское",
                playlist_url: host + `?o=${sort}&c=96`
            },
            {
                title: "Брызги",
                playlist_url: host + `?o=${sort}&c=69`
            },
            {
                title: "Брюнетки",
                playlist_url: host + `?o=${sort}&c=11`
            },
            {
                title: "Буккаке",
                playlist_url: host + `?o=${sort}&c=14`
            },
            {
                title: "В школе",
                playlist_url: host + `?o=${sort}&c=88`
            },
            {
                title: "Веб-камера",
                playlist_url: host + `?o=${sort}&c=61`
            },
            {
                title: "Вечеринки",
                playlist_url: host + `?o=${sort}&c=53`
            },
            {
                title: "Гонзо",
                playlist_url: host + `?o=${sort}&c=41`
            },
            {
                title: "Грубый секс",
                playlist_url: host + `?o=${sort}&c=67`
            },
            {
                title: "Групповуха",
                playlist_url: host + `?o=${sort}&c=80`
            },
            {
                title: "Двойное проникновение",
                playlist_url: host + `?o=${sort}&c=72`
            },
            {
                title: "Девушки (соло)",
                playlist_url: host + `?o=${sort}&c=492`
            },
            {
                title: "Дрочит",
                playlist_url: host + `?o=${sort}&c=20`
            },
            {
                title: "Европейцы",
                playlist_url: host + `?o=${sort}&c=55`
            },
            {
                title: "Женский оргазм",
                playlist_url: host + `?o=${sort}&c=502`
            },
            {
                title: "Жесткий секс",
                playlist_url: host + `?o=${sort}&c=21`
            },
            {
                title: "За кадром",
                playlist_url: host + `?o=${sort}&c=141`
            },
            {
                title: "Звезды",
                playlist_url: host + `?o=${sort}&c=12`
            },
            {
                title: "Золотой дождь",
                playlist_url: host + `?o=${sort}&c=211`
            },
            {
                title: "Зрелые",
                playlist_url: host + `?o=${sort}&c=28`
            },
            {
                title: "Игрушки",
                playlist_url: host + `?o=${sort}&c=23`
            },
            {
                title: "Индийское",
                playlist_url: host + `?o=${sort}&c=101`
            },
            {
                title: "Итальянское",
                playlist_url: host + `?o=${sort}&c=97`
            },
            {
                title: "Кастинги",
                playlist_url: host + `?o=${sort}&c=90`
            },
            {
                title: "Колледж",
                playlist_url: host + `?o=${sort}&c=79`
            },
            {
                title: "Кончают",
                playlist_url: host + `?o=${sort}&c=16`
            },
            {
                title: "Корейское",
                playlist_url: host + `?o=${sort}&c=103`
            },
            {
                title: "Косплей",
                playlist_url: host + `?o=${sort}&c=241`
            },
            {
                title: "Красотки",
                playlist_url: host + `?o=${sort}&c=5`
            },
            {
                title: "Кремпай",
                playlist_url: host + `?o=${sort}&c=15`
            },
            {
                title: "Кунилингус",
                playlist_url: host + `?o=${sort}&c=131`
            },
            {
                title: "Курящие",
                playlist_url: host + `?o=${sort}&c=91`
            },
            {
                title: "Латинки",
                playlist_url: host + `?o=${sort}&c=26`
            },
            {
                title: "Любительское",
                playlist_url: host + `?o=${sort}&c=3`
            },
            {
                title: "Маленькая грудь",
                playlist_url: host + `?o=${sort}&c=59`
            },
            {
                title: "Мамочки",
                playlist_url: host + `?o=${sort}&c=29`
            },
            {
                title: "Массаж",
                playlist_url: host + `?o=${sort}&c=78`
            },
            {
                title: "Мастурбация",
                playlist_url: host + `?o=${sort}&c=22`
            },
            {
                title: "Межрассовый Секс",
                playlist_url: host + `?o=${sort}&c=25`
            },
            {
                title: "Минет",
                playlist_url: host + `?o=${sort}&c=13`
            },
            {
                title: "Мулаты",
                playlist_url: host + `?o=${sort}&c=17`
            },
            {
                title: "Мультики",
                playlist_url: host + `?o=${sort}&c=86`
            },
            {
                title: "Мускулистые Мужчины",
                playlist_url: host + `?o=${sort}&c=512`
            },
            {
                title: "На публике",
                playlist_url: host + `?o=${sort}&c=24`
            },
            {
                title: "Ноги",
                playlist_url: host + `?o=${sort}&c=93`
            },
            {
                title: "Няни",
                playlist_url: host + `?o=${sort}&c=89`
            },
            {
                title: "Пародия",
                playlist_url: host + `?o=${sort}&c=201`
            },
            {
                title: "Пенсионеры / подростки",
                playlist_url: host + `?o=${sort}&c=181`
            },
            {
                title: "Подростки",
                playlist_url: host + `?o=${sort}&c=37`
            },
            {
                title: "Попки",
                playlist_url: host + `?o=${sort}&c=4`
            },
            {
                title: "Приколы",
                playlist_url: host + `?o=${sort}&c=32`
            },
            {
                title: "Ретро",
                playlist_url: host + `?o=${sort}&c=43`
            },
            {
                title: "Рогоносцы",
                playlist_url: host + `?o=${sort}&c=242`
            },
            {
                title: "Ролевые Игры",
                playlist_url: host + `?o=${sort}&c=81`
            },
            {
                title: "Романтическое",
                playlist_url: host + `?o=${sort}&c=522`
            },
            {
                title: "Рыжие",
                playlist_url: host + `?o=${sort}&c=42`
            },
            {
                title: "Секс втроем",
                playlist_url: host + `?o=${sort}&c=65`
            },
            {
                title: "Секс-оргия",
                playlist_url: host + `?o=${sort}&c=2`
            },
            {
                title: "Семейные фантазии",
                playlist_url: host + `?o=${sort}&c=444`
            },
            {
                title: "Страпон",
                playlist_url: host + `?o=${sort}&c=542`
            },
            {
                title: "Стриптиз",
                playlist_url: host + `?o=${sort}&c=33`
            },
            {
                title: "Татуированные Женщины",
                playlist_url: host + `?o=${sort}&c=562`
            },
            {
                title: "Толстушки",
                playlist_url: host + `?o=${sort}&c=6`
            },
            {
                title: "Трансвеститы",
                playlist_url: host + `?o=${sort}&c=83`
            },
            {
                title: "Удовлетворение пальцами",
                playlist_url: host + `?o=${sort}&c=592`
            },
            {
                title: "Фетиш",
                playlist_url: host + `?o=${sort}&c=18`
            },
            {
                title: "Фистинг",
                playlist_url: host + `?o=${sort}&c=19`
            },
            {
                title: "Французское",
                playlist_url: host + `?o=${sort}&c=94`
            },
            {
                title: "Хентай",
                playlist_url: host + `?o=${sort}&c=36`
            },
            {
                title: "Чешское",
                playlist_url: host + `?o=${sort}&c=100`
            },
            {
                title: "Японцы",
                playlist_url: host + `?o=${sort}&c=111`
            }
        ]

        var sortname = sortmenu.find(i => i.playlist_url.endsWith(`&o=${sort}`));
        var catname = catmenu.find(i => i.playlist_url.endsWith(`&c=${c}`));

        return [{
                title: "Поиск",
                search_on: "search_on",
                playlist_url: host,
            },
            {
                title: "Сортировка: " + (sortname ? sortname.title : 'Недавно в избранном'),
                playlist_url: "submenu",
                submenu: sortmenu
            },
            {
                title: "Категория: " + (catname ? catname.title : 'Все'),
                playlist_url: "submenu",
                submenu: catmenu
            }
        ]
    }
}

export default PornHub;