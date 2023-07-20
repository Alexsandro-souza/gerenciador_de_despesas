

export default function GetCurrentMonth () {
    let now = new Date();

    return `${now.getFullYear} / ${now.getMonth + 1}`
}