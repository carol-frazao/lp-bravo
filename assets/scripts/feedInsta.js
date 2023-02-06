
$(function () {
    const token = "IGQVJYamJxOG9KZA2xEMnVWUHg3QzQ1MUxJaWNhNTlpRGdWNTd5bk1Gb0tmOVRlUDZAhbkZAKVlFMWmlWTGJNcWk4LXpRdHR5WGdqeXh6SEE2bG1CNWtLM0xIM3hvemx0YUFUT2lORkhxendVTDc4Wi0wQQZDZD"
    const url = "https://graph.instagram.com/me/media?access_token=" + token + "&fields=media_url,media_type,caption,permalink";

    $.get(url).then(function(response) {
        let posts = response.data
        let conteudo = document.querySelector('.swiper-wrapper')

        for (let i = 0; i < posts.length; i++) {
            let feed = posts[i]
            let titulo = feed.caption !== null ? feed.caption : '';
            let tipo = feed.media_type;
            let link = feed.permalink;
            let post = feed.media_url

            if (tipo === "VIDEO") {
                let htmlForVideo = '<div class="swiper-slide" role="group" aria-label="'+feed+'" style="width: 224.75px; margin-right: 40px;"><video controls><source src="'+post+'" type="video/mp4"></video></div>';
                conteudo.innerHTML += htmlForVideo
            } else if (tipo === "IMAGE") {
                let htmlForImage = '<div class="swiper-slide" role="group" aria-label="'+feed+'" style="width: 224.75px; margin-right: 40px;"><img alt="Post do instagram da Bravo Brasil" src="'+post+'"onclick="window.open(\''+link+'\');"></div>';
                conteudo.innerHTML += htmlForImage
            }
        }
    })
})

