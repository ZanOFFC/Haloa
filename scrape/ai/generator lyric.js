/*
 • Fitur By Anomaki Team
 • Created : xyzan code
 • Generator Lyrics
 • Jangan Hapus Wm
 • https://whatsapp.com/channel/0029Vaio4dYC1FuGr5kxfy2l
base: https://www.freshbots.org/
*/

const axios = require('axios');
async function bikinLirik(topic, ktakunci, emosi, style, judul, barisPertama) {
    const styles = [
        'Rap',
        'Drill',
        'Gangsta-Rap',
        'Pop',
        'Country',
        'Rock',
        'Heavy Metal',
        'Gospel',
        'Soul',
        'Reggae'
    ];

    if (!styles.includes(style)) {
        throw new Error(`Style ${style} tidak tersedia`);
    }

    try {
        const payload = {
            slug: "",
            topics: Array.isArray(topic) ? topic : [topic].filter(Boolean),
            keywords: Array.isArray(ktakunci) ? ktakunci : [ktakunci].filter(Boolean),
            emotions: Array.isArray(emosi) ? emosi : [emosi].filter(Boolean),
            style: style,
            title: judul || "",
            firstLine: barisPertama || ""
        };

        const {
            data
        } = await axios.post('https://www.freshbots.org/api/lyric-object',
            payload, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
                    'Referer': 'https://www.freshbots.org/'
                }
            }
        );

        return {
            success: true,
            data: data,
            metadata: {
                style: style,
                keywords: payload.keywords,
                createdAt: new Date().toISOString()
            }
        };
    } catch (err) {
        return {
            success: false,
            error: err.message,
            metadata: {
                attemptedAt: new Date().toISOString()
            }
        };
    }
}

module.exports = bikinLirik;
