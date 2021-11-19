






















const newLotsData = [...mainData.lots];
newLotsData.forEach(lot => {
    if (lot['HOMEs'] !== "") {
        const span = (new DOMParser()).parseFromString(lot['HOMEs'], 'text/html').querySelectorAll('span')
        const homesData = Array.from(span).map(item => {
            const design = item.innerText
            return mainData.homes.find(home => home['DESIGN'] === design)
        })

        lot['Lot_Bedrooms'] = [+lot['Lot_Bedrooms'], ...homesData.map(i => i['BEDROOMS'])]

        console.log(lot.Lot_Number, 'homesData', homesData);
        console.log(lot.Lot_Number, lot['Lot_Bedrooms']);
    }
})