export function callSets() {
    
    return fetch("https://api.magicthegathering.io/v1/sets")
    .then(res => res.json())
    
}

    