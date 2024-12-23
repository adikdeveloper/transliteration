const latinToCyrillic = {
    'a': 'а', 'b': 'б', 'd': 'д', 'e': 'е', 'f': 'ф', 'g': 'г', 'h': 'ҳ',
    'i': 'и', 'j': 'ж', 'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о',
    'p': 'п', 'q': 'қ', 'r': 'р', 's': 'с', 't': 'т', 'u': 'у', 'v': 'в',
    'x': 'х', 'y': 'й', 'z': 'з', 'ʻ': 'ъ', 'ʼ': 'ъ', "'": 'ъ', 'oʻ': 'ў', 'gʻ': 'ғ',
    'sh': 'ш', 'ch': 'ч', 'ng': 'нг', 'yo': 'ё', 'yu': 'ю', 'ya': 'я',
    'ye': 'е', 'A': 'А', 'B': 'Б', 'D': 'Д', 'E': 'Е', 'F': 'Ф', 'G': 'Г',
    'H': 'Ҳ', 'I': 'И', 'J': 'Ж', 'K': 'К', 'L': 'Л', 'M': 'М', 'N': 'Н',
    'O': 'О', 'P': 'П', 'Q': 'Қ', 'R': 'Р', 'S': 'С', 'T': 'Т', 'U': 'У',
    'V': 'В', 'X': 'Х', 'Y': 'Й', 'Z': 'З', 'Oʻ': 'Ў', 'Gʻ': 'Ғ',
    'Sh': 'Ш', 'Ch': 'Ч', 'Ng': 'Нг', 'Yo': 'Ё', 'Yu': 'Ю', 'Ya': 'Я'
};

const cyrillicToLatin = {
    'а': 'a', 'б': 'b', 'д': 'd', 'е': 'e', 'ф': 'f', 'г': 'g', 'ҳ': 'h',
    'и': 'i', 'ж': 'j', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
    'п': 'p', 'қ': 'q', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 'в': 'v',
    'х': 'x', 'й': 'y', 'з': 'z', 'ъ': 'ʻ', 'ў': 'oʻ', 'ғ': 'gʻ', 'ш': 'sh',
    'ч': 'ch', 'ё': 'yo', 'ю': 'yu', 'я': 'ya', 'А': 'A', 'Б': 'B', 'Д': 'D',
    'Е': 'E', 'Ф': 'F', 'Г': 'G', 'Ҳ': 'H', 'И': 'I', 'Ж': 'J', 'К': 'K',
    'Л': 'L', 'М': 'M', 'Н': 'N', 'О': 'O', 'П': 'P', 'Қ': 'Q', 'Р': 'R',
    'С': 'S', 'Т': 'T', 'У': 'U', 'В': 'V', 'Х': 'X', 'Й': 'Y', 'З': 'Z',
    'Ў': 'Oʻ', 'Ғ': 'Gʻ', 'Ш': 'Sh', 'Ч': 'Ch', 'Ё': 'Yo', 'Ю': 'Yu', 'Я': 'Ya'
};

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const toLatin = document.getElementById('toLatin');
const toCyrillic = document.getElementById('toCyrillic');
const copyBtn = document.getElementById('copyBtn');
const clearBtn = document.getElementById('clearBtn');

function convertToLatin(text) {
    let result = text;
    // Convert special cases first
    result = result.replace(/Ё/g, 'Yo').replace(/Ю/g, 'Yu').replace(/Я/g, 'Ya')
                 .replace(/ё/g, 'yo').replace(/ю/g, 'yu').replace(/я/g, 'ya')
                 .replace(/Ш/g, 'Sh').replace(/Ч/g, 'Ch')
                 .replace(/ш/g, 'sh').replace(/ч/g, 'ch')
                 .replace(/Ў/g, 'Oʻ').replace(/Ғ/g, 'Gʻ')
                 .replace(/ў/g, 'oʻ').replace(/ғ/g, 'gʻ');
    
    // Then convert the rest
    for (let cyrillic in cyrillicToLatin) {
        result = result.replace(new RegExp(cyrillic, 'g'), cyrillicToLatin[cyrillic]);
    }
    return result;
}

function convertToCyrillic(text) {
    let result = text;
    // Convert special cases first
    result = result.replace(/Yo/g, 'Ё').replace(/Yu/g, 'Ю').replace(/Ya/g, 'Я')
                 .replace(/yo/g, 'ё').replace(/yu/g, 'ю').replace(/ya/g, 'я')
                 .replace(/Sh/g, 'Ш').replace(/Ch/g, 'Ч')
                 .replace(/sh/g, 'ш').replace(/ch/g, 'ч')
                 .replace(/Oʻ/g, 'Ў').replace(/Gʻ/g, 'Ғ')
                 .replace(/oʻ/g, 'ў').replace(/gʻ/g, 'ғ');
    
    // Then convert the rest
    for (let latin in latinToCyrillic) {
        result = result.replace(new RegExp(latin, 'g'), latinToCyrillic[latin]);
    }
    return result;
}

toLatin.addEventListener('click', () => {
    outputText.value = convertToLatin(inputText.value);
});

toCyrillic.addEventListener('click', () => {
    outputText.value = convertToCyrillic(inputText.value);
});

copyBtn.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Matn nusxalandi!');
});

clearBtn.addEventListener('click', () => {
    inputText.value = '';
    outputText.value = '';
});