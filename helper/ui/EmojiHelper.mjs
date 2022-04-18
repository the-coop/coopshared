// const EMOJIS = import('../../config/emojis.json');
// const EMOJI_BASE_URL = 'https://cdn.discordapp.com/emojis';

import EMOJIS from '../../config/emojis.mjs';

export default class EmojiHelper {
    static EMOJIS = EMOJIS;

    static idToURL(id, size = 240) {
        return `${EMOJI_BASE_URL}/${id}.webp?size=${size}&quality=lossless`;
    }
    static itemCodeToUnicode(code) {
        return EMOJIS[code.toUpperCase()].unicode || null;
    }
    static itemCodeToEmojiURL(code) {
        let url = null;

        const itemCode = EMOJIS[code.toUpperCase()] || null;
        const idParts = itemCode.split(':')
        const idPart = idParts[idParts.length - 1];
        const isEmojiID = !isNaN(idPart);

        if (isEmojiID)
            url = this.idToURL(idPart);

        return url;
    }
}