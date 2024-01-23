class BongaCams {

    async fetch(init, request, fp, outHeaders) {
        let outBody;
        let url = request.url.substr(8);
		url = this.fixUrl(url.substr(url.indexOf('/') + 5));
        let fr = (await fetch(url, fp));

        /*return new Response(await fr.text(), 
            { headers: { "Content-Type": "text/html" } }
        );*/

        outBody = {
			menu: this.Menu(url, init),
			list: this.Playlist(init, await fr.text())
		};

        outHeaders.set("content-type", 'application/json; charset=utf-8');

        return new Response(JSON.stringify(outBody), {
            status: fr.status,
            statusText: fr.statusText,
            headers: outHeaders
        })
    }

    fixUrl(url) {
        if (url.indexOf('?') >= 0) 
            return "https://rus.bongacams.com/" + url.replace('pg=', 'page=');

        return "https://rus.bongacams.com?" + url.replace('pg=', 'page=');
    }


    Playlist(init, html) {
        var playlists = [];

        if (!html || html.length === 0) {
            return playlists;
        }

        var rows = html.split(/class="(ls_thumb js-ls_thumb|mls_item mls_so_)/);

        rows.forEach(function(row) 
        {
            function m(pattern, index = 1) {
                const res = row.match(pattern)?.[index] || null;
                if (!res || res.trim() === "")
                    return null;

                return res;
            }

            var baba = m(/data-chathost="([^"]+)"/);
            if (!baba) {
                return;
            }

            var esid = m(/data-esid="([^"]+)"/);
            if (!esid) {
                return;
            }

            var img = m(/this.src='\/\/([^']+\.(jpg))'/);
            if (!img) {
                img = m(/src="\/\/([^"]+)"/);
            }

            if (!img) {
                return;
            }

            var title = m(/lst_topic lst_data">(.*?)</);
            if (!title) {
                title = baba;
            }

            var quality = null;
            if (row.includes("__hd_plus __rt")) {
                quality = "HD+";
            } else if (row.includes("__hd __rtl")) {
                quality = "HD";
            }

            var pl = {
                name: title,
                quality: quality,
                video: "https://" + esid + ".bcvcdn.com/hls/stream_" + baba + "/public-aac/stream_" + baba + "/chunks.m3u8",
                picture: "https://" + img
            };

            playlists.push(pl);
        });

        return playlists;
    }


    Menu(url, init) {
        var host = init.host + '/bgs/';

        var sortmenu = [{
                title: "Новые",
                playlist_url: host + 'new-models',
            },
            {
                title: "Пары",
                playlist_url: host + 'couples',
            },
            {
                title: "Девушки",
                playlist_url: host + 'female',
            },
            {
                title: "Парни",
                playlist_url: host + 'male',
            },
            {
                title: "Транссексуалы",
                playlist_url: host + 'trans',
            }
        ]

        var sortname = sortmenu.find(i => url.includes(i.playlist_url.replace(host, '')));

        return [{
                title: "Сортировка: " + (sortname ? sortname.title : 'Новые'),
                playlist_url: "submenu",
                submenu: sortmenu
            }
        ]
    }
}

export default BongaCams;